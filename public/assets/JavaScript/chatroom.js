const socket = io();
let currentRoomId = null;
let time_sent = null;
let local_time = null;
let userInfo = { id: null, displayName: null, avatar: null, roomId: null, socketId: null, rank: null };

document.querySelector('#msgForm').addEventListener('submit', sendMsg);
document.querySelector('#logoutBtn').addEventListener('click', logOut);

// INITIALIZATION OF CHATROOM
socket.on('connect', () => {
    checkAccesskey();
    roomList();
})

async function checkAccesskey() {
    // redirect to noaccess if no accesskey
    if (!sessionStorage.accesskey) {
        window.location.replace('/noaccess');
    }
    // grab user info using accessKey
    const accesskey = window.sessionStorage.accesskey;
    // save user info
    const  { id, display_name, avatar, rank } = await fetch(`/api/users/${accesskey}`).then(r => r.json());
    userInfo.id = id;
    userInfo.displayName = display_name;
    userInfo.avatar = avatar;
    userInfo.socketId = socket.id;
    userInfo.rank = rank;
    // send connected status to server
    socket.emit('connectToServer', userInfo);
}

async function roomList() {
    document.querySelector('#roomList').innerHTML = '';
    document.querySelector('#overlayRoomList').innerHTML = '';
    document.querySelector('#sbRoomList').innerHTML = '';
    // GET REQUEST: room list
    const rooms = await fetch('/api/rooms').then(r => r.json());
    // print rooms to room list
    for (let i = 0; i < rooms.length; i++) {
        document.querySelector('#roomList').innerHTML +=
      `<li><button class="btn btn-color chatroomBtn btnChatRoomsize" id="room-${rooms[i].id}">${rooms[i].room_name}</button></li>`;
        document.querySelector('#overlayRoomList').innerHTML +=
      `<li><button class="btn btn-info chatroomBtn" id="overlayRoom-${rooms[i].id}">${rooms[i].room_name}</button>
      <button class="btn btn-outline-danger chatroomBtnDelete" id="overlayRoomDel-${rooms[i].id}" data-bs-toggle="modal" data-bs-target="#staticBackdrop" onClick="triggerModal('${rooms[i].id}')">Delete</button></li>`;
        document.querySelector('#sbRoomList').innerHTML +=
      `<li class="center"><button class="btn btn-info chatroomBtn btnSize" id="sbRoom-${rooms[i].id}">${rooms[i].room_name}</button></li>`;
    }
    // add event listeners
    for (let i = 0; i < rooms.length; i++) {
        document.querySelector(`#room-${rooms[i].id}`).addEventListener('click', () => {
            joinRoom(rooms[i])
        });
        document.querySelector(`#overlayRoom-${rooms[i].id}`).addEventListener('click', () => {
            joinRoom(rooms[i])
        });
        document.querySelector(`#sbRoom-${rooms[i].id}`).addEventListener('click', () => {
            joinRoom(rooms[i])
        });
    }
}

function triggerModal(id){
    document.querySelector('#deleteRoomBtn').setAttribute('onClick', `delRoom(${id})`);
}

function hideMenu(event){
    console.log(event.target.id);
    if(event.target.id.indexOf('sbRoom') > -1){
        document.querySelector('#mySidepanel').classList.remove('show')
    }
}

//userList on side
async function userList() {
    // TO-DO: load online users list (#userList)
    document.querySelector('#userList').innerHTML = '';
    document.querySelector('#sbUserList').innerHTML = '';
    // GET REQUEST: users list
    const users = await fetch(`/api/online/${currentRoomId}`).then(r => r.json());
    console.log('users:', users);
    // print users to user list
    for (let i = 0; i < users.length; i++) {
        document.querySelector('#userList').innerHTML += `<li><img src="${users[i].avatar}" alt="avatar" height="25px" width="25px"/> ${users[i].displayName}</li>`;
        document.querySelector('#sbUserList').innerHTML += `<li>${users[i].displayName}</li>`;
    }
  //  socket.emit('inactivity');
}

//loading previous messages
async function prevMsgs(roomId) {
    // TO-DO: load previous messages
    document.querySelector('#msgList').innerHTML = '';
    // GET REQUEST: previous messages
    const prev = await fetch(`/api/messages/${roomId}`).then(r => r.json())
        .catch(err => [{ display_name: 'Error', message_body: err }]);
    // print messages
    for (let i = 0; i < prev.length; i++) {
        document.querySelector('#msgList').innerHTML += `<li><img src="${prev[i].avatar}" alt="avatar" height="25px" width="25px"/> ${prev[i].display_name}: ${prev[i].message_body} ${prev[i].time_sent}</li>`;
    }
    // scroll to bottom of message box
    document.querySelector('#msgList').scrollTop = document.querySelector('#msgList').scrollHeight;
}

// joining a room
async function joinRoom(room) {
    // leave old room
    if (currentRoomId) {
        socket.emit('leave', { roomId: currentRoomId, userId: userInfo.id, socketId: socket.id });
    }
    // load old messages in new room
    await prevMsgs(room.id);
    // join new room
    socket.emit('join', { roomId: room.id, userId: userInfo.id, socketId: socket.id });
    currentRoomId = room.id;
 //   socket.emit('inactivity');
    // hide room overlay
    hideRoomOverlay();
    // print new room name
    document.querySelector('#roomName').innerHTML = room.room_name;
}

// creating a room
async function createRoom(){
    const rooms = await fetch('/api/rooms').then(r => r.json());
    console.log('room', rooms)
    const el_error1 = document.querySelector('#error1');
    const el_roomName = document.querySelector('#addRoom').value;

    el_error1.classList.add('d-none');

    const checkDuplicate = rooms.filter(room=>(room.room_name === el_roomName));

    if ( el_roomName === '' || el_roomName.includes(' ') || checkDuplicate.length !== 0){
        console.log('This is duplicate: ', checkDuplicate);
        el_error1.classList.remove('d-none');
        return;
    } else {
        console.log ('This room is available.');
        await fetch('/api/rooms', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ room_name: el_roomName })
        }).then( res=>res.json() )
        console.log( 'The room is added.');
        document.querySelector('#addRoomBtn').setAttribute('data-bs-toggle', 'modal');
        document.querySelector('#addRoomBtn').setAttribute('data-bs-target', '#exampleModal');
        document.querySelector('#addRoomBtn').removeAttribute('onClick');
        document.querySelector('#addRoomBtn').click();
        document.querySelector('#addRoomBtn').removeAttribute('data-bs-target');
        document.querySelector('#addRoomBtn').removeAttribute('data-bs-toggle');
        document.querySelector('#addRoomBtn').setAttribute('onClick', 'createRoom()');
        roomList();
    }
}

// deleting a room
async function delRoom(roomid) {
    console.log(roomid);
    await fetch(`/api/rooms/${roomid}`, { method: 'DELETE' }).catch((err) => console.log(err));
    roomList();
}

function hideRoomOverlay() {
    if (!document.querySelector('#roomOverlay').classList.contains('d-none')) {
        document.querySelector('#roomOverlay').classList.add('d-none');
    }
}

// send message to server
async function sendMsg(e) {
    e.preventDefault();
    const currTimestamp = Date.now(), utcDateString = (new Date(currTimestamp)).toUTCString();

    const timeForUnix = new Date(utcDateString).getTime();
    const timeInSeconds = Math.round((timeForUnix / 1000));
    time_sent = timeInSeconds;

    const date = new Date();
    const local = date.toLocaleTimeString();
    local_time = local;

    const msg = document.querySelector('#msg').value;
    if (msg) {
        socket.emit('message', { roomId: currentRoomId, avatar: userInfo.avatar, displayName: userInfo.displayName, msg: msg, time_sent: time_sent});
        document.querySelector('#msg').value = '';
    }

    //chat history save or delete from db. right here.


    // save message to DB
    await fetch('/api/messages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId: userInfo.id, roomId: currentRoomId, msg: msg, time_sent: time_sent})
    })
}

// logout
function logOut() {
    sessionStorage.clear();
    window.location.replace('/');
}

// receive message from server
socket.on('receivedMsg', (data) => {
    document.querySelector('#msgList').innerHTML += `<li><img src="${data.avatar}"  alt="avatar" height="25px" width="25px"/> ${data.displayName}: ${data.msg} ${data.time_sent}</li>`;
    // scroll to bottom of message box
    document.querySelector('#msgList').scrollTop = document.querySelector('#msgList').scrollHeight;
})

// receive connected event from server
socket.on('enteredRoom', (data) => {
    document.querySelector('#msgList').innerHTML += `<li class="system-msg"> ${data.rank} ${data.displayName} has entered the room</li>`;
    // scroll to bottom of message box
    document.querySelector('#msgList').scrollTop = document.querySelector('#msgList').scrollHeight;
    userList();
})

// receive disconnect event from server
socket.on('disconnected', (data) => {
    document.querySelector('#msgList').innerHTML += `<li class="system-msg">User ${data.displayName} has left the room</li>`;
    // scroll to bottom of message box
    document.querySelector('#msgList').scrollTop = document.querySelector('#msgList').scrollHeight;
    userList();
})

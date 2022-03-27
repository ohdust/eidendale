const socket = io();
let noticeboardInfo = { noticeboardInfo: null, timeCreated: null, noticeboardBody: null, author: null };

function fetchJSON( url, method='get', data={} ){
    // post requires header, method + data to be sent
    const users = {
        headers: { 'Content-Type': 'application/json' },
        method,
    }
    if (method === 'post'){
        users.body = JSON.stringify (data)
    }
    return fetch( url, users).then( res=>res.json() )
}


socket.on('connect', () => {
    checkAccesskey();
})

//checks access key and shows noticeboard
async function checkAccesskey() {
    if (!sessionStorage.accesskey) {
        window.location.replace('/noaccess');
    }

    //fetches character information
    const getCharacterInfo = await fetch(`/api/users/${accesskey}`).then(r => r.json());
    const displayCharacterData = JSON.parse(JSON.stringify(getCharacterInfo));
    document.querySelector('#characterInfo').innerHTML = displayCharacterData.rank + " " + displayCharacterData.display_name;

    //get noticeboard info + print to page
    const fetchNoticeboard = await fetch(`/api/noticeboard`).then(r => r.json());
    const printNoticeboard = JSON.parse(JSON.stringify(fetchNoticeboard));

    for(const key in printNoticeboard) {
        document.querySelector('#noticeboard').innerHTML = printNoticeboard[key].title + " " +
            printNoticeboard[key].noticeboardBody + " " + printNoticeboard[key].timeCreated +  " " + printNoticeboard[key].author;
        console.log(printNoticeboard[key].title);
    }


}

//when clicking the register button...
async function addNewNoticeBoardPost(event) {

    event.preventDefault();

    let addToNoticeBoard = {
        title: title.value.trim(),
        timeCreated: timeCreated.value.trim(),
        noticeboardBody: noticeboardBody.value.trim(),
        author: author.value.trim(),
    };
    const response = await fetchJSON('api/noticeboard/add', 'post', addToNoticeBoard)
    if (response.message) {
        alert(response.message)
    }
}

// grab user info using accessKey
const accesskey = window.sessionStorage.accesskey;
console.log(accesskey);


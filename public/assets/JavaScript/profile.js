const socket = io();

socket.on('connect', () => {
    showProfiles();
})

//checks access key then returns profile of current user (logged in as)
async function showProfiles() {
    if (!sessionStorage.accesskey) {
        window.location.replace('/noaccess');
    }
    //get for current users profile (logged in as). Looks up accesskey to fetch the current users info.
    const fetchLoginID = await fetch(`/api/profile/current/${accesskey}`).then(r => r.json());
    const displayCharacterData = JSON.parse(JSON.stringify(fetchLoginID));
    document.querySelector('#getCurrentUsersProfile').innerHTML = displayCharacterData.age + " " +
        displayCharacterData.playby + displayCharacterData.nickNames + displayCharacterData.description + displayCharacterData.fullName;

    //fetching all characters whos rank is an auror to display on profile page!
    const fetchAllAurors = await fetch(`/api/profile/aurors`).then(r => r.json());
    const fetchAllAurorsFetch = JSON.parse(JSON.stringify(fetchAllAurors));


    //fetches users information
    const getcurrentUsersInformation = await fetch(`/api/users/${accesskey}`).then(r => r.json());
    const displaycurrentUsersInformation = JSON.parse(JSON.stringify(getcurrentUsersInformation));

    console.log(displaycurrentUsersInformation);

    var profileID = await fetch(`/api/profile/${firstName}/${lastName}`);
    for(var item in fetchAllAurorsFetch) {
        for (var element in fetchAllAurorsFetch[item]) {
           // document.querySelector('#getAllAurors').innerHTML += fetchAllAurorsFetch[item] [element];
           // <img src="${users[i].avatar}" alt="avatar" height="25px" width="25px"/>
           // document.querySelector('#getAllAurors').innerHTML += `<a href="/view/${profileID}>fetchAllAurorsFetch[item] [element]`;
        }
    }
}
const accesskey = window.sessionStorage.accesskey;
console.log(accesskey);

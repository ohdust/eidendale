const orm = require('../config/orm');

//profiles used throughout the site.
const profile = {
    users: 'users',
    profile: 'view_profile',

    showAllUsers: async function () {
        const result = await orm.directQuery(`Select t1.rank, t2.profilePicture, t2.nickNames, t2.age, t2.playby, t2.description, t2.connections, t2.color, t2.fullName from users t1 inner join view_profile t2 on t2.profileID = t1.login_ID;`);
        return result;
    },
    getCurrentUsersProfile: async function(userInfoLoginID) {
        const result = await orm.directQuery(`Select DISTINCT profilePicture, nickNames, age, playby, description, connections, color, fullName from view_profile INNER JOIN users on view_profile.profileID = ${userInfoLoginID};`);
        return result[0];
    },
    showAllStudents: async function() {
        const result = await orm.directQuery(`Select t1.rank, t2.fullName t2.avatar from users t1 inner join view_profile t2 on t2.profileID = t1.login_ID where t1.rank = 'Student';`);
        return result;
    },
    showAllAurors: async function() {
        const result = await orm.directQuery(`Select t1.rank, t2.profileID, t2.fullName, t1.avatar from users t1 inner join view_profile t2 on t2.profileID = t1.login_ID where t1.rank = 'Auror';`);
        return result;
    },
    getCharactersProfileID: async function(firstName, lastName) {
        const result = await orm.directQuery(`Select profileID from users where users.firstName = ${firstName} and users.lastName = ${lastName};`);
        return result;
    }
}
module.exports = profile;

const orm = require('../config/orm');

const user = {
    name: 'users',
    pending: 'pendingUsers',

    listAll: async function() {
        const result = await orm.selectAll(this.name);
        return result;
    },

    //User has to fill out forms to login and goes to new table - pendingUser
    addNewCharacterToPendingUser: async function(loginID, firstName, lastName, displayName, avatarPNG, title) {
        const vars = '(login_id, first_name, last_name, display_name, avatar_dirct, title)';
        const data = `(${loginID}, '${firstName}', '${lastName}', '${displayName}', '${avatarPNG}', '${title}')`;
        await orm.insertOne(this.pending, vars, data);
    },

    //Wrote To DB
    addNew: async function(loginID, firstName, lastName, displayName, avatarPNG, title) {
        const vars = '(login_id, first_name, last_name, display_name, avatar_dirct, title)';
        const data = `(${loginID}, '${firstName}', '${lastName}', '${displayName}', '${avatarPNG}', '${title}')`;
        await orm.insertOne(this.name, vars, data);
    },

    updateFirstName: async function(loginID, newFirstName) {
        const change = `first_name = '${newFirstName}'`;
        const index = `login_id = ${loginID}`;
        await orm.updateOne(this.name, change, index);
    },

    updateLastName: async function(loginID, newLastName) {
        const change = `last_name = '${newLastName}'`;
        const index = `login_id = ${loginID}`;
        await orm.updateOne(this.name, change, index);
    },

    updateDisplayName: async function(loginID, newDisplayName) {
        const change = `display_name = '${newDisplayName}'`;
        const index = `login_id = ${loginID}`;
        await orm.updateOne(this.name, change, index);
    },

    //old way to get getUserInfo
    // getUserInfo: async function(accesskey) {
    //     const result = await orm.findOne(
    //         'users LEFT JOIN login_info ON login_info.id = login_id',
    //         'users.id, users.display_name, users.avatar_dirct, users.title',
    //         `login_info.user_name = \'${accesskey}\';`
    //     )
    //     return result[0];
    // }


    //new way to getUserInfo
    getUserInfo: async function(accesskey) {
        const result = await orm.directQuery(`SELECT id, display_name, avatar_dirct, title, login_id FROM users where id = ${accesskey};`);
        return result[0];

        // const result = await orm.directQuery(
        //     `SELECT messages.room_id, users.avatar_dirct, users.display_name, messages.message_body, messages.time_sent
        // FROM messages LEFT JOIN users ON users.id = user_id WHERE room_id = ${roomId};`);
        // return result;

    }
};

module.exports = user;

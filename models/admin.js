const orm = require('../config/orm');

//admin functionality
const admin = {
    users: 'users',
    pendingUsers: 'pendingUsers',

    showAllUsers: async function () {
        const result = await orm.selectAll(this.users)
        return result;
    },
    showAllPendingUsers: async function() {
        const result = await orm.selectAll(this.pendingUsers)
        return result;
    },
}
module.exports = admin;

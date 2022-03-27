const orm = require('../config/orm');

//profiles used throughout the site.
const profile = {
    users: 'users',

   showAllUsers: async function () {
        const result = await orm.selectAll(this.users)
        return result;
    },
}
module.exports = profile;

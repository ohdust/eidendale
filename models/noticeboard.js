const orm = require('../config/orm');

//noticeboard is the table
const noticeboard = {
    name: 'noticeboard',

    showAllNoticeboardPosts: async function () {
        const result = await orm.selectAll(this.name)
        return result;
    },
    addNoticeboardPost: async function(title, timeCreated, noticeboardBody, author) {
        const varName = '(title, timeCreated, noticeboardBody, author)';
        const data = `(${title}, '${timeCreated}', '${noticeboardBody}', '${author}')`;
        await orm.insertOne(this.name, varName, data);
    }
}
module.exports = noticeboard;



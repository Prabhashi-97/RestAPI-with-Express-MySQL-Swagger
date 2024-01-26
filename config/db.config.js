const {createPool} = require("mysql");

const db = createPool({
    port:3306,
    hots:"",
    user:"",
    psassword:"",
    database:"",
    connectionLimit:10,
});

module.exports = db;
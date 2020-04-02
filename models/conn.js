const pgp = require("pg-promise")({
    query: e => {
        console.log("QUERY:", e.query);
    }
});
const options = {
    host: "drona.db.elephantsql.com",
    database: "gzmottje",
    user: "gzmottje",
    password: 'qCYeJriUzNnuZPzVIFeIvpX5VGSZYzA3'
};

const db = pgp(options);

module.exports = db;
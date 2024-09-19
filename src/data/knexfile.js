// Update with your config settings.

/**
* @type { Object.<string, import("knex").Knex.Config> }
*/
module.exports = {

    dev: {
        client: 'sqlite3',
        connection: {
            filename: './db/db.sqlite3'
        },
        migrations: {
            directory: './migrations' 
        },
        seeds: {
            directory: './seeds'
        },
        useNullAsDefault: true
    }
};

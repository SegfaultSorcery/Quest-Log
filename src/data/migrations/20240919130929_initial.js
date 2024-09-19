// DOCS: https://knexjs.org/guide/schema-builder.html
exports.up = async function(knex) {
    await knex.schema.createTable('tasks', tbl => {
        tbl.increments('id'); 
        tbl.string('name').notNullable(); 
        tbl.string('description').nullable(); 
        tbl.datetime('start').defaultTo(knex.fn.now()); 
        tbl.datetime('end').nullable(); 
        tbl.boolean('complete').notNullable(); 
    });
};

exports.down = async function(knex) {
    await knex.schema.dropTableIfExists('tasks'); 
};

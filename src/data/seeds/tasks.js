exports.seed = async function(knex) {
    await knex('tasks').del();

    await knex('tasks').insert([
        { name: 'Sample Task 1', description: 'Description for task 1', start: new Date().toISOString(), end: null, complete: false },
        { name: 'Sample Task 2', description: 'Description for task 2', start: new Date().toISOString(), end: null, complete: true },
    ]);
};

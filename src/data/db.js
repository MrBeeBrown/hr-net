import Dexie from 'dexie';

const db = new Dexie('EmployeesDatabase');

db.version(1).stores({
    items: '++id, firstName, lastName, startDate, department, birthday, street, city, state, zipCode'
});

export default db;

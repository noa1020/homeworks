const fsp = require('fs').promises;
const express = require('express');
const app = express();
const PORT = 8000;
async function loadUsers() {
    const data = await fsp.readFile('people_list.json', 'utf8')
    const peoplesArray = JSON.parse(data);
    return peoplesArray;
}
app.get('/users', async (req, res) => {
    try {
        const users = await loadUsers();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).send('Error retrieving users');
    }
});
async function loadWorkers() {
    try {
        const users = await loadUsers();
        const workersArray = users.filter(user => user.employment_status === "employed" && user.date_of_birth < '2003-11-15');
        return workersArray;
    } catch (error) {
        res.status(500).send('Error retrieving users');
    }
}
app.get('/workers', async (req, res) => {
    try {
        const workers = await loadWorkers();
        res.status(200).json(workers);
    } catch (error) {
        res.status(500).send('Error retrieving workers');
    }
});

app.listen(PORT, (error) => {
    if (!error)
        console.log("Server is Successfully Running, and App is listening on port " + PORT)
    else
        console.log("Error occurred, server can't start", error);
}
);


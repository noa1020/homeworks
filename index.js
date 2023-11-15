async function fechUsers() {
    try {
        const response = await fetch("http://localhost:8000/users");
        const data = await response.json();
        console.log("List of users:");
        console.log(JSON.stringify(data, null, 2));
        } catch (error) {
        console.log('Error:', error);
    }
}

fechUsers();
async function fechWorkers() {
    try {
        const response = await fetch("http://localhost:8000/workers");
        const data = await response.json();
        console.log("List of workers:");
        console.log(JSON.stringify(data, null, 2));

    } catch (error) {
        console.log('Error:', error);
    }
}

fechWorkers();

function createTable(username) {

    return fetch('http://localhost:3030/microservice/create/' + username, {
        method: 'POST',
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Failed to create table');
        }
        return response.json();
    })
    .then(data => {
        console.log('Table created successfully:', data);
        return data;
    })
    .catch(error => {
        console.error('Error creating table:', error);
        throw error;
    });
}

function getTable(username) {

    return fetch('http://localhost:3030/microservice/get/' + username, {
        method: 'GET',
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Failed to return table data');
        }
        return response.json();
    })
    .then(data => {
        console.log('Table data:', data);
        return data;
    })
    .catch(error => {
        console.error('Error getting table data:', error);
        throw error;
    });
}

function getChoiceStep(username, step) {

    return fetch('http://localhost:3030/microservice/get/' + username + "?choice_step=" + step, {
        method: 'GET',
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Failed to get choice step');
        }
        return response.json();
    })
    .then(data => {
        console.log('choice step data:', data);
        return data;
    })
    .catch(error => {
        console.error('Error getting choice step data:', error);
        throw error;
    });
}

function updateTable(username, choice_id, prompt, choice_text) {
    console.log(username + choice_id + prompt + choice_text);
    return fetch('http://localhost:3030/microservice/update/' + username, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ "choice_id":choice_id, "prompt": prompt, "choice_text":choice_text }),
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Failed to update table');
        }
        return response.json();
    })
    .then(data => {
        console.log('Table updated successfully:', data);
        return data;
    })
    .catch(error => {
        console.error('Error updating table:', error);
        throw error;
    });
}

module.exports = { createTable, updateTable, getTable, getChoiceStep };
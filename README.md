# jansseal-Microservice
This microservice is designed to handle choice saving and getting in the game developed by Alexandra Rogers.

## Communication Contract

### How to progammatically update Data
to update dta to this microservices, you can make HTTP post to the following endpoints:
1.`http://localhost:3030/microservice/create/:_user`: will create a table within the database for the current user using the users, username
* Example Call:
  ```
  POST http://localhost:3030/microservice/create/Caden HTTP/1.1
  ```
* Example Code:
  ```
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
  ```
2.`http://localhost:3030/microservice/update/:_user`: this will update the user table with the Choice ID, Prompt, and Choice Text in the body of the post call.
* Example Call:
```
POST http://localhost:3030/microservice/update/Caden HTTP/1.1
content-type: application/json

{
    "choice_id": "1",
    "prompt": "Prompt example text",
    "choice_text": "Choice example text"
}
```
* Example Code:
```
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
```

### How to Programmatically REQUEST and RECIVE Data
To request and Recive data from this microservice, you can make HTTP GET requests to the following endpoints:

2.`http://localhost:3030/microservice/get/:_user`: will return the users table within the database
* returns a json payload with the following structure:
  `
  [
    {
      "choice_step": 1,
      "choice_id": 1,
      "prompt": "prompt_example",
      "choice_text": "Choice_text_example"
    }
  ]
  `
* Example Call:
```
GET http://localhost:3030/microservice/get/Caden HTTP/1.1
```

* Example Code:
```
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
```

3.`http://localhost:3030/microservice/get/:_user?choice_step=(int)`: returns a unqiue row where choice step is the number choice the user made, 1 being the first choice etc.
* returns a json payload with the following structure:
  `
  [
    {
      "choice_step": 1,
      "choice_id": 1,
      "prompt": "prompt_example",
      "choice_text": "Choice_text_example"
    }
  ]
  `
* Example Call:
  ```
  GET http://localhost:3030/microservice/get/Caden?choice_step=1 HTTP/1.1
  ```
* Example Code:
  ```
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
  ```

### UML Sequence Diagram
![UML Sequence Diagram](![diagram](https://github.com/whitecad1228/microservice/assets/129924185/3f16bec5-01cf-4caf-8fc3-80cc7b1642a6))

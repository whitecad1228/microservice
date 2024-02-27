const mysql = require('mysql2');
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3030;

app.use(express.json())
app.use(cors());


const dbConfig = {
    host: 'localhost',
    user: 'root',
    password: 'Cade314514!',
    database: 'finalgirl_db'
};

const connection = mysql.createConnection(dbConfig);

app.post('/microservice/create/:_user', (req,res) =>{
    const _user = req.params._user
    console.log(_user)
    connection.query("CREATE TABLE " + _user + " (choice_step INT AUTO_INCREMENT PRIMARY KEY, choice_id INT , prompt VARCHAR(255), choice_text VARCHAR(255))" , function (err, result) {
        if (err) throw err;
        console.log("table created");
      });
    

})

app.post('/microservice/update/:_user', (req,res) =>{
    const _user = req.params._user;
    const {choice_id , prompt, choice_text } = req.body;
    
    const query = "INSERT INTO " + _user + "(choice_id, prompt, choice_text) VALUES(?, ?, ?)";
    connection.query(query,[choice_id, prompt, choice_text], function (err, result) {
        if (err) throw err;
        console.log("values inserted");
      });
    

})

app.get('/microservice/get/:_user', (req,res) =>{
    const _user = req.params._user
    if(req.query.choice_step !== undefined){
        const _choice_step = req.query.choice_step
        connection.query("SELECT * from " + _user + " where choice_step = " + _choice_step , function (err, result) {
            if (err) throw err;
            res.send(result)
          });
    }else{
        connection.query("SELECT * from " + _user , function (err, result) {
            if (err) throw err;
            res.send(result)
          });
    }
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
  
const {
    createPool
} = require('mysql');

const pool = createPool({
    host:"localhost",
    user:"root",
    password: "",
    database: "raj",
    connectionLimit: 10
})

var username = document.getElementById('username');
var password = document.getElementById('password');
var submit = document.getElementById('submit');


submit.click(
pool.query('insert into login values(?,?)',[username,password], (err,result,fields) =>
{
    if(err){
        return console.log(err);
    }
    return console.log(result);
    }));
import React, { useState,useEffect } from 'react';
import axios from 'axios'
import './pages.css'



const SignUp = () => {
	const [username,setusername] = useState("");
	const [password,setpassword] = useState("");

const submitData = () =>
{
		axios.post('http://localhost:4000/api/insert',{Username: username,Password: password}).then(()=>{
			alert('done');
		});


}; 
return (
	
	<div
	style={{
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	}}
	>

		<label>Username</label>
		<input type = "text" name = "username" onChange = {(e)=>{
			setusername(e.target.value);
		}}/>

		<label>Password</label>
		<input type = "password" name  = "password" onChange = {(e)=>{
			setpassword(e.target.value);
		}}/>
<br></br>
		<button className ="buton" onClick	={submitData} type="submit">submit</button>
	</div>
);
};

export default SignUp;

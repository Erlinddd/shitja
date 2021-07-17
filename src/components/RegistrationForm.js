import React, { useEffect, useState } from "react";
import {withRouter,useHistory,useParams} from 'react-router-dom';
import {Button,Form} from "react-bootstrap";
import {motion} from 'framer-motion'
import { ToastContainer, toast } from 'react-toastify';
import "./Login.css";
import axios from "axios";
import MyToast from './myToast'
import axiosInstance from './axios'

toast.configure();


const changeColor={
    color:"white"
      };

function RegistrationForm(props) {
 
  const [UserName,setUserName]=useState("")
  const [FirstName,setFirstName]=useState("")
  const [LastName,setLastName]=useState("")
  const [Password,setPassword]=useState("")
  const history=useHistory();

  const[show,setShow]=useState(false)


   async function  Registration(e){
    e.preventDefault()
    if (UserName=== "" && FirstName=== "" && LastName ==="" && Password ===""){
      alert ("Fill the form ")
      return;
    }
    else if(UserName==="")
  {
    alert("Your must fill the email form")
    return;
  }
  else if (FirstName===""){
    alert("You must fill the username ")
    return;
  } else if (LastName===""){
    alert("You must fill the lastname")
    return;
  }
  else if (Password===""){
alert("fill the pass");
return ;
  }
  // let item={UserName,FirstName,LastName,Password}
  
  // let result = await fetch ("https://localhost:44362/api/login/register",{
  //   method:'POST',
  //   body:JSON.stringify(item),
  //   headers:{
  //     "Content-Type":'application/json',
  //     "Accept":'application/json'
  //   }

  // })
  

  
  // result=await result.json()
  // history.push("/")  
  
         
    const data1={UserName,FirstName,LastName,Password}
    axiosInstance.post("/login/register",data1)
    .then ((result)=>{
      console.log(result);
      localStorage.setItem('myDataForReg',UserName);
      if (result.data.Status === '422')
      alert('Invalid User')
      else
      alert("Regjistrimi u kry me sukses!")
      setShow({"show":true})
    
           setTimeout(() => setShow({"show":false}), 3000);
           setTimeout(() => loginList(),500) 
  
    })
  }

const loginList=()=>{
  props.history.push('/')
}
  function validateForm() {    
    return UserName.length > 0 && Password.length > 0;
  }


  return (

    <motion.div className="Login"
    initial={{x:'-100vh'}}
    transition={{type:'spring',stiffness:120}}
  animate={{x:0}}>
      
     
     <div className="text-center" style={changeColor}>  
                  <h1 className="h4 text-gray-900 mb-4">Create a New User</h1>  
                </div> 
      <Form onSubmit={Registration}>
        <Form.Group size="lg" controlId="email">
          <Form.Label style={changeColor} >Username</Form.Label>
          <Form.Control
            autoFocus
            name="Email"
            type="email"
            value={UserName}
            onChange={(e)=>setUserName(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="email">
          <Form.Label style={changeColor} >FirstName</Form.Label>
          <Form.Control
            autoFocus
            name="FirstName"
            type="FirstName"
            value={FirstName}
            onChange={(e)=>setFirstName(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="email">
          <Form.Label style={changeColor} >Lastname</Form.Label>
          <Form.Control
            autoFocus
            type="lastName"
            name="lastName"
            value={LastName}
            onChange={(e)=>setLastName(e.target.value)}
          />

        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label style={changeColor} >Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            value={Password}
            onChange={(e)=>setPassword(e.target.value)}
          />
        </Form.Group>
        <Button block size="lg" type="submit" onClick={()=>{
          
            validateForm()
        }}>
          Sign Up
        </Button>
{''}
<br/>

        <p className="forgot-password text-right color-white" style={changeColor} >
       You alredy have account? <a href="/">Login</a>
                </p>
      </Form>
      
    </motion.div>
  );
}
export default withRouter(RegistrationForm)
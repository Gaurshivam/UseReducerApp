import React, { useState } from 'react';
import './Register.css'

const Register = () => {
  const [data, setdata] = useState({
    name: "",
    password: "",
    gender: "",
    city: "",
    skills: ""
  })

  const ChangeData = (event) => {
    event.preventDefault()
    console.log(data)
  }
  return (
    <div className='Main'>
      <form>
        <label>Name</label>
        <input type='text' placeholder='Enter Your Name' name='name' onChange={(e) => {
          setdata({ ...data, [e.target.name]: e.target.value })
        }} /><br/>

        <label>Password</label>
        <input type='password' placeholder='Enter Your Password' name='password' onChange={(e) => {
          setdata({ ...data, [e.target.name]: e.target.value })
        }} /><br/>


        <lable>Gender</lable><br />
        <input type='radio' name='gender' value='male'  onChange={(e) => {
          setdata({ ...data, [e.target.name]: e.target.value })
        }} />male
        <input type='radio' name='gender' value='female'  onChange={(e) => {
          setdata({ ...data, [e.target.name]: e.target.value })
        }} />female
        <input type='radio' name='gender' value='other'  onChange={(e) => {
          setdata({ ...data, [e.target.name]: e.target.value })
        }} />other  
        <br/>


        <textarea  name='textarea'  onChange={(e) => {
          setdata({ ...data, [e.target.name]: e.target.value })
        }}  /><br/>


        <select  name='city' onChange={(e) => {
          setdata({ ...data, [e.target.name]: e.target.value })
        }} >
          <option>Select City</option>
          <option value="Delhi">Delhi</option>
          <option value="Noida">Noida</option>
          <option value="Mumbai">Mumbai</option>
          <option value="Pune">Gurugram</option>
        </select>


        <lable >Course</lable><br />
        <input type='checkbox' name='skills' value='HTML' onChange={(e) => {
          setdata({ ...data, [e.target.name]: e.target.value })
        }} />HTML
        <input type='checkbox' name='skills' value='CSS' onChange={(e) => {
          setdata({ ...data, [e.target.name]: e.target.value })
        }} />CSS
        <input type='checkbox' name='skills' value='JS' onChange={(e) => {
          setdata({ ...data, [e.target.name]: e.target.value })
        }} />JS
        <input type='checkbox' name='skills' value='REACT' onChange={(e) => {
          setdata({ ...data, [e.target.name]: e.target.value })
        }} />REACT.JS

        <button onClick={ChangeData}>Register</button>
      </form>
    </div>
  );
}

export default Register;

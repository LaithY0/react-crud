import React, { useState, useEffect } from "react";
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import { FaPlus } from "react-icons/fa";
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
import { useParams, useNavigate } from 'react-router-dom';





function Add() {

    const navigate = useNavigate();

    const [inputs , setInputs ] = useState({});

    const changed = (e) =>{
        const name  = e.target.name;
        const value = e.target.value;
        setInputs(values => ({...values , [name]: value}));
    }
    const submitData = (e) =>{
        e.preventDefault();

        if(inputs.name == null){
            alert("Please enter the Name");
            return;
        }
        if(inputs.address == null){
            alert("Please enter the Address");
            return;
        }
        if(inputs.salary == null){
            alert("Please enter the Salary");
            return;
        }


        console.log("Form Data:", inputs);

        const url = 'http://localhost/react-crud/php%20conn/add.php';

        axios.post(url, inputs)
            .then(response => {
                console.log("Response from PHP:", response.data);

                navigate('/');
            })
            .catch(error => {
                console.error("Error:", error);
            });

            // console.log("Request Data:", inputs);

    }
    
    return (
       <div id="pasdiv">

        <form id="form" onSubmit={submitData}>

        <label for="name">Name : </label>
        <input type="text" name="name" onChange={changed} />
        <label for="address">Address : </label>
        <input type="text" name="address" onChange={changed} />
        <label for="salary">Salary : </label>
        <input type="text" name="salary" onChange={changed} />

        <input type="submit" />
            


        </form>


       </div>
    );
}

export default Add ;

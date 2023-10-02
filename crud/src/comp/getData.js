import React, { useState, useEffect } from "react";
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import { FaPlus } from "react-icons/fa";
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';

function GetData() {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost/react-crud/php%20conn/select.php')
            .then(response => {
                setData(response.data);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }, []);

    console.log(data);
    return (
        <div id="maindiv">

            <div className="container-lg">
                <div className="table-responsive">
                    <div className="table-wrapper">
                        <div className="table-title">
                            <div className="row">
                                <div className="col-sm-8"><h2> Users  <b> Details</b></h2></div>
                                <div className="col-sm-4">
                                  <Link to="/add"> <button type="button" className="btn btn-info add-new">
                                    <FaPlus />  <i className="fa fa-plus"></i> Add New
                                    </button></Link> 
                                </div>
                            </div>
                        </div>
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Name</th>
                                    <th>Address</th>
                                    <th>Salary</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map(item => (
                                    <tr key={item.id}>
                                        <td>{item.id}</td>
                                        <td>{item.namee}</td>
                                        <td>{item.addresss}</td>
                                        <td>{item.salary}</td>
                                        <td>
                                         
                                        <Link to={`/edit/${item.id}`}>   <button type="button" id="edit" className="btn btn-info add-new">
                                                <i className="fa fa-plus"></i> Edit
                                            </button></Link> 
                                            <span>  </span>
                                        
                                            <Link to={`/delete/${item.id}`}>    <button type="button" id="del" className="btn btn-info add-new">
                                                     Delete
                                                </button></Link>
                                        
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GetData;

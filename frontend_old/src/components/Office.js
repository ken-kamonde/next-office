import React from 'react'
import {useEffect, useState} from 'react';
import useAuth from "../hooks/useAuth"
import {Button} from 'react-bootstrap'
import axios from "axios"

const Office = () => {

    const [user, token] = useAuth();
    const [offices, setOffices] = useState([]);

    useEffect(()=> {
        const fetchOffices = async () => {
            try {
                let response = await axios.get("http://127.0.0.1:8000/api/office/all", {
                headers :  {
                    Authorization : "Bearer " + token,
                },
                });
                setOffices(response.data);
            }
            catch(err) {
                console.log(err.message);
            }
        };
        fetchOffices();
    
    },[token]);
    return (
        <div>
            <h1> All Offices:</h1>
            {offices && offices.map((office)=>(
                <li>
                    <Button variant="btn btn-success" > {office.buildingName}</Button>
                </li>
            ))}
        </div>
    )
}
export default Office;
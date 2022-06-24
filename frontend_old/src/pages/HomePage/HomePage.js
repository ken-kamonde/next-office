import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";

import Map from "../../components/Map"
import Office from "../../components/Office"
import axios from "axios";


const HomePage = () => {
  // The "user" value from this Hook contains the decoded logged in user information (username, first name, id)
  // The "token" value is the JWT token that you will send in the header of any request requiring authentication
  //TODO: Add an AddCars Page to add a car for a logged in user's garage
  const [user, token] = useAuth();
  // const [cars, setCars] = useState([]);

  return (
    <div>
    <Map />
    <Office/>
    </div>

  );
};

export default HomePage;

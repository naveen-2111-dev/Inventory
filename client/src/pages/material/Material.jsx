import React, { useEffect, useState } from "react";
import axios from "axios";
import Nav from "../../components/NavBar/Nav";
import Loader from "../../components/Loader/Loader";

const Material = () => {
  const [materialData, setMaterialData] = useState([]);

  useEffect(() => {
    const fetchMaterialData = async () => {
      try {
        const response = await axios.get("http://localhost:11000/material");
        setMaterialData(response.data);
        console.log("Material data:", response.data);
      } catch (error) {
        console.error("Error fetching material data:", error);
      }
    };

    fetchMaterialData();
  }, []);

  return (
    <div className="materialContainer">
      <Nav />
      <p className="title">Material Details</p>
      <div className="contentContainer2">
        <div className="infoRow headrows">
          <p className="name">material name</p>
          <p className="date">count</p>
          <p className="duedate">Availablity</p>
          <p className="materials">maintanance</p>
          <p className="sid discription">Descript</p>
          <p className="des">Donatable</p>
        </div>
        {materialData.length > 0 ? (
          materialData.map((material, index) => (
            <div key={index} className="infoRow mainheadrow">
              <p className="name">{material.materialname}</p>
              <p className="date">{material.materialcount}</p>
              <p className="duedate">{material.Availability}</p>
              <p className="materials">{material.maintenance}</p>
              <p className="sid mainsid">{material.description}</p>
              <p className="des">
                {material.Donatable ? (
                  <span className="true">&#10004;</span>
                ) : (
                  <span className="false">&#10008;</span>
                )}
              </p>
            </div>
          ))
        ) : (
          <Loader />
        )}
      </div>
    </div>
  );
};

export default Material;

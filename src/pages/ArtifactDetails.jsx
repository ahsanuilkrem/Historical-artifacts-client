import React from 'react';
import { TiHeartOutline } from 'react-icons/ti';
import { useLoaderData } from 'react-router-dom';

const ArtifactDetails = () => {
    const artiacts = useLoaderData();
    const {Artifact_Image, artifact_name, Historical_Context, Created_At, Discovered_At, Discovered_By, Present_Location, type, _id}  = artiacts;
    console.log(artiacts)
    return (
        <div className=" bg-base-200 my-5">
        <div className=" hero-content flex-col lg:flex-row-reverse gap-10 ">
          <div className="space-y-3 w-full ">
            <h1 className="text-3xl font-bold">Artifact Name :
                 <span className='text-yellow-600'> {artifact_name}</span> </h1>
            <p className="text-xl font-medium">Artifact Type : {type}</p>
            <p className="text-xl font-medium">Created At : {Created_At} </p>
            <p className="text-xl font-medium">Discovered At : {Discovered_At} </p>
            <p className="text-xl font-medium" >Discovered By : {Discovered_By} </p>
            <p className="text-xl font-medium">Present Location : {Present_Location} </p>
            <p className="text-xl font-medium">
            Historical Context : <span className='text-xl font-light'> {Historical_Context}</span>
            </p>
            <p className='flex  justify-items-start items-center gap-2 text-yellow-600'> <TiHeartOutline />  0 Likes </p>
          </div>
          <div className="w-full max-w-lg ">
          <img src={Artifact_Image} alt="" srcset="" />
          </div>
        </div>
      </div>
    );
};

export default ArtifactDetails;


//  Artifact_Image
// : 
// "https://i.ibb.co.com/nbv4gRr/Egyptian-Vase.jpg"
// Created_At
// : 
// "1200 BC"
// Discovered_At
// : 
// (2) ['Luxor', 'Egypt']
// Discovered_By
// : 
// "Dr. Sarah Thompson"
// Historical_Context
// : 
// " Used for ceremonial purposes in Ancient Egypt, typically during burial rites.\n"
// Name
// : 
// "Ahsan"
// Present_Location
// : 
// "British Museum, London"
// artifact_name
// : 
// "Ancient Egyptian Vase"
// email
// : 
// "zihad@gmail.com"
// type
// : 
// "Vase"
// _id
// : 
// "67683810d8d1cb05f4961df7"
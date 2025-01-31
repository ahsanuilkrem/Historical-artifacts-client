import React from 'react';
import { TiHeartOutline } from 'react-icons/ti';
import { useLoaderData, useParams } from 'react-router-dom';
import useAuth from '../authlayot/useAuth';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const ArtifactDetails = () => {
  // const artiacts = useLoaderData();
  const {user} = useAuth();
  const { id } = useParams();
  console.log(id)
  const { data: artiacts = [], refetch} = useQuery({
      queryKey: ["trainer", id],
      queryFn: async () => {
          const { data } = await axios(`https://assignment-eleven-historical-server.vercel.app/artifacts/${id}`)
          
          return data;
         
      }
    
  })
   console.log(artiacts);
  
  const { Artifact_Image, artifact_name, Historical_Context, Created_At, Discovered_At, Discovered_By, Present_Location, type, like_count, _id } = artiacts;

  const handelLikeCount = id => {
    console.log(id)
    const like_id = id;
    const email = user.email;

    const likeData = { like_id, email }

    fetch('https://assignment-eleven-historical-server.vercel.app/likeCount', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(likeData)

    })
      .then(res => res.json())
       refetch()
      .then(data => {
        console.log(data);
      })

  }


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

          <button className='flex  justify-items-start items-center gap-2 text-yellow-600'> 
            <TiHeartOutline />  {like_count}  <span onClick={() => handelLikeCount(_id)} >Likes </span> </button>
        </div>
        <div className="w-full max-w-lg ">
          <img src={Artifact_Image} alt="" srcset="" />
        </div>
      </div>
    </div>
  );
};

export default ArtifactDetails;


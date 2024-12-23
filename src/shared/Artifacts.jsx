import React from 'react';
import { TiHeartOutline } from 'react-icons/ti';
import { Link } from 'react-router-dom';

const Artifacts = ({artifact}) => {
    const {Artifact_Image, artifact_name, Historical_Context, _id} = artifact;
    // console.log(artifact) 
    return (
        <div className="card bg-base-100 w-96 shadow-xl">
        <figure>
          <img
            src={Artifact_Image}
            alt={artifact_name} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{artifact_name}</h2>
          <p>{Historical_Context} </p>
         
          <div className="card-actions justify-start">
          <Link to={`/artifactDetails/${_id}`}>
          <button className="text-yellow-600 font-medium ">View Details</button>
          </Link>
          </div>
          <p className='flex  justify-items-start items-center gap-2'> <TiHeartOutline />  0 Likes </p>
        </div>
      </div>
    );
};

export default Artifacts;
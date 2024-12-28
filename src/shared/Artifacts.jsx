import React, { useState } from 'react';
import { TiHeartOutline } from 'react-icons/ti';
import { Link } from 'react-router-dom';
import useAuth from '../authlayot/useAuth';

const Artifacts = ({artifact}) => {

      // console.log(artifact)
      const {user} = useAuth();
      
    const {Artifact_Image, artifact_name, Historical_Context, _id,  like_count} = artifact;
    const [likeCount, setLikeCount] = useState(0);

    const handelLikeCount = id => {
      console.log(id)
       const like_id = id;
       const email = user.email;

       const likeData = {like_id, email }

       fetch('http://localhost:5000/likeCount', {
        method: 'POST',
         headers: {
                'content-type': 'application/json'
          },
           body: JSON.stringify(likeData)
       })
       .then(res => res.json())
       .then(data => {
        console.log(data);
       })



    }

    return (
        <div className="card bg-base-100  shadow-xl">
        <figure>
          <img
          className='h-64 w-full'
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
          <p className='flex items-center gap-1' > <TiHeartOutline /> {like_count}
          <span onClick={() => handelLikeCount(_id)}>Likes</span> 
          </p>
  
        </div>
      </div>
    );
};

export default Artifacts;
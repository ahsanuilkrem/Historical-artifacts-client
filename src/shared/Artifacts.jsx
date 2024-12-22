import React from 'react';

const Artifacts = ({artifact}) => {
    const {Artifact_Image, Artifact_Name, Historical_Context,} = artifact;
    console.log(artifact)
    return (
        <div className="card bg-base-100 w-96 shadow-xl">
        <figure>
          <img
            src={Artifact_Image}
            alt={Artifact_Name} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{Artifact_Name}</h2>
          <p>{Historical_Context} </p>
          <button className='btn'>Like Count : 0</button>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">View Details</button>
          </div>
        </div>
      </div>
    );
};

export default Artifacts;
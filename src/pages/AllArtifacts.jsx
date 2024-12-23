import React from 'react';
import Artifacts from '../shared/Artifacts';
import { useLoaderData } from 'react-router-dom';

const AllArtifacts = () => {
    const artifacts = useLoaderData();
    console.log(artifacts);
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-6'>
        {
            artifacts.map(artifact =>  <Artifacts key={artifact._id} artifact={artifact}></Artifacts>)
        }
    </div>
    );
};

export default AllArtifacts;
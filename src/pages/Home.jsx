import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Artifacts from '../shared/Artifacts';

const Home = () => {
    const artifacts = useLoaderData();
    

    return (
        <div>
           
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-6'>
                {
                    artifacts.map(artifact =>  <Artifacts key={artifact._id} artifact={artifact}></Artifacts>)
                }
            </div>
        </div>
    );
};

export default Home;
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Artifacts from '../shared/Artifacts';
import Banner from '../shared/Banner';
import ImgSection from '../shared/ImgSection';
import ExSection from '../shared/ExSection';

const Home = () => {
    const artifacts = useLoaderData();
    console.log(artifacts)
    

    return (
        <div>
           <Banner></Banner>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-6'>
                {
                    artifacts.slice(0, 6).map(artifact =>  <Artifacts key={artifact._id} artifact={artifact}></Artifacts>)
                }
            </div>
            <ImgSection></ImgSection>
            <ExSection></ExSection>
        </div>
    );
};

export default Home;
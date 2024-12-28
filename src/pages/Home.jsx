import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Artifacts from '../shared/Artifacts';
import Banner from '../shared/Banner';
import ImgSection from '../shared/ImgSection';
import ExSection from '../shared/ExSection';
import axios from 'axios';
import useAuth from '../authlayot/useAuth';

const Home = () => {

    const [artic, setArtic] = useState([]);
    const { user } = useAuth();
    // console.log(artic)
    useEffect(() => {
        axios.get('http://localhost:5000/artifacts', {withCredentials: true} )
        .then(res => (setArtic(res.data)))

    }, [user.email])
    

    return (
        <div>
           <Banner></Banner>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-6'>
                {
                    artic.slice(0, 6).map(artifact =>  <Artifacts key={artifact._id} artifact={artifact}></Artifacts>)
                }
            </div>
            <ImgSection></ImgSection>
            <ExSection></ExSection>
        </div>
    );
};

export default Home;
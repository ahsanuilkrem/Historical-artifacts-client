import React, { useEffect, useState } from 'react';
import Artifacts from '../shared/Artifacts';
import Banner from '../shared/Banner';
import ImgSection from '../shared/ImgSection';
import ExSection from '../shared/ExSection';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';


const Home = () => {

    const { data: artic = [], refetch} = useQuery({
        queryKey: ["artic"],
        queryFn: async () => {
            const { data } = await axios('https://assignment-eleven-historical-server.vercel.app/artifacts')
            
            return data;
           
        }
      
    })
     console.log(artic);
     const sortedArtifacts = [...artic].sort((a, b) => b.like_count - a.like_count);

    // const [artic, setArtic] = useState([]);
    // console.log(artic)
    // useEffect(() => {
    //     axios.get('https://assignment-eleven-historical-server.vercel.app/artifacts', )
    //     .then(res => (setArtic(res.data)))

    // }, [])
    

    return (
        <div>
           <Banner></Banner>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-6'>
                {
                    sortedArtifacts.slice(0, 6).map(artifact =>  <Artifacts key={artifact._id} artifact={artifact} refetch={refetch} ></Artifacts>)
                }
            </div>
            <ImgSection></ImgSection>
            <ExSection></ExSection>
        </div>
    );
};

export default Home;


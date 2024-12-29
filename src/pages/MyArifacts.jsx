import React, { useEffect, useState } from 'react';
import useAuth from '../authlayot/useAuth';
import MyArifactsCard from '../shared/MyArifactsCard';
import axios from 'axios';
import useAxiosSecure from '../shared/useAxiosSecure';

const MyArifacts = () => {

    const [artic, setArtic] = useState([]);
    const { user } = useAuth();
    // console.log(artic)
        const axiosSceure = useAxiosSecure();

    useEffect(() => {

    

        // axios.get(`https://assignment-eleven-historical-server.vercel.app/artifacts/?email=${user.email}`, {withCredentials: true} )
        // .then(res => (setArtic(res.data)))

        axiosSceure.get(`myartifacts?email=${user.email}`, {withCredentials: true})
        .then(res => (setArtic(res.data)));


        

    }, [user.email])

    return (
        
           <div>
            {
              artic.map(artis => <MyArifactsCard key={artis._id} artis={artis}></MyArifactsCard>)
            }
           
        </div>
    );
};

export default MyArifacts;



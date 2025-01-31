import React, { useEffect, useState } from 'react';
import useAuth from '../authlayot/useAuth';
import MyArifactsCard from '../shared/MyArifactsCard';
import useAxiosSecure from '../shared/useAxiosSecure';

const MyArifacts = () => {

    const [artic, setArtic] = useState([]);
    const { user } = useAuth();
    // console.log(artic)
    const axiosSceure = useAxiosSecure();

    useEffect(() => {

        axiosSceure.get(`myartifacts?email=${user.email}`, { withCredentials: true })
            .then(res => (setArtic(res.data)));

    }, [user.email])

    return (

        <div>
        {
          artic.map(artis => <MyArifactsCard key={artis._id} artis={artis}></MyArifactsCard>)
        }
       
    </div> 
        // {
        //     artic && artic.length > 0 ? <P></P> : <p> not Artifacts . add to Artifacts </p>
        // }
    );
};

export default MyArifacts;



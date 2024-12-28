import React, { useEffect, useState } from 'react';
import useAuth from '../authlayot/useAuth';
import MyArifactsCard from '../shared/MyArifactsCard';
import axios from 'axios';

const MyArifacts = () => {

    const [artic, setArtic] = useState([]);
    const { user } = useAuth();
    // console.log(artic)

    useEffect(() => {

        //  fetch(`http://localhost:5000/artifacts?email=${user.email}`)
        //   .then(res => res.json())
        // .then(data => setArtic(data))

        axios.get(`http://localhost:5000/artifacts/?email=${user.email}`, {withCredentials: true} )
        .then(res => (setArtic(res.data)))

        

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



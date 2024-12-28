import React, { useEffect, useState } from 'react';
import Artifacts from '../shared/Artifacts';
import axios from 'axios';
import useAuth from '../authlayot/useAuth';

const AllArtifacts = () => {

    const [artic, setArtic] = useState([]);
    const { user } = useAuth();
    // console.log(artic)

    useEffect(() => {
        axios.get('http://localhost:5000/artifacts', {withCredentials: true} )
        .then(res => (setArtic(res.data)))

    }, [user.email])
  
   
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-6'>
        {
            artic.map(artifact =>  <Artifacts key={artifact._id} artifact={artifact}></Artifacts>)
        }
    </div>
    );
};

export default AllArtifacts;
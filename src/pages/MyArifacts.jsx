import React, { useEffect, useState } from 'react';
import useAuth from '../authlayot/useAuth';
import MyArifactsCard from '../shared/MyArifactsCard';
import useAxiosSecure from '../shared/useAxiosSecure';
import { Helmet } from 'react-helmet-async';

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
            <Helmet>
                <title>Historical Artifacts | My Artifacts</title>

            </Helmet>

            <div>
                {
                    artic.map(artis => <MyArifactsCard key={artis._id} artis={artis}></MyArifactsCard>)
                }

            </div>
        </div>
        // {
        //     artic && artic.length > 0 ? <P></P> : <p> not Artifacts . add to Artifacts </p>
        // }
    );
};

export default MyArifacts;



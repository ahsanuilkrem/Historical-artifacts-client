import React, { useEffect, useState } from 'react';
import Artifacts from '../shared/Artifacts';
import axios from 'axios';
import { Helmet } from 'react-helmet-async';

const AllArtifacts = () => {

    const [artic, setArtic] = useState([]);
    const [search, setSearch] = useState('')
    // console.log(artic)

    useEffect(() => {
        axios.get('https://assignment-eleven-historical-server.vercel.app/artifacts', { withCredentials: true })
            .then(res => (setArtic(res.data)))

    }, [])


    return (
        <div>
            <h2 className='text-2xl font-bold text-center mt-5'>All Artifacts</h2>
            <div>
                <label className="input input-bordered flex items-center gap-2 w-full max-w-xs mx-auto my-6">
                    <input type="text" className="grow" placeholder="Search" />
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="h-4 w-4 opacity-70">
                        <path
                            fillRule="evenodd"
                            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                            clipRule="evenodd" />
                    </svg>
                </label>
            </div>
            <Helmet>
                <title>Historical Artifacts | All Artifacts</title>

            </Helmet>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-6'>
                {
                    artic.map(artifact => <Artifacts key={artifact._id} artifact={artifact}></Artifacts>)
                }
            </div>
        </div>
    );
};

export default AllArtifacts;

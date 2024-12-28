import React, { useEffect, useState } from 'react';
import useAuth from '../authlayot/useAuth';

const MyLiked = () => {

    const {user} = useAuth();
    const [likes, setLikes] = useState([]);
    // console.log(likes)

    // useEffect(() => {
        // fetch(`http://localhost:5000/artifacts/?email=${user?.email}`)
        // .then(res => res.json())
    //     .then(data => {
    //         setLikes(data);
    //     })
    // }, [user])


    return (
        <div>
           
            <div className="overflow-x-auto">
            {!user && (
                   <p className='text-3xl font-bold'> If you don't have any Historical Artifacts, please liked historisal artifacts </p>      
             )}
                <table className="table">
                   
                    <thead>
                        <tr>
                            <th></th>
                            <th>Email</th>
                            <th>Artifact Name</th>
                            <th>Created At</th>
                            <th>Discovered By</th>
                            <th>Present Location</th>
                           
                        </tr>
                    </thead>
                    <tbody>

                            {
                                likes.map((artis, index) =>  <tr>
                                     <th>{index + 1} </th>
                                     <td>{artis.email}</td>
                                    <td>{artis.artifact_name} </td>
                                    <td>{artis.Created_At} </td>
                                    <td>{artis.Discovered_By}</td>
                                    <td>{artis.Present_Location}</td>
                                
                                </tr> )
                            }
                     
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyLiked;
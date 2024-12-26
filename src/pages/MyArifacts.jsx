import React, { useEffect, useState } from 'react';
import useAuth from '../authlayot/useAuth';
import { MdDelete } from 'react-icons/md';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

const MyArifacts = () => {

    const [artic, setArtic] = useState([]);
    const { user } = useAuth();

    useEffect(() => {
        fetch(`http://localhost:5000/artifacts?email=${user.email}`)
            .then(res => res.json())
            .then(data => setArtic(data))

    }, [user.email])

    const handleDelet = (_id) => {
        console.log(_id)
        Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!"
        }).then((result) => {
          if (result.isConfirmed) {
    
            fetch(`http://localhost:5000/artifacts/${_id}`, {
              method: 'delete'
            })
              .then(res => res.json())
              .then(data => {
                console.log(data);
                if (data.deletedCount > 0) {
                  Swal.fire({
                    title: "Deleted!",
                    text: "Your Artifacts has been deleted.",
                    icon: "success"
                  });
                  const remaining = artic.filter(user => user._id !== _id);
                  setArtic(remaining);
                }
              })
          }
        });
      }


    return (
        <div>
           
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Email</th>
                            <th>Artifact Name</th>
                            <th>Created At</th>
                            <th>Discovered By</th>
                            <th>Present Location</th>
                            <th>Delete</th>
                            <th>Update</th>
                        </tr>
                    </thead>
                    <tbody>

                            {
                                artic.map((artis, index) =>  <tr>
                                     <th>{index + 1} </th>
                                     <td>{artis.email}</td>
                                    <td>{artis.artifact_name} </td>
                                    <td>{artis.Created_At} </td>
                                    <td>{artis.Discovered_By}</td>
                                    <td>{artis.Present_Location}</td>
                                    <td  onClick={() => handleDelet(artis._id)} className='text-red-500'> <MdDelete></MdDelete> </td>
                                    <td>
                                        <Link to={`/update/${artis._id}`}>
                                        <button className='btn'>Update</button>
                                        </Link>
                                    </td>

                                </tr> )
                            }
                     
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyArifacts;


//      const {Artifact_Image, artifact_name, Historical_Context, Created_At, Discovered_At, Discovered_By, Present_Location, type, _id}  = artiacts;

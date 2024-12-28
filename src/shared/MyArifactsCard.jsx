import React from 'react';
import { MdDelete } from 'react-icons/md';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAuth from '../authlayot/useAuth';

const MyArifactsCard = ({ artis }) => {
    const { Artifact_Image, artifact_name, Historical_Context, Created_At, Discovered_At, Discovered_By, Present_Location, type, _id } = artis;

    const { user } = useAuth();

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
                            const remaining = artis.filter(user => user._id !== _id);
                            setArtic(remaining);
                        }
                    })
            }
        });
    }

    return (
        <div className="card lg:card-side bg-base-100  max-w-4xl shadow-md my-5 mx-auto">

            {!user.email && (
                <p className='text-3xl font-bold'> If you don't have any Historical Artifacts, please add historisal artifacts </p>
            )}


            <div>
                <figure className=' w-2/3 ml-40'>
                    <img
                        className='w-full h-96'
                        src={Artifact_Image}
                        alt="Album" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{artifact_name}</h2>
                    <p className="text-xl font-medium">Artifact Type : {type}</p>
                    <p className="text-xl font-medium">Created At : {Created_At} </p>
                    <p className="text-xl font-medium">Discovered At : {Discovered_At} </p>
                    <p className="text-xl font-medium" >Discovered By : {Discovered_By} </p>
                    <p className="text-xl font-medium">Present Location : {Present_Location} </p>
                    <p className="text-xl font-medium">
                        Historical Context : <span className='text-xl font-light'> {Historical_Context}</span>
                    </p>
                    <p></p>
                    <div className="card-actions justify-start items-center gap-4">
                        <button onClick={() => handleDelet(artis._id)} className='text-red-500 btn'> <MdDelete></MdDelete></button>
                        <Link to={`/update/${_id}`}>
                            <button className='btn'>Update</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyArifactsCard;
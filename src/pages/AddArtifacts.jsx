import React from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAuth from '../authlayot/useAuth';

const AddArtifacts = () => {

    const {navigate} = useNavigate();
    const {user} = useAuth();

    const handleAddArtifacts = e => {
        e.preventDefault();
        const formData = new FormData(e.target);
        // console.log(formData.entries())
        const initialData = Object.fromEntries(formData.entries());
        initialData.Discovered_At = initialData.Discovered_At.split('\n');
        console.log(initialData);
        
        fetch('http://localhost:5000/artifacts', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(initialData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Artifacts has benn added ",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    // navigate('/')
                }
            })
    }


    return (

        <div className='max-w-4xl mx-auto my-8'>
            <h2 className='text-center text-2xl font-bold text-zinc-600 my-3'>Add Artifacts</h2>
            <div className="card bg-slate-300 w-full  shadow-2xl">
                <form onSubmit={handleAddArtifacts} className="card-body">
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Artifact Name</span>
                        </label>
                        <input type="text" placeholder="Artifact Name" name='artifact_name' className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Artifact Image</span>
                        </label>
                        <input type="url" placeholder="Artifact Image" name='Artifact_Image' className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Artifact Type</span>
                        </label>
                        <select defaultValue="Pick a Artifact type" name='type' className="select select-bordered w-full">
                           <option disabled>Pick a Artifact type</option>
                            <option>Vase</option>
                            <option>Helmet</option>
                            <option>Stone</option>
                            <option>Weapon</option>
                            <option>Armor</option>
                        </select>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Created At</span>
                        </label>
                        <input type="text" placeholder="CreatedAt" name='Created_At' className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Historical Context</span>
                        </label>
                        <textarea type="text" placeholder="Historical Context" name='Historical_Context' className="textarea textarea-bordered" ></textarea>
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Discovered At</span>
                        </label>
                        <textarea type="text" placeholder=" Writr eact Discovered At in a new line " name='Discovered_At' className="textarea textarea-bordered" ></textarea>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Discovered By</span>
                        </label>
                        <input type="text" placeholder="Discovered By" name='Discovered_By' className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Present Location</span>
                        </label>
                        <input type="text" placeholder="Present Location" name='Present_Location' className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" defaultValue={user?.name} placeholder="Name" name='Name' className="input input-bordered" required />
                    </div>
                   
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" defaultValue={user?.email} placeholder="email" name='email' className="input input-bordered" required />
                    </div>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-info">Add Artifacts</button>
                    </div>
                   
                </form>
            </div>
        </div>

    );
};

export default AddArtifacts;




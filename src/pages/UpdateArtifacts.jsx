import React from 'react';
import useAuth from '../authlayot/useAuth';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateArtifacts = () => {
    const artifac = useLoaderData();
    console.log(artifac)
    const {Artifact_Image, artifact_name, Historical_Context, Created_At, Discovered_At, Discovered_By, Present_Location, type, Name, _id}  = artifac;
    const {user} = useAuth();

      const handleUpdate = e => {
            e.preventDefault();
            const formData = new FormData(e.target);
            // console.log(formData.entries())
            const initialData = Object.fromEntries(formData.entries());
            initialData.Discovered_At = initialData.Discovered_At.split('\n');
            console.log(initialData);
            
            fetch(`https://assignment-eleven-historical-server.vercel.app/artifacts/${_id}`, {
                method: 'put',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(initialData)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.modifiedCount > 0) {
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: "Artifacts Update Successfully",
                            confirmButtonText: 'cool'
                         
                        });
                        navigate('/myArtifacts')
                    }
                })
        }


    return (
        <div className='max-w-4xl mx-auto my-8'>
        <h2 className='text-center text-2xl font-bold text-zinc-600 my-3'>Update Artifacts</h2>
        <div className="card bg-slate-300 w-full  shadow-2xl">
            <form onSubmit={handleUpdate} className="card-body">
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Artifact Name</span>
                    </label>
                    <input type="text" defaultValue={artifact_name} placeholder="Artifact Name" name='artifact_name' className="input input-bordered" required /> 
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Artifact Image</span>
                    </label>
                    <input type="url" defaultValue={Artifact_Image} placeholder="Artifact Image" name='Artifact_Image' className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Artifact Type</span>
                    </label>
                    <select  defaultValue={type} name='type' className="select select-bordered w-full">
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
                    <input type="text" defaultValue={Created_At} placeholder="CreatedAt" name='Created_At' className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Historical Context</span>
                    </label>
                    <textarea type="text" defaultValue={Historical_Context} placeholder="Historical Context" name='Historical_Context' className="textarea textarea-bordered" ></textarea>
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Discovered At</span>
                    </label>
                    <textarea type="text" defaultValue={Discovered_At} placeholder=" Writr eact Discovered At in a new line " name='Discovered_At' className="textarea textarea-bordered" ></textarea>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Discovered By</span>
                    </label>
                    <input type="text" defaultValue={Discovered_By} placeholder="Discovered By" name='Discovered_By' className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Present Location</span>
                    </label>
                    <input type="text" defaultValue={Present_Location} placeholder="Present Location" name='Present_Location' className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" defaultValue={Name} placeholder="Name" name='Name' className="input input-bordered" required />
                </div>
               
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" defaultValue={user?.email} placeholder="email" name='email' className="input input-bordered" required />
                </div>
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-info">Update Artifacts</button>
                </div>
               
            </form>
        </div>
    </div>
    );
};

export default UpdateArtifacts;
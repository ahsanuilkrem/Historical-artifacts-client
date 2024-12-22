import React, { useContext } from 'react';
import AuthContext from './AuthContext';
import { Link } from 'react-router-dom';
import GoogleLogin from './GoogleLogin';

const SignUp = () => {

    const {createUser} = useContext(AuthContext);

   

    const handleSignup = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, photo, email, password)

        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/;

        if(!passwordRegex.test(password)){
           alert("Password At least one uppercase, one lowercase, one number,")
            return;
        }
    
        createUser(email, password)
        .then(result => {
          console.log(result.user)
        })
        .catch(error => {
          console.log(error.message)
        })
      }


    return (
        <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left w-1/3">

          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl p-5">
          <h1 className="text-2xl font-bold text-center">SignUp now!</h1>
            <form onSubmit={handleSignup} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" placeholder="Name" name='name' className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">PhotoURL</span>
                </label>
                <input type="text" placeholder="photo url" name='photo' className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="email" name='email' className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" placeholder="password" name='password' className="input input-bordered" required />
              
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Sign Up</button>
              </div>
            </form>
            
            <div className="mx-6 btn text-xl font-semibold mb-3">
                  <GoogleLogin></GoogleLogin>
          </div>

            <div>
            <p className='text-center mb-4 font-semibold text-xl px-2'>Already have an account? please 
            <Link className='text-sky-500' to='/signin'>Signin</Link></p>
            </div>
           
          </div>
        </div>
      </div>    
    );
};

export default SignUp;
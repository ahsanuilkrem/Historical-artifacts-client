import React from 'react';

const SignUp = () => {

    const handleSignup = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, photo, email, password)
    
        // createUser(email, password)
        // .then(result => {
        //   console.log(result.user)
        // })
        // .catch(error => {
        //   console.log(error.message)
        // })
      }


    return (
        <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left w-1/3">
            {/* <Lottie animationData={registerLottie}></Lottie>
             */}
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
            
            {/* <div className='m-4'>
            <SocialLogin></SocialLogin>
            </div> */}
          </div>
        </div>
      </div>    
    );
};

export default SignUp;
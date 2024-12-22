import React from 'react';

const Signin = () => {
    const handleSignIn = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log( email, password)

        // singInUser(email, password)
        // .then(result => {
        //     console.log('singin', result.user.email);
        //     const user = {email: email}
        //     axios.post('http://localhost:4000/jwt', user, {withCredentials: true} )
        //     .then(res => {
        //         console.log(res.data);
                
        //     })
        //     // navigate(from);
        // })
        // .catch(error => {
        //     console.log(error.message);
        // })
    
       
      }
      
    return (
        <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center lg:text-left w-1/3">
                {/* <Lottie animationData={loginLottie}></Lottie> */}

            </div>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl p-5">
                <h1 className="text-2xl font-bold text-center">SignIn now!</h1>
                <form onSubmit={handleSignIn} className="card-body">
                    
                  
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
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">SignIn</button>
                    </div>
                </form>
                <div>
                {/* <SocialLogin></SocialLogin> */}
                </div>
            </div>
        </div>

    </div>
    );
};

export default Signin;
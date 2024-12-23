import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import AuthContext from '../authlayot/AuthContext';

const Navbar = () => {

    const {user, signOutuse} = useContext(AuthContext);

    const handleSignOut = () => {
        signOutuse()
        .then(() => {
          console.log('successful sign-out')
        })
        .catch(error => {
          console.log('sign out error', error);
        })
      }


    const links = <>
    <li><NavLink to='/'>Home</NavLink></li>
    <li><NavLink to='/allArtifats'>All Artifacts</NavLink></li>
    <li><NavLink to='/addArtifacts'>Add Artifacts</NavLink></li>
    </> 



    return (
        <div className="navbar bg-red-50">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">
                 
                    <h3>Historical Artifacts Tracker</h3>
                </a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}

                </ul>
            </div>
            <div className="navbar-end">

                
          {/* {
            user ? (
              <button> {user?.photoURL} </button>
            ) : (
              <Link to='/signin'>
              <button className='btn btn-secondary mr-3'>signin</button>
              </Link>
            )
          } */}
              {/* <button onClick={handleSignOut} className='btn btn-secondary mr-3'>Log-Out</button> */}


              {!user && (
            
              <Link to='/signin'>
              <button className='btn btn-primary mr-3'>signin</button>
              </Link>
            
          )}





              {user && (
          <div className='dropdown dropdown-end z-50'>
            <div
              tabIndex={0}
              role='button'
              className='btn btn-ghost btn-circle avatar'
            >
              <div className='w-10 rounded-full'>
                <img
                  referrerPolicy='no-referrer'
                  alt='User Profile Photo'
                  src={user?.photoURL}
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52'
            >
              <li>
                <Link to='/myArtifacts' className='justify-between'>
                My Artifacts
                </Link>
              </li>
              <li>
                <Link to='/liked'>Liked Artifacts </Link>
              </li>
            
              <li className='mt-2'>
                <button
                  onClick={handleSignOut}
                  className='bg-yellow-600 block text-center'
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        )}


            </div>
        </div>

    );
};

export default Navbar;
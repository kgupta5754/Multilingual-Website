import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Logouthandleraction } from '../../Redux/action.js';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

 export const Navbarnew = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userName = useSelector((state) => state.mernQuize.userName);
  const adminName = useSelector((state) => state.mernQuize.adminName);

  const logouthandler = () => {
    if (userName || adminName) {
      dispatch(Logouthandleraction());
      toast(`${userName || adminName} Successfully Logged Out`, {
        type: 'success',
      });
      navigate('/');
    }
  };

  const profilenavigate = () => {
    navigate('/profile');
  };

  const signInNavigate = () => {
    navigate('/login');
  };

  return (
    <nav className="w-full h-16 bg-gray-800 flex justify-between items-center px-8 shadow-xl">
      <Link to="/" className="flex items-center text-white">
        {/* <img
          src="https://example.com/logo.png" // Placeholder logo
          alt="Logo"
          className="h-10 w-10 rounded-md"
        /> */}
       <span className="ml-3 text-3xl font-extrabold">Word Weave</span>

      </Link>
      <div className="flex items-center space-x-6">
        {userName ? (
          <>
            <button
              className="text-white font-semibold hover:underline"
              onClick={profilenavigate}
            >
              Profile
            </button>
            <button
              className="text-red-500 font-semibold hover:underline"
              onClick={logouthandler}
            >
              Logout
            </button>
          </>
        ) : (
          <button
            className="text-white font-semibold hover:underline"
            onClick={signInNavigate}
          >
            Sign In
          </button>
        )}
      </div>
    </nav>
  );
};



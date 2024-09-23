import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const TopicQuiz = () => {
  const userId = useSelector((state) => state.mernQuize.userId);
  const navigate = useNavigate();
  const name = useSelector((state) => state.mernQuize.userName);

  return (
    <div className="mt-10 mb-10 bg-white p-6 shadow-lg rounded-lg">
      <div className="text-center mb-6">
        <h1 className="font-bold text-3xl text-gray-800">Choose A Language</h1>
      </div>
      <div className="grid grid-cols-2 w-11/12 p-10 m-auto gap-8">
        {userId ? (
          <Link to="/quiz/html" className="no-underline">
            <div className="border-2 cursor-pointer text-gray-900 font-bold text-3xl h-36 flex items-center justify-center rounded-lg bg-indigo-100">
              English
            </div>
          </Link>
        ) : (
          <Link to="/register" className="no-underline">
            <div className="border-2 cursor-pointer text-gray-900 font-bold text-3xl h-36 flex items-center justify-center rounded-lg bg-indigo-100">
              English
            </div>
          </Link>
        )}

        {userId ? (
          <Link to="/quiz/css" className="no-underline">
            <div className="border-2 cursor-pointer text-gray-900 font-bold text-3xl h-36 flex items-center justify-center rounded-lg bg-teal-100">
              Hindi
            </div>
          </Link>
        ) : (
          <Link to="/register" className="no-underline">
            <div className="border-2 cursor-pointer text-gray-900 font-bold text-3xl h-36 flex items-center justify-center rounded-lg bg-teal-100">
              Hindi
            </div>
          </Link>
        )}

        {userId ? (
          <Link to="/quiz/javascript" className="no-underline">
            <div className="border-2 cursor-pointer text-gray-900 font-bold text-3xl h-36 flex items-center justify-center rounded-lg bg-orange-100">
              German
            </div>
          </Link>
        ) : (
          <Link to="/register" className="no-underline">
            <div className="border-2 cursor-pointer text-gray-900 font-bold text-3xl h-36 flex items-center justify-center rounded-lg bg-orange-100">
              German
            </div>
          </Link>
        )}

{userId ? (
  <Link to="/quiz/react" className="no-underline">
    <div className="border-2 cursor-pointer text-gray-900 font-bold text-3xl h-36 flex items-center justify-center rounded-lg bg-pink-100">
      Spanish
    </div>
  </Link>
) : (
  <Link to="/register" className="no-underline">
    <div className="border-2 cursor-pointer text-gray-900 font-bold text-3xl h-36 flex items-center justify-center rounded-lg bg-pink-100">
      Spanish
    </div>
  </Link>
)}

{userId ? (
  <Link to="/quiz/redux" className="no-underline">
    <div className="border-2 cursor-pointer text-gray-900 font-bold text-3xl h-36 flex items-center justify-center rounded-lg bg-red-100">
      Italian
    </div>
  </Link>
) : (
  <Link to="/register" className="no-underline">
    <div className="border-2 cursor-pointer text-gray-900 font-bold text-3xl h-36 flex items-center justify-center rounded-lg bg-red-100">
      Italian
    </div>
  </Link>
)}

{userId ? (
  <Link to="/quiz/mongodb" className="no-underline">
    <div className="border-2 cursor-pointer text-gray-900 font-bold text-3xl h-36 flex items-center justify-center rounded-lg bg-green-100">
      Japanese
    </div>
  </Link>
) : (
  <Link to="/register" className="no-underline">
    <div className="border-2 cursor-pointer text-gray-900 font-bold text-3xl h-36 flex items-center justify-center rounded-lg bg-green-100">
      Japanese
    </div>
  </Link>
)}

      </div>
      <ToastContainer />
    </div>
  );
};

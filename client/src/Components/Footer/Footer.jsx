import React from "react";

export const Footer = () => {
  return (
    <div className="footer xl:mt-12 bg-gray-800 tracking-widest">
      <div className="footer-main w-full xl:w-4/5 xl:m-auto mb-2 p-4 xl:flex">
        <div className="flex w-full justify-between xl:w-6/12">
          <div className="footer-col-1 w-6/12 xl:w-full space-y-4">
            <h3
              className="text-xl uppercase p-1 border-b-2 border-white w-fit my-2"
              style={{
                width: "fit-content",
                color: "#4fa0e3",
                fontWeight: "bolder",
              }}
            >
              WORD-WEAVE-App
            </h3>
            <p className="text-white text-xs pr-4 xl:text-sm">
              WHERE PASSION MEETS PERFECTION!
            </p>
          </div>
          <div className="footer-col-2 w-6/12 xl:w-full mr-2 md:mr-0 space-y-4">
            <h3
              className="text-white text-xl uppercase p-1 border-b-2 border-white w-fit my-2"
              style={{
                width: "fit-content",
                color: "#4fa0e3",
                fontWeight: "bolder",
              }}
            >
              quiz
            </h3>
            <p className="text-white text-xs block xl:text-sm">All Quiz</p>
          </div>
        </div>
        <div className="flex w-full justify-between my-4 xl:w-6/12 xl:my-0">
          <div className="footer-col-3 w-6/12 xl:w-full space-y-4">
            <h3
              class="text-white text-xl uppercase p-1 border-b-2 border-white w-fit my-2"
              style={{
                width: "fit-content",
                color: "#4fa0e3",
                fontWeight: "bolder",
              }}
            >
              follow
            </h3>
            <p className="text-white text-xs xl:text-sm">Instagram</p>
            <p className="text-white text-xs xl:text-sm">LinkedIn</p>
            <p className="text-white text-xs xl:text-sm">Facebook</p>
          </div>
          <div className="footer-col-4 w-6/12 xl:w-full space-y-4 mr-2 md:mr-0">
            <h3
              className="text-white text-xl uppercase p-1 border-b-2 border-white w-fit my-2"
              style={{
                width: "fit-content",
                color: "#4fa0e3",
                fontWeight: "bolder",
              }}
            >
              Contact
            </h3>
            <p className="flex items-center my-1">
              <i
                className="fa fa-home text-white text-sm"
                style={{ marginRight: "2px" }}
              ></i>
              <span className="text-white text-xs xl:text-sm">
               Mathura
              </span>
            </p>
            <p className="flex items-center my-1">
              <i
                className="fa fa-envelope text-white text-xs"
                style={{ marginRight: "2px" }}
              ></i>
              <span
                className="text-white text-xs xl:text-sm"
              >
wordweave@gmail.com
              </span>
            </p>
            <p className="flex items-center my-1">
              <i
                className="fa fa-phone text-white"
                style={{ marginRight: "2px" }}
              ></i>
              <span className="text-white text-xs xl:text-sm">
                +91 xxxxx
              </span>
            </p>
          </div>
        </div>
      </div>
      {/* <p className="text-white text-center mt-4 pb-4">
        MERN Quiz App Designed and Developed By Sudhir P Chavhan.
      </p> */}
    </div>
  );
};

import React from "react";
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";
import Image from "next/image";
import "./aboutMe.css";

export default function () {
  return (
    <div className="container">
      <div className="title purp-txt text-center">My Projects</div>
      <div className="text-light text-center mt-2">
        Projects I have done/redone throughout the bootcamp and others I have
        made outside of the bootcamp. This page will be added to over time, to
        see more about my porjects and what I am working on take a look at 
        my Github.
      </div>
      <div className="row mt-4 pt-4 justify-content-center border-top">
        <div className="col">
          <div className="lrg-txt text-light text-center">Mindreader</div>
          <div className="text-light text-center">
            This project is a single page application that "reads your mind."
          </div>
          <Link
            href={`https://psenter.github.io/mind-reader/`}
            className=" no-decor purp-txt med-txt"
          >
            <div className="text-center pt-3">Click here to view the page.</div>
          </Link>
        </div>
      </div>
      <div className="row mt-4 pt-4 justify-content-center border-top">
        <div className="col">
          <div className="lrg-txt text-light text-center">Weather App</div>
          <div className="text-light text-center">
            This project is a weather application that allows the user to input a zipcode and recieve information about the weather in that area."
          </div>
          <Link
            href={`https://psenter.github.io/weather-app/`}
            className=" no-decor purp-txt med-txt"
          >
            <div className="text-center pt-3">Click here to view the page.</div>
          </Link>
        </div>
      </div>
      <Link href={`/`} className="purp-txt back-btn no-decor">
        <div className="text-center mt-5 mb-5 border-top pt-4">Back</div>
      </Link>
    </div>
  );
}


//https://psenter.github.io/weather-app/
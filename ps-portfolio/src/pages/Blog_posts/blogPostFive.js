import React from "react";
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";
import Image from "next/image";
import "./blogStyles.css";

export default function BlogFive(){
  return(
    <div className="container">
      <div className="title purp-txt text-center">
        Reacting to my first time seeing React.
      </div>
      <div className="row mt-4 pt-4 justify-content-center border-top">
        <div className="col-12 purp-txt text-center mb-3 lrg-txt">
            Question 1: Do you think JavaScript frameworks and libraries are easy or hard to use? Why?
        </div>
        <div className="col-12 text-light text-center">
            Personally I think JavaScript frameworks and libraries are easy to use to an extent. They take a little to learn, but once you have learned how to use them and what they are
            capible of then it makes working in JavaScript a lot easier.
        </div>
      </div>
      <div className="row mt-4 pt-4 justify-content-center border-top">
        <div className="col-12 purp-txt text-center mb-3 lrg-txt">
            Question 2: What frameworks or libraries are you interested in learning more about?
        </div>
        <div className="col-12 text-light text-center">
            I am very interested in learning more about React and Next, both seem to make working in JavaScript a lot easier. Especially when it comes to manipulating the DOM and changing state
            within JavaScript.
        </div>
      </div>
      <div className="row mt-4 pt-4 justify-content-center border-top pb-4 border-bottom">
        <div className="col-12 purp-txt text-center mb-3 lrg-txt">
            Question 3: Find one emerging JavaScript toll that you would liek to learn more about or use in your final project.
        </div>
        <div className="col-12 text-light text-center">
            One tool I want to learn more about is Angular. From what I have found it is a framework that boosts speed, responsiveness in UI, and other factors for your project or site.
            It also seems to make DOM manipulation a lot easier as well.
        </div>
      </div>
      <Link href={`/blogSnippets`} className="purp-txt back-btn no-decor">
        <div className="text-center mt-5 mb-5">Back</div>
      </Link>
    </div>
  )
}
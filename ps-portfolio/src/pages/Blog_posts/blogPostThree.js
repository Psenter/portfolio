import React from "react";
import Link from "next/link";
import "./bootstrap/dist/css/bootstrap.min.css";
import Image from "next/image";
import "./blogStyles.css";

export default function BlogThree() {
  return (
    <div className="containter">
      <div className="title purp-txt text-center">
        Struggling with pesudocode.
      </div>
      <div className="row mt-4 pt-4 justify-content-center border-top">
        <div className="col-12 purp-txt text-center mb-3 lrg-txt">
          Question 1: What was the number one thing that held you back this
          week?
        </div>
        <div className="col-12 text-light text-center">
          The number on thing that I think held me back this week was that I was
          struggling with my pesudocode. I was shown how my pesudocode was not
          where it should be and how that could hold me back in the long run. If
          I put more into the pesudocode and made it able to 'run around the
          track once' then I feel like it would have been a lot easier on me
          this week to get everything done. Since my pesudocode wasn't where it
          needed to be I struggled coding the project because I would get lost
          in my own thoughts then not know what I would need to do next.
        </div>
      </div>
      <div className="row mt-4 pt-4 justify-content-center border-top">
        <div className="col-12 purp-txt text-center mb-3 lrg-txt">
          Question 2: What is one thing you would like to learn more about
          regarding JavaScript, Bootstrap, or Atomic Design?
        </div>
        <div className="col-12 text-light text-center">
          One thing I would like to learn more about regarding JavaScript is how
          to manipulate data structures. I would like to be able to figure out
          more about arrays, Key:Value pairs, and other data structures I might
          not know about yet. For example how to pull, manipulate, and change
          them because it seems like if I can learn those things then I would be
          able to do a lot more than I thought I could with JavaScript.
        </div>
      </div>
      <div className="row mt-4 pt-4 pb-4 justify-content-center border-top border-bottom">
        <div className="col-12 purp-txt text-center mb-3 lrg-txt">
          Question 3: What is your "Why"?
        </div>
        <div className="col-12 text-light text-center">
          My "Why" for doing this bootcamp was at first because I really did not
          like the structure of college, I felt like I was paying for things
          that I did not need to be learning anymore because I had previously
          gone over than and I really dispised learning about other things than
          what I was interested in going to as a career. As time has gone on my
          "Why" became more that I wanted this for myself so that I could have a
          successful future and also because my mom did not think I would be
          able to get this completed and that I would end up failing the classes
          because of how fast they went.
        </div>
      </div>
      <Link href={`/blogSnippets`} className="purp-txt back-btn no-decor">
        <div className="text-center mt-5 mb-5">Back</div>
      </Link>
    </div>
  );
}

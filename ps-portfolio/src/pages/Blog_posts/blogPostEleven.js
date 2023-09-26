import React from "react";
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";
import Image from "next/image";
import "./blogStyles.css";

export default function BlogEleven(){
  return(
    <div className="container">
      <div className="title purp-txt text-center">
        Progress reports.
      </div>
      <div className="row mt-4 pt-4 justify-content-center border-top">
        <div className="col-12 purp-txt text-center mb-3 lrg-txt">
            Question 1: Describe Agile Development or a specific ceremony (stand up, retro, sprints).
        </div>
        <div className="col-12 text-light text-center">
            Some of the ceremonies that we go through in the bootcamp like stand up and retro are extremely important in my opinion. Stand up is where everyone meets at the beginning of the day and talks about the things they have worked on in the past twenty four hours, what you plan on working on in the next twenty four hours, and any "ah-ha moments" or achievements, blockers, or challenges you may have experienced in the past twenty four. I feel like this is important because it helps people understand where you are at when it comes to your work and helps you communicate within a team or to a higher up as well as if you're experiencing a blocker or challenge and mention it then another dev could speak to you after stand up and help you solve the issues you're facing. Retro is where at the end of the week you talk about how the week went, how you think you did, consider things you could possible do better, and sometimes recieve feedback. I believe this is important because it makes you think about how you personally did and focus on how you could become a better dev as well as the feedback helping take steps in that direction.
        </div>
      </div>
      <div className="row mt-4 pt-4 justify-content-center border-top border-bottom pb-4">
        <div className="col-12 purp-txt text-center mb-3 lrg-txt">
            Question 2: Convince someone who does not use frameworks why using a framework is beneficial.
        </div>
        <div className="col-12 text-light text-center">
            Frameworks are beneficial to use because they allow web developers to access pre-written code libraries and modules that they can use to help them develop web apps more effective, quickly, and efficiently
        </div>
      </div>
      <Link href={`/blogSnippets`} className="purp-txt back-btn no-decor">
        <div className="text-center mt-5 mb-5">Back</div>
      </Link>
    </div>
  )
}
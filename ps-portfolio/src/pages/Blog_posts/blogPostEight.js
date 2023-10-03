import React from "react";
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";
import Image from "next/image";
import "./blogStyles.css";

export default function BlogEight() {
  return (
    <div className="container">
      <div className="title purp-txt text-center">
        Breaking into the backend.
      </div>
      <div className="row mt-4 pt-4 justify-content-center border-top">
        <div className="col-12 purp-txt text-center mb-3 lrg-txt">
          Question 1: What are some similarities and differences you can see
          with JS and Python?
        </div>
        <div className="col-12 text-light text-center">
          One major difference is the syntax, for example JavaScript uses || and
          && for "and" and "or", where Python simply uses "and" and "or". Python
          also does not use semicolons to end off lines. One similarity is that
          they both can use for loops if statements just with varied syntax.
        </div>
      </div>
      <div className="row mt-4 pt-4 justify-content-center border-top">
        <div className="col-12 purp-txt text-center mb-3 lrg-txt">
          Question 2: If you had started with Python instead of JS, how do you
          think the Bootcamp would be different? Would you have benefited?
        </div>
        <div className="col-12 text-light text-center">
          I feel like the bootcamp would be significantly harder in the
          beginning and if I was bale to get thorugh the first half I think I
          may have benefitted from it. If the python lessons were moved to the
          beginning of the bootcamp, it would make the stress a lot worse in my
          opinion. It is already hard to grasp some of the concepts without any
          prior knowledge of it, and just going straight into Python after HTML
          wouldn't make much sense either because they don't overlap as much as
          JavaScript and HTML. After Python though, learning some of those
          harder concepts may have helped make JavaScript much more of a breeze
          and the humps would be more of learning syntax than anything but I
          feel like even though it would make it easier a lot of people wouldn't
          be able to deal with Python right of the bat like that because it's a
          lot to deal with starting.
        </div>
      </div>
      <div className="row mt-4 pt-4 justify-content-center border-top pb-4 border-bottom">
        <div className="col-12 purp-txt text-center mb-3 lrg-txt">
          Question 3: Think of a project or tech based tool that you use often
          and think about what the database structure might look like for it. Do
          you feel like you have a better understanding of how it works now and
          could you see yourself enjoying building something like that in the
          future?
        </div>
        <div className="col-12 text-light text-center">
          I feel like I do have a better understanding of how they work, like a
          clothing site storing all of their users logins, card info, and
          purchases. If it was for the right project or I had more time working
          with it I could possibly see myself enjoying building something like
          that in the future.
        </div>
      </div>
      <Link href={`/blogSnippets`} className="purp-txt back-btn no-decor">
        <div className="text-center mt-5 mb-5">Back</div>
      </Link>
    </div>
  );
}

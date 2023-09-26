import React from "react";
import Link from "next/link";
import "./bootstrap/dist/css/bootstrap.min.css";
import Image from "next/image";
import "./blogStyles.css";

export default function BlogNine() {
  return (
    <div className="container">
      <div className="title purp-txt text-center">
        Whats sticking in the tech stack.
      </div>
      <div className="row mt-4 pt-4 justify-content-center border-top">
        <div className="col-12 purp-txt text-center mb-3 lrg-txt">
          Question 1: What are you struggling with the most in the Tech Stack so
          far and why?
        </div>
        <div className="col-12 text-light text-center">
          I would say the thing I am stuggling with the most in the tech stack
          is the back end as a whole. I am not sure why, but I am struggling a
          lot more with python than I did with JavaScript. It could partially be
          that I am not used to not seeing the product of what I am creating
          right in front of me, but I do feel like I have harder time. On top of
          all that adding django into the mix seemed to make me struggle even
          more.
        </div>
      </div>
      <div className="row mt-4 pt-4 justify-content-center border-top">
        <div className="col-12 purp-txt text-center mb-3 lrg-txt">
          Question 2: What companies or people (local or not) would you like to
          hear talk during a Bootcamp lunch and learn?
        </div>
        <div className="col-12 text-light text-center">
          I am not familiar with a lot of tech companies for the most part, so I
          don't really mind who comes to the lunch and learn as long as they can
          give some insight to what it is like to work in the tech industry and
          help us get a picture of what we would be heading into. All in all I
          don't really mind who comes to the lunch and learns, as long as they
          can do what was previously mentioned.
        </div>
      </div>
      <div className="row mt-4 pt-4 justify-content-center border-top pb-4 border-bottom">
        <div className="col-12 purp-txt text-center mb-3 lrg-txt">
          Question 3: After having built your first full-stack application, what
          things in your repertoire are a sticking point for you? Were you able
          to reconnect your React Restaurant to your Backend Bistro code? If so,
          what was that like, and if not, what hurdles did you need to jump?
        </div>
        <div className="col-12 text-light text-center">
          It seems that my react restaurant does not work at the current moment,
          as the react scripts are a little messed up so I will have to redo the
          restaurant project or find a fix for the missing scripts. A sticking
          point for me was the models and how they work. The models, to me at
          least, are a way to set up the tables and show how the tables are
          going to be set up/connected to each other.
        </div>
      </div>
      <Link href={`/blogSnippets`} className="purp-txt back-btn no-decor">
        <div className="text-center mt-5 mb-5">Back</div>
      </Link>
    </div>
  );
}

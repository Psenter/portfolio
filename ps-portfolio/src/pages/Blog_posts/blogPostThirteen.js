import React from "react";
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";
import Image from "next/image";
import "./blogStyles.css";

export default function BlogThirteen() {
  return (
    <div className="container">
      <div className="title purp-txt text-center">
        A final retrospective of it all.
      </div>
      <div className="row mt-4 pt-4 justify-content-center border-top">
        <div className="col-12 purp-txt text-center mb-3 lrg-txt">
          Question 1: What was your experience like overall in the Bootcamp?
        </div>
        <div className="col-12 text-light text-center">
          My experience overall was that the bootcamp was hard but extremely
          beneficial. It was a difficult task to get through the entire thing,
          but very well worth it. It gave me experience of what it would be like
          to be in a work environment as well as gave me the base knowledge that
          I need to dive deeper into other topics and languages. The bootcamp
          also has taught me how to teach myself and be effective about it. I am
          now able to search through documentation and find what I am looking
          for while also reading more about it and understanding it fully
          instead of just going and copy pasting things into my code and seeing
          what works.
        </div>
      </div>
      <div className="row mt-4 pt-4 justify-content-center border-top border-bottom pb-4">
        <div className="col-12 purp-txt text-center mb-3 lrg-txt">
          Question 2: Take a look back at your blog posts over the last 16
          weeks. Where do you see yourself growing the most? What is one thing
          that pops out as you being misinformed or that you think is funny
          compared to what you know now?
        </div>
        <div className="col-12 text-light text-center">
          One thing that stands out to me is when I came into the bootcamp I
          thought it was just going to be one single class that was going to be
          structured like it was high school. As time went on I very quickly
          learned that it was going to be nothing like high school. I wouldn't
          be recieving grades but instead I would be recieving feedback and
          learning from the feedback I recieved on how I can improve my skills.
          It was an extremely different learning environment than what I'm used
          to, but it was also extremely benficially because instead of just
          doing the easiest route it helped push me to make me a better
          developer.
        </div>
      </div>
      <Link href={`/blogSnippets`} className="purp-txt back-btn no-decor">
        <div className="text-center mt-5 mb-5">Back</div>
      </Link>
    </div>
  );
}

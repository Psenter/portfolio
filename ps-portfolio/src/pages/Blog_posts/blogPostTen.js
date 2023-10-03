import React from "react";
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";
import Image from "next/image";
import "./blogStyles.css";

export default function BlogTen() {
  return (
    <div className="container">
      <div className="title purp-txt text-center">
        Looking back in the past.
      </div>
      <div className="row mt-4 pt-4 justify-content-center border-top pb-4 border-bottom">
        <div className="col-12 purp-txt text-center mb-3 lrg-txt">
          Question 1: What has been your experience overall thus far? What would
          you want to post as a "retrospective"?
        </div>
        <div className="col-12 text-light text-center">
          My overall experience thus far has been that the bootcamp is very
          hard. Taking in all this information in such a short period of time is
          a extremely difficult task, but it is also very do-able. We are
          provided with plently of resources to help us succeed but we has have
          to manage our time extremely well and dedicate plenty of time to
          learning everything that they are giving to us. Another part of my
          experience so far has been that even though it is not a "school" it
          has been more of a learning experience than I had first thought. I
          expected to earn grades and have it be like a traditional school but
          it has been more like an intership than anything else. The bootcamp
          has given me more of a "work" experience when it comes to managing
          time and getting projects done, and instead of earning a grade we are
          instead given feedback and ways to learn and grow to become a better
          developer.
        </div>
      </div>
      <Link href={`/blogSnippets`} className="purp-txt back-btn no-decor">
        <div className="text-center mt-5 mb-5">Back</div>
      </Link>
    </div>
  );
}

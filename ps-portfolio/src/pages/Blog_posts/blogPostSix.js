import React from "react";
import Link from "next/link";
import "./bootstrap/dist/css/bootstrap.min.css";
import Image from "next/image";
import "./blogStyles.css";

export default function BlogSix() {
  return (
    <div className="container">
      <div className="title purp-txt text-center">A closer look into CLI.</div>
      <div className="row mt-4 pt-4 justify-content-center border-top">
        <div className="col-12 purp-txt text-center mb-3 lrg-txt">
          Question 1: What have you learned about CLIs? Do you think they are
          scary?
        </div>
        <div className="col-12 text-light text-center">
          What I have learned about CLIs is how useful they can be. They make it
          fairly easy to install things into your project and have them run, as
          well as help with adding in files and folders. I think they are still
          a bit scary though because I am not really sure of everything that
          they can do and some of the questions it asks about installing things
          when importing other things like Next make me unsure of what to click
          sometimes.
        </div>
      </div>
      <div className="row mt-4 pt-4 justify-content-center border-top">
        <div className="col-12 purp-txt text-center mb-3 lrg-txt">
          Question 2: If you were to build a CLI, what would you do?
        </div>
        <div className="col-12 text-light text-center">
          IF i wer to make a CLI, I would make one where you can use it the same
          as now but also have a feature where you are able to add files that
          already have boiler plate code inside of them as well as make presets
          of files with your own boiler code that can be saved locally.
        </div>
      </div>
      <div className="row mt-4 pt-4 justify-content-center border-top pb-4 border-bottom">
        <div className="col-12 purp-txt text-center mb-3 lrg-txt">
          Question 3: List some ideas that without a framework, that would take
          you a long time to code.
        </div>
        <div className="col-12 text-light text-center">
          Something that would take a long time to code without a framework
          would be a menu. If you were not allowed to use a framework then it
          would take hours upon hours to code. You would have to make multiple
          HTML files, or a lot of HTML on one page, then make a very large
          JavaScript script file that contains everything inside of that, and
          styles for each page as well. Where as with React you can just make
          components and have it swap what is displayed all within 2-3 files.
        </div>
      </div>
      <Link href={`/blogSnippets`} className="purp-txt back-btn no-decor">
        <div className="text-center mt-5 mb-5">Back</div>
      </Link>
    </div>
  );
}

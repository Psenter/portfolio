import React from "react";
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";
import Image from "next/image";
import "./blogStyles.css";

export default function BlogFour(){
  return(
    <div className="container">
      <div className="title purp-txt text-center">
        Grasping good practices.
      </div>
      <div className="row mt-4 pt-4 justify-content-center border-top">
        <div className="col-12 purp-txt text-center mb-3 lrg-txt">
            Question 1: What did you learn about that helped you understand the development process?
        </div>
        <div className="col-12 text-light text-center">
            Instead of only doing one thing that I learned about the process, I am going to do two. The first thing that I learned about that helped me with the process
            was how to think about making my code work better and be more readable, also known as making 'dry' code. During our project this week, which was the weather app project, I
            couldn't really think about what to do in certain situations and I ended up rewriting a lot of code making it 'wet'. After presenting what I had made, one of our instructors,
            Justin, was able to help me figure out ways to make my code more 'dry'. The second thing that I learned about this week is how good pesudocode can really be. I was able to get
            through my project a lot easier this week because whenever I would get lost in thought I would be able to go back to my pesudocode and figure out where I was in my project and
            continue development.
        </div>
      </div>
      <div className="row mt-4 pt-4 justify-content-center border-top">
        <div className="col-12 purp-txt text-center mb-3 lrg-txt">
            Quesiton 2: What does it mean to develop good code?
        </div>
        <div className="col-12 text-light text-center">
            What it means to develop good code is to make readable and 'dry' code. When you make the code readable you can give it to other devs and when they take a look at it they would
            also be able to figure out what is going on within the code. When you make your code dry, that means you're not bloating the code with a lot of repeat lines that could be condensed
            down into 2-3 lines.
        </div>
      </div>
      <div className="row mt-4 pt-4 justify-content-center border-top">
        <div className="col-12 purp-txt text-center mb-3 lrg-txt">
            Question 3: What does it mean to be a good developer?
        </div>
        <div className="col-12 text-light text-center">
            What it means to be a good developer is to be pragmatic. When you are pragmatic you can code effeciently which in turn makes you able to develop good code. When you are pragmatic
            you also are able to integrate and communicate well with a team. Good developers are also very well disciplined and have a good work ethic when it comes to projects.
        </div>
      </div>
      <div className="row mt-4 pt-4 justify-content-center border-top pb-4 border-bottom">
        <div className="col-12 purp-txt text-center mb-3 lrg-txt">
            Question 4: What is one thing that programmers hate doing?
        </div>
        <div className="col-12 text-light text-center">
            I personally think one thing programmers hate doing is debugging. At the moment I don't understand all the error messages I'm getting, so when I do get them it takes me forever to
            figure out what I need to do to get my project working. I have also heard horror stories about how some people have had invisible characters within their code that break the entire thing
            and they are unable to find or figure out what the issue is.
        </div>
      </div>
      <Link href={`/blogSnippets`} className="purp-txt back-btn no-decor">
        <div className="text-center mt-5 mb-5">Back</div>
      </Link>
    </div>
  )
}
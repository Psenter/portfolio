import React from "react";
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";
import Image from "next/image";
import "./blogStyles.css";

export default function BlogSnippets() {
  const codeBlock = `
    let button = document.createElement('button');
    button.addEventListener('click', () => {
        button.textContent = 'Clicked!';
    });
  `;

  return (
    <div className="container">
      <div className="title purp-txt text-center">
        My first week of the bootcamp.
      </div>
      <div className="row mt-4 pt-4 justify-content-center border-top">
        <div className="col-12 purp-txt text-center mb-3 lrg-txt">
          Question 1: Was your first week what you expected? Why? Why not?
        </div>
        <div className="col-12 text-light text-center">
          The first week of this bootcamp, if I'm going to be honest, had me
          extremely stressed out. The work that we we're assigned prior to
          offically starting the bootcamp made me think that we we're just going
          to immeadiately dive straight into JavaScript. I was afraid that I was
          not going to be able to keep up with everyone else and get left in the
          dust struggling with the assignments. As the bootcamp got started and
          time went on I learned that we we're going to be taking a much slower
          approach than I had initally thought. I'm feeling really good about my
          odds to get through this and be able to graduate the bootcamp, just
          anxious about how far down some of the rabbit holes of some languages
          can go.
        </div>
      </div>
      <div className="row mt-4 pt-4 justify-content-center border-top">
        <div className="col-12 purp-txt text-center mb-3 lrg-txt">
          Question 2: What are you excited or eager to learn more about?
        </div>
        <div className="col-12 text-light text-center">
          I am honestly really excited to learn more about JavaScript, it seems
          like I could do almost anything I can dream of to a webpage with it
          when combine with HTML and CSS. From what I have seen so far,
          JavaScript looks decently complex, but with the help of the
          instructors, talking with others in the bootcamp, and putting in the
          effort I am absolutely positive that I can learn it. <br />
          Here is an example of why I think it looks complex:
        </div>
        <div className="col-12 text-center mt-2 mb-2">
          <div className="code-block">
            <pre>
              <code
                dangerouslySetInnerHTML={{ __html: codeBlock }}
                className="text-light"
              ></code>
            </pre>
          </div>
        </div>
        <div className="text-light col-12 text-center">
          To me this looks insane, but with time I'm sure I'll come to
          understand it easily. I'm sure I'll need to understand this in the
          long run anyways.
        </div>
      </div>
      <div className="row mt-4 pt-4 justify-content-center border-top">
        <div className="col-12 purp-txt text-center mb-3 lrg-txt">
          Question 3: What is something that can only be learned by reading this
          blog?
        </div>
        <div className="col-12 text-light text-center">
          Honestly, nothing personal about me can really be learned thorugh this
          blog. I would say I am a pretty open person and most people know
          enough about me that nothing will come as a surprise in this blog if I
          ever end up talking about myself. If it is not about myself though,
          people will be able to read this blog and learn about the ways that I
          think about things and some of the struggles I had throughout the
          bootcamp.
        </div>
      </div>
      <div className="row mt-4 pt-4 justify-content-center border-top">
        <div className="col-12 purp-txt text-center mb-3 lrg-txt">
          Question 4: What is something you wish you could do but currently do
          not have the coding skills for?
        </div>
        <div className="col-12 text-light text-center">
          I personally wish I could make a clothing website. I have always
          really liked fashion and I have always wanted to possibly make my own
          little clothing store that me and some friends would be able to run.
        </div>
      </div>
      <div className="row mt-4 pt-4 justify-content-center border-top">
        <div className="col-12 purp-txt text-center mb-3 lrg-txt">
          Question 5: What are you struggling with?
        </div>
        <div className="col-12 text-light text-center">
          What I am struggling with at the moment is just attempting to fully
          wrap my head around JavaScript. Like I stated before it looks very
          daunting right now, but I am sure with enough reps and practice at it
          I would be able to tackle it in the long run.
        </div>
      </div>
      <div className="row mt-4 pt-4 justify-content-center border-top">
        <div className="col-12 purp-txt text-center mb-3 lrg-txt">
          Question 6: How do you solve a problem?
        </div>
        <div className="col-12 text-light text-center">
          The way that I solve a problem is by first figuring out the issue I am
          having. Once I figure out what issue is occuring, I then try to
          isolate what would be causing the issue or ask someone else for help.
          If no one is able to help me, I try to isolate it by either messing
          with things until it reveals itself or looking up the issue that I am
          having to see if someone online can help me. Once I isolate what is
          causing my issue, I mess around with it until I am able to figure out
          a way that fixes my issue or look into more ways to fix it online.
        </div>
      </div>
      <div className="row mt-4 pt-4 pb-4 justify-content-center border-top border-bottom">
        <div className="col-12 purp-txt text-center mb-3 lrg-txt">
          Question 7: What methods do you use to help get yourself unstuck?
        </div>
        <div className="col-12 text-light text-center">
          The methods I use to get myself unstuck are:
          <ul style={{ listStylePosition: "inside" }}>
            <li>Asking someone for help</li>
            <li>Looking online for things that could help/the answer</li>
            <li>
              Reading things that could help me better understanding of whats
              going on
            </li>
            <li>
              Messing with/breaking things until something works and looking
              into why
            </li>
          </ul>
        </div>
      </div>
      <Link href={`/blogSnippets`} className="purp-txt back-btn no-decor">
        <div className="text-center mt-5 mb-5">Back</div>
      </Link>
    </div>
  );
}

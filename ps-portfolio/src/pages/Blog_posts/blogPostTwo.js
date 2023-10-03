import React from "react";
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";
import Image from "next/image";
import "./blogStyles.css";

export default function BlogTwo() {
  return (
    <div className="container">
      <div className="title purp-txt text-center">
        Getting some of the basics down.
      </div>
      <div className="row mt-4 pt-4 justify-content-center border-top">
        <div className="col-12 purp-txt text-center mb-3 lrg-txt">
          Question 1: What are your thoughts about the roles HTML, CSS, and
          JavaScript play in the process of rendering content and providing user
          experience?
        </div>
        <div className="col-12 text-light text-center">
          My thoughts on the roles of HTML, CSS, and JavaScript are that they
          all work together a lot better than I had expected and from them
          working together it gives a very nice user experience. HTML is a good
          structure to start with, it houses all of the text and images in the
          site that youre making/viewing so it makes most of it easy to
          edit/access. CSS adds ways for people to add colors, fonts, and
          resizing for the site truly making it unique to whoever is making the
          site and more pleasing for the users that are using the site. Last but
          not least, JavaScript is a good way to add interactive bits and pieces
          to the site for users. Things such as a way to travel to different
          pages on the site, or just a simple button that turns the site into a
          dark mode.
        </div>
      </div>
      <div className="row mt-4 pt-4 justify-content-center border-top">
        <div className="col-12 purp-txt text-center mb-3 lrg-txt">
          Question 2: What are your thoughts on pesudocoding?
        </div>
        <div className="col-12 text-light text-center">
          My thoughts on pesudocode at the moment are it is somewhat difficult
          to do. I don't necessarily know how to do a majority of things in
          JavaScript, let alone combinding it with HTML and/or CSS, so it is
          hard for me to put that into a pesudocode document for others. I can
          understand why people create them though, it creates a very good
          guideline for you to follow incase you ever get lost in your own
          thoughts, or just get far off track. Pesudocode also gives others a
          good way to see what you are going to be making or what you have made,
          it shows them the way that you were thinking about tackling the
          project.
        </div>
      </div>
      <div className="row mt-4 pt-4 justify-content-center border-top">
        <div className="col-12 purp-txt text-center mb-3 lrg-txt">
          Question 3: What was helpful during the Onboarding that make working
          remotely easier?
        </div>
        <div className="col-12 text-light text-center">
          One thing that made remote classes easier was that everyone was
          usually on their computer, and since everyone was usually working at
          the same time on the same thing and our instructors were also online
          with us so it makes asking anyone for help an extremely easy task.
        </div>
      </div>
      <div className="row mt-4 pt-4 justify-content-center border-top">
        <div className="col-12 purp-txt text-center mb-3 lrg-txt">
          Question 4: What hindered your progress during the Onboarding
        </div>
        <div className="col-12 text-light text-center">
          One thing that hindered my progess during Onboarding was the fact that
          when it came to asking for help I was extremely anxious to do so. I
          would talk myself out of asking for help in the help channel and I
          would not directly message people because the instructors told us that
          they only wanted people asking for help in the help channel that we
          had set up. Another issue I had with my progress was that I would
          easily get distracted during times that I was working and some
          assignments took me longer than they probably should have.
        </div>
      </div>
      <div className="row mt-4 pt-4 pb-4 justify-content-center border-top border-bottom">
        <div className="col-12 purp-txt text-center mb-3 lrg-txt">
          Question 5: How did you overcome challenges during Onboarding?
        </div>
        <div className="col-12 text-light text-center">
          The way that I overcame my challenges during Onboarding was I took
          lots of time trying to figure out how to solve my problems by looking
          up answers and trying to find them on sites such as Stack Overflow,
          Quora, MDN, and others. I would also look at some of the exmaples that
          were on some of the sites we were using and try to piece different
          parts of the examples together to try to make a solution that worked
          for me. There were also times I looked into the help channel and found
          others running into the same issues as me and I was able to look over
          what they talked about with the instructors. When all else failed I
          ended up just forcing myself to ask for help because I know I needed
          it.
        </div>
      </div>
      <Link href={`/blogSnippets`} className="purp-txt back-btn no-decor">
        <div className="text-center mt-5 mb-5">Back</div>
      </Link>
    </div>
  );
}

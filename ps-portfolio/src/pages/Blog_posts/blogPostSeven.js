import React from "react";
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";
import Image from "next/image";
import "./blogStyles.css";

export default function BlogSeven(){
  return(
    <div className="container">
      <div className="title purp-txt text-center">
        The halfway point!
      </div>
      <div className="row mt-4 pt-4 justify-content-center border-top">
        <div className="col-12 purp-txt text-center mb-3 lrg-txt">
            Question 1: Now that you are halfway through bootcamp, what has been the biggest hurdle that you have gone past? What do you think is going to be the next biggest thing to power through?
        </div>
        <div className="col-12 text-light text-center">
            I think the biggest hurdle for me in the bootcamp is trying to break out of my shell and talk to others, especially since it is not in person so I feel like I'm not being forced.
            I persoanlly think I am a introverted person and I usually stay silent unless someone speaks to me. As the bootcamp has gone on I feel like I have done a better job about breaking
            out of that shell and have become acquainted with everyone, if not become friends with everyone. I know the next hurdle I need to get over is asking for help in our help channel.
            I still have a very big issue with my anxiety when it comes to asking because I get self concious about it, but when I get over this hurdle I know that I will be able to conquer most of
            the things throw at me as well as get better understandings of things and improve my code overall.
        </div>
      </div>
      <div className="row mt-4 pt-4 justify-content-center border-top">
        <div className="col-12 purp-txt text-center mb-3 lrg-txt">
            Question 2: Compared to earlier, what are three ideas you might want to do for your final project? Are they the same ideas as before, or have they changed now that you understand more
        </div>
        <div className="col-12 text-light text-center">
            Compared to earlier in the bootcamp the only final project idea that has stayed with me is wanting to make a clothing/jewelry store. I feel like it would be able to show off a lot of my front end skills as well as back end skills to show that I am able to do everything. Another idea I have had in the back of my mind from time to time is to make a more fleshed out evercraft game (A project we did during the bootcamp which was like Dungeons and Dragons.) as well as possibly a stat tracker for Overwatch.
        </div>
      </div>
      <div className="row mt-4 pt-4 justify-content-center border-top pb-4 border-bottom">
        <div className="col-12 purp-txt text-center mb-3 lrg-txt">
            Question 3: What surprised you about your first week in Python and how was it different from your first week in JavaScript?
        </div>
        <div className="col-12 text-light text-center">
            What surprised me the most about the first week in Python compared to JavaScript was that the syntax was very different. You don't have to close a lot of the lines in Python like JavaScript, as Justin put it in one of the classes, "It makes lines of code that you type out look naked." Another thing that threw me off more than surprised me was that there wasn't really a visible output for me to look at. To me it is a lot easier to look at a visible page over looking at something be output into the console.
        </div>
      </div>
      <Link href={`/blogSnippets`} className="purp-txt back-btn no-decor">
        <div className="text-center mt-5 mb-5">Back</div>
      </Link>
    </div>
  )
}
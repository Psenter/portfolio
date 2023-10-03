import React from "react";
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";
import Image from "next/image";
import "./aboutMe.css";

{
  /* 
import React from "react";
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";
import Image from "next/image";
import "./blogStyles.css";

export default function (){
  return(
    <div className="container">
      <div className="title purp-txt text-center">
      </div>
      <div className="row mt-4 pt-4 justify-content-center border-top">
        <div className="col-12 purp-txt text-center mb-3 lrg-txt">
        </div>
        <div className="col-12 text-light text-center">
        </div>
      </div>
      <Link href={`/blogSnippets`} className="purp-txt back-btn no-decor">
        <div className="text-center mt-5 mb-5">Back</div>
      </Link>
    </div>
  )
}
*/
}

export default function BlogSnippets() {
  return (
    <div className="container">
      <div className="title purp-txt text-center">Bootcamp Blog Posts</div>
      <div className="text-light text-center mt-2">
        During the Awesome Inc. bootcamp they had us create small blog posts
        based on questions that the instructors gave to us, this documents some
        of my time throughout the bootcamp.
      </div>

      {/* Blog 1 */}
      <div className="row mt-4 pt-4 justify-content-center border-top">
        <div className="col-3">
          <div className="lrg-txt text-light text-center">
            <div>Blog Post 1:</div>
            <div>My first week of the bootcamp.</div>
            <Link
              href={`/Blog_posts/blogPostOne`}
              className="no-decor purp-txt med-txt"
            >
              Read
            </Link>
          </div>
        </div>

        {/* Blog 2 */}
        <div className="col-3">
          <div className="lrg-txt text-light text-center">
            <div>Blog Post 2:</div>
            <div>Getting some of the basics down.</div>
            <Link
              href={`/Blog_posts/blogPostTwo`}
              className="no-decor purp-txt med-txt"
            >
              Read
            </Link>
          </div>
        </div>

        {/* Blog 3 */}
        <div className="col-3">
          <div className="lrg-txt text-light text-center">
            <div>Blog Post 3:</div>
            <div>Struggling with pesudocode.</div>
            <Link
              href={`/Blog_posts/blogPostThree`}
              className="no-decor purp-txt med-txt"
            >
              Read
            </Link>
          </div>
        </div>

        {/* Blog 4 */}
        <div className="col-3">
          <div className="lrg-txt text-light text-center">
            <div>Blog Post 4:</div>
            <div>Grasping good practices.</div>
            <Link
              href={`/Blog_posts/blogPostFour`}
              className="no-decor purp-txt med-txt"
            >
              Read
            </Link>
          </div>
        </div>
      </div>

      {/* Blog 5 */}
      <div className="row mt-4 pt-4  justify-content-center border-top">
        <div className="col-3">
          <div className="lrg-txt text-light text-center">
            <div>Blog Post 5:</div>
            <div>Reacting to my first time seeing React.</div>
            <Link
              href={`/Blog_posts/blogPostFive`}
              className="no-decor purp-txt med-txt"
            >
              Read
            </Link>
          </div>
        </div>

        {/* Blog 6 */}
        <div className="col-3">
          <div className="lrg-txt text-light text-center">
            <div>Blog Post 6:</div>
            <div>A closer look into CLI.</div>
            <Link
              href={`/Blog_posts/blogPostSix`}
              className="no-decor purp-txt med-txt"
            >
              Read
            </Link>
          </div>
        </div>

        {/* Blog 7 */}
        <div className="col-3">
          <div className="lrg-txt text-light text-center">
            <div>Blog Post 7:</div>
            <div>The halfway point!</div>
            <Link
              href={`/Blog_posts/blogPostSeven`}
              className="no-decor purp-txt med-txt"
            >
              Read
            </Link>
          </div>
        </div>

        {/* Blog 8 */}
        <div className="col-3">
          <div className="lrg-txt text-light text-center">
            <div>Blog Post 8:</div>
            <div>Breaking into the backend.</div>
            <Link
              href={`/Blog_posts/blogPostEight`}
              className="no-decor purp-txt med-txt"
            >
              Read
            </Link>
          </div>
        </div>
      </div>

      {/* Blog 9 */}
      <div className="row mt-4 pt-4 justify-content-center border-top">
        <div className="col-3">
          <div className="lrg-txt text-light text-center">
            <div>Blog Post 9:</div>
            <div>Whats sticking in the tech stack.</div>
            <Link
              href={`/Blog_posts/blogPostNine`}
              className="no-decor purp-txt med-txt"
            >
              Read
            </Link>
          </div>
        </div>

        {/* Blog 10 */}
        <div className="col-3">
          <div className="lrg-txt text-light text-center">
            <div>Blog Post 10:</div>
            <div>Looking back at the past.</div>
            <Link
              href={`/Blog_posts/blogPostTen`}
              className="no-decor purp-txt med-txt"
            >
              Read
            </Link>
          </div>
        </div>

        {/* Blog 11 */}
        <div className="col-3">
          <div className="lrg-txt text-light text-center">
            <div>Blog Post 11:</div>
            <div>Progress reports.</div>
            <Link
              href={`/Blog_posts/blogPostEleven`}
              className="no-decor purp-txt med-txt"
            >
              Read
            </Link>
          </div>
        </div>

        {/* Blog 12 */}
        <div className="col-3">
          <div className="lrg-txt text-light text-center">
            <div>Blog Post 12:</div>
            <div>Starting the final project!</div>
            <Link
              href={`/Blog_posts/blogPostTwelve`}
              className="no-decor purp-txt med-txt"
            >
              Read
            </Link>
          </div>
        </div>
      </div>

      {/* Blog 13 */}
      <div className="row mt-4 pt-4 pb-4 justify-content-center border-top border-bottom">
        <div className="col-3">
          <div className="lrg-txt text-light text-center">
            <div>Blog Post 13:</div>
            <div>A final retrospective of it all.</div>
            <Link
              href={`/Blog_posts/blogPostThirteen`}
              className="no-decor purp-txt med-txt"
            >
              Read
            </Link>
          </div>
        </div>
      </div>
      <Link href={`/`} className="purp-txt back-btn no-decor">
        <div className="text-center mt-5 mb-5">Back</div>
      </Link>
    </div>
  );
}

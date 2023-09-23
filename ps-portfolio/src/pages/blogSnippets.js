import React from "react";
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";
import Image from "next/image";
import "./aboutMe.css";

export default function BlogSnippets() {
    return (
        <div>
            <div className="container vh-100 d-flex flex-column justify-content-center align-items-center">
                <div className="title purp-txt">Bootcamp Blog Posts</div>
                <div className="text-light text-center col-9 mt-2">During the Awesome Inc. bootcamp they had us create small blog posts based on questions that the instructors gave to us, this documents some of my time throughout the bootcamp.</div>
                <div className="row mt-5">
                    <div className="col">
                        <div className="lrg-txt text-light text-center">
                            <div>Blog Post 1:</div>
                            <div>My first week of the bootcamp.</div>
                            <Link href={`/`} className="no-decor purp-txt med-txt">Read</Link>
                        </div>
                    </div>
                    <div className="col">
                        <div className="lrg-txt text-light text-center">
                            <div>Blog Post 2:</div>
                            <div>Getting some of the basics down.</div>
                            <Link href={`/`} className="no-decor purp-txt med-txt">Read</Link>
                        </div>
                    </div>
                    <div className="col">
                        <div className="lrg-txt text-light text-center">
                            <div>Blog Post 3:</div>
                            <div>Struggling with pesudocode.</div>
                            <Link href={`/`} className="no-decor purp-txt med-txt">Read</Link>
                        </div>
                    </div>
                    <div className="col">
                        <div className="lrg-txt text-light text-center">
                            <div>Blog Post 4:</div>
                            <div>Grasping good practices.</div>
                            <Link href={`/`} className="no-decor purp-txt med-txt">Read</Link>
                        </div>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col">
                        <div className="lrg-txt text-light text-center">
                            <div>Blog Post 5:</div>
                            <div>Reacting to my first time seeing React.</div>
                            <Link href={`/`} className="no-decor purp-txt med-txt">Read</Link>
                        </div>
                    </div>
                    <div className="col">
                        <div className="lrg-txt text-light text-center">
                            <div>Blog Post 6:</div>
                            <div>A closer look into CLI.</div>
                            <Link href={`/`} className="no-decor purp-txt med-txt">Read</Link>
                        </div>
                    </div>
                    <div className="col">
                        <div className="lrg-txt text-light text-center">
                            <div>Blog Post 7:</div>
                            <div>The halfway point!</div>
                            <Link href={`/`} className="no-decor purp-txt med-txt">Read</Link>
                        </div>
                    </div>
                    <div className="col">
                        <div className="lrg-txt text-light text-center">
                            <div>Blog Post 8:</div>
                            <div>Breaking into the backend.</div>
                            <Link href={`/`} className="no-decor purp-txt med-txt">Read</Link>
                        </div>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col">
                        <div className="lrg-txt text-light text-center">
                            <div>Blog Post 9:</div>
                            <div>Whats sticking in the tech stack.</div>
                            <Link href={`/`} className="no-decor purp-txt med-txt">Read</Link>
                        </div>
                    </div>
                    <div className="col">
                        <div className="lrg-txt text-light text-center">
                            <div>Blog Post 10:</div>
                            <div>Looking back at the past.</div>
                            <Link href={`/`} className="no-decor purp-txt med-txt">Read</Link>
                        </div>
                    </div>
                    <div className="col">
                        <div className="lrg-txt text-light text-center">
                            <div>Blog Post 11:</div>
                            <div>Progress reports.</div>
                            <Link href={`/`} className="no-decor purp-txt med-txt">Read</Link>
                        </div>
                    </div>
                    <div className="col">
                        <div className="lrg-txt text-light text-center">
                            <div>Blog Post 12:</div>
                            <div>Starting the final project!</div>
                            <Link href={`/`} className="no-decor purp-txt med-txt">Read</Link>
                        </div>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col">
                        <div className="lrg-txt text-light text-center">
                            <div>Blog Post 13:</div>
                            <div>A final retrospective of it all.</div>
                            <Link href={`/`} className="no-decor purp-txt med-txt">Read</Link>
                        </div>
                    </div>
                </div>
                <Link href={`/`} className="purp-txt back-btn no-decor mt-5">Back</Link>
            </div>
        </div>
    )
}
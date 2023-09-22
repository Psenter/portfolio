import React from "react";
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";
import Image from "next/image";
import "./aboutMe.css";

function ContactPage() {
  return (
    <div>
      <div className="purp-txt title text-center">Contacts</div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-12 text-center"></div>
          <div className="text-light col text-center lrg-txt mt-4"></div>
        </div>
      </div>
      <Link href="/" className="no-decor">
        <div className="text-center purp-txt mt-3 mb-3">Back</div>
      </Link>
    </div>
  );
}

export default ContactPage;

import React, { useState } from "react";
import Link from "next/link";
import "./bootstrap/dist/css/bootstrap.min.css";
import Image from "next/image";
import "./aboutMe.css";

function ContactPage() {
  const [isCopied, setIsCopied] = useState(false);

  const copyToClipboard = (textToCopy) => {
    navigator.clipboard
      .writeText(textToCopy)
      .then(() => {
        setIsCopied(true);
      })
      .catch((error) => {
        console.error("Error copying text to clipboard:", error);
      });
  };

  return (
    <div>
      <div className="container vh-100 d-flex flex-column justify-content-center align-items-center">
        <div className="purp-txt title text-center">Contacts</div>
        <div className="container mt-5">
          <div className="row">
            <div className="col-6 text-center">
              {/* LinkedIn */}
              <div className="d-flex flex-column align-items-center">
                <Link href={`https://www.linkedin.com/in/parker-g-senter-dev/`}>
                  <Image
                    src={`/LinkedIn_icon_circle.svg.png`}
                    alt="Linkedin logo"
                    width={150}
                    height={150}
                  ></Image>
                </Link>
                <Link
                  href={`https://www.linkedin.com/in/parker-g-senter-dev/`}
                  className="no-decor text-light lrg-txt mt-2"
                >
                  Click here for my Linkedin.
                </Link>
              </div>
            </div>

            {/* Github */}
            <div className="col-6 text-center">
              <div className="d-flex flex-column align-items-center">
                <Link href={`https://github.com/Psenter`}>
                  <Image
                    src={`/github-icon-2048x1988-jzvzcf2t.png`}
                    alt="Github logo"
                    width={150}
                    height={150}
                    href={`https://www.linkedin.com/in/parker-g-senter-dev/`}
                  ></Image>
                </Link>
                <Link
                  href={`https://github.com/Psenter`}
                  className="lrg-txt no-decor text-light mt-2"
                >
                  Click here for my Github.
                </Link>
              </div>
            </div>

            {/* Phone */}
            <div className="col-6 text-center mt-5">
              <div className="d-flex flex-column align-items-center">
                <Image
                  src={`/phone-flat.png`}
                  alt="Phone picture"
                  width={150}
                  height={150}
                  onClick={() => copyToClipboard("859-537-9302")}
                  style={{ cursor: "pointer" }}
                ></Image>
                <div className="lrg-txt no-decor lrg-txt text-light mt-2">
                  Click the image or copy my phone number here: <br />{" "}
                  859-537-9302
                </div>
              </div>
            </div>

            {/* Gmail */}
            <div className="col-6 text-center mt-5">
              <div className="d-flex flex-column align-items-center">
                <Image
                  src={`/gmail-icon-free-png.png`}
                  alt="Gmail logo"
                  width={150}
                  height={150}
                  onClick={() => copyToClipboard("parker.senter@gmail.com")}
                  style={{ cursor: "pointer" }}
                ></Image>
                <div className="lrg-txt no-decor mt-2 text-light">
                  Click the image or copy my email here: <br />{" "}
                  parker.senter@gmail.com
                </div>
              </div>
            </div>
          </div>
        </div>
        <Link href="/" className="no-decor">
          <div className="text-center purp-txt mt-5 mb-3 back-btn">Back</div>
        </Link>
      </div>
    </div>
  );
}

export default ContactPage;

import React from 'react';
import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.min.css';
import './aboutMe.css';

function AboutMe() {
  return (
    <div>
      <div className='text-light text-center mt-5 title'>About me</div>
      <div className='row justify-content-center'>
        <div className='text-light col-4 text-center lrg-txt mt-4'>
        Hi there! My name is Parker Senter. I'm a passionate and creative full-stack web developer based in Lexington, Kentucky. I graduated from coding bootcamp, Awesome Inc, where I honed my skills and developed a strong foundation in web development.
        My journey into web development started with a curiosity for how websites are built and a desire to turn my ideas into digital realities. During my time at Awesome Inc, I had the opportunity to work on various real-world projects, where I gained experience in both front-end and back-end technologies.
        I'm enthusiastic about building clean, user-friendly, and efficient web applications. My technical skills include proficiency in HTML, CSS, JavaScript, React, Python, and more. I love tackling complex problems and continuously learning new technologies to stay up-to-date with industry trends.
        Feel free to <Link className="no-decor purp-txt" href="/">reach out to me.</Link> I'd love to hear from you!
        </div>
      </div>
      <Link href="/" className='no-decor'><div className='text-center purp-txt mt-5'>Back</div></Link>
    </div>
  );
}

export default AboutMe;

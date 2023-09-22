import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";
import "./homePage.css";

export default function HomePage() {
  return (
    <div>
      <div className="container vh-100 d-flex flex-column justify-content-center align-items-center">
        <div className="text-center">
          <h1 className="text-light home-mass-txt">Parker Senter</h1>
          <h2 className="purp-txt home-lrg-txt mb-5">Full stack web developer</h2>
          <nav className="border-top border-light">
            <div className="row mt-3 mt-md-5 nav-txt">
              <Link href="/aboutMe" className="col-12 col-md-3 no-decor purp-txt text-center">
                <div className="nav-item nav-link py-2">About me</div>
              </Link>
              <Link href="/blog" className="col-12 col-md-3 no-decor purp-txt text-center">
                <div className="nav-item nav-link py-2">Blog Posts</div>
              </Link>
              <Link href="/projects" className="col-12 col-md-3 no-decor purp-txt text-center">
                <div className="nav-item nav-link py-2">Projects</div>
              </Link>
              <Link href="/contactPage" className="col-12 col-md-3 no-decor purp-txt text-center">
                <div className="nav-item nav-link py-2">Contact me</div>
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}

import Link from "next/link";
import 'bootstrap/dist/css/bootstrap.min.css';
import './homePage.css'

export default function HomePage() {
  return (
    <div>
      <div className="container d-flex justify-content-center align-items-center vh-100 norm-bg">
        <div className="text-center">
          <div className="text-start text-light home-mass-txt">
            Parker Senter
          </div>
          <div className="text-start purp-txt home-lrg-txt mb-5">
            Full stack web developer
          </div>
          <nav className="border-top border-light">
            <div className="row mt-5 nav-txt">
              <Link
                href="/aboutMe"
                className="col-3 no-decor purp-txt"
              >
                <div className="nav-item nav-link">About me</div>
              </Link>
              <Link href="" className="col-3 no-decor purp-txt">
                <div className="nav-item nav-link">Blog Posts</div>
              </Link>
              <Link href="" className="col-3 no-decor purp-txt">
                <div className="nav-item nav-link">Projects</div>
              </Link>
              <Link href="" className="col-3 no-decor purp-txt">
                <div className="nav-item nav-link">Contact me</div>
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}

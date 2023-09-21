import next from "next";
import 'bootstrap/dist/css/bootstrap.min.css'
import './homePage.css'
import Link from "next/link";

export default function HomePage() {
    return (
        <body>
            <div class="container d-flex justify-content-center align-items-center vh-100 norm-bg">
                <div class="text-center">
                    <h1 className="text-start text-light home-mass-txt">Parker Senter</h1>
                    <div className="text-start purp-txt home-lrg-txt mb-5">Full stack web developer</div>
                    <nav className="text-light text-start">
                        <div className="row mt-5 nav-txt">
                            <Link href="/about" className="text-start col-3 no-decor purp-txt">
                                <div className="nav-item nav-link">About me</div>
                            </Link>
                            <Link href="/blog" className="text-start col-3 no-decor purp-txt">
                                <div className="nav-item nav-link">Blog Posts</div>
                            </Link>
                            <Link href="/projects" className="text-start col-3 no-decor purp-txt">
                                <div className="nav-item nav-link">Projects</div>
                            </Link>
                            <Link href="/contact" className="text-start col-3 no-decor purp-txt">
                                <div className="nav-item nav-link">Contact me</div>
                            </Link>
                        </div>
                    </nav>
                </div>
            </div>
        </body>
    )
}
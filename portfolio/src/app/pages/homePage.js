import next from "next";
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'

export default function HomePage() {
    return (
        <div class="container d-flex justify-content-center align-items-center vh-100">
            <div class="text-center">
                <h1 className="text-light home-mass-txt">Parker Senter</h1>
                <div className="text-start purp-txt home-lrg-txt">Full stack web developer</div>
            </div>
        </div>
    )
}
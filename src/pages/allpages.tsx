// import Carousel from "../components/carousel/carousel";
import Footer from "../components/footer/footer";
import Herosection from "../components/herosection/hero";
import Navbar from "../components/navbar/navbar";

export default function Allpages() {
    return (
        <div className="overflow-hidden">
            <div className="mb-20">
                <Navbar />
            </div>
            <div>
                <Herosection />
            </div>
            {/* <Carousel/> */}
            <div className="footer">
                <Footer />
            </div>
        </div>
    )
}

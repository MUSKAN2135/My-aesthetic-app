import { useState, useEffect } from "react";
import { FaHeart, FaShoppingCart, FaEye } from "react-icons/fa";
import { RiArrowDropLeftLine, RiArrowDropRightLine } from "react-icons/ri";

const products = [
    { id: 1, name: "Alexander Roll Arm Sofa", price: 150, img: "./bg1.jpeg", discount: true },
    { id: 2, name: "Brasslegged Armchair", price: 150, img: "./bg1.jpeg" },
    { id: 3, name: "Leather Chair", price: 200, img: "./bg1.jpeg", discount: true },
    { id: 4, name: "Chair Pillow", price: 49, img: "./bg1.jpeg" },
    { id: 5, name: "Modern Lounge Chair", price: 180, img: "./bg1.jpeg" }
];

const Carousel = () => {
    const [index, setIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(true);
    const gap = 24;
    const totalItems = products.length;

    // Auto-slide functionality
    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => prev + 1);
        }, 3000);
        return () => clearInterval(timer);
    }, []);

    // Ye effect infinite loop ko handle karta hai.
    useEffect(() => {
        // Jab index aakhri item se aage nikal jata hai,
        if (index >= totalItems) {
            setIsTransitioning(false); // Transition band kar do
            setIndex(0); // Foran pehle item par wapis jao
            
            // Chote se break ke baad transition dobara chalu kar do
            const timeout = setTimeout(() => setIsTransitioning(true), 50);
            return () => clearTimeout(timeout);
        }
    }, [index, totalItems]);

    const nextSlide = () => setIndex((prev) => prev + 1);
    
    const prevSlide = () => {
        if (index === 0) {
            setIsTransitioning(false); // Transition band kar do
            setIndex(totalItems - 1); // Foran aakhri item par jao
            
            const timeout = setTimeout(() => setIsTransitioning(true), 50);
            return () => clearTimeout(timeout);
        }
        setIndex((prev) => prev - 1);
    };
    
    // Yahan hum hard-coded width ki bajaye responsive classes use kar rahe hain.
    // 'w-full' for mobile, 'w-1/2' for small screens, 'w-1/3' for medium, etc.
    const transformValue = `translateX(calc(-${index} * (100% / 4 + ${gap}px)))`;

    return (
        <div className="relative w-full py-10 bg-white">
            <button
                onClick={prevSlide}
                className="absolute left-8 top-1/2 -translate-y-1/2 z-[3] flex p-2 items-center justify-center bg-white rounded-full shadow hover:bg-[#b18b5e] hover:text-white transition">
                <RiArrowDropLeftLine className="text-gray-500 h-8 w-8 rounded-full hover:text-white " />
            </button>

            <div className="relative max-w-6xl mx-auto overflow-hidden">
                <div
                    className={`flex ${isTransitioning ? "transition-transform duration-700 ease-in-out" : ""}`}
                    style={{ transform: transformValue, gap: `${gap}px` }}
                >
                    {products.map((p, i) => (
                        <div
                            key={i}
                            className="flex-shrink-0 relative bg-[#F9F6F1] rounded-xl p-3 group shadow hover:shadow-lg
                                     w-full sm:w-1/2 md:w-1/3 lg:w-1/4"
                        >
                            {p.discount && (
                                <span className="absolute top-3 left-3 bg-[#8B5E3C] text-white text-xs px-3 py-1 rounded-full">
                                    10% Off
                                </span>
                            )}
                            <div className="relative">
                                <img src={p.img} alt={p.name} className="rounded-lg w-full" />
                                <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-3 opacity-0 group-hover:opacity-100 transition">
                                    <button className="bg-white p-2 rounded-full shadow hover:bg-[#b18b5e] hover:text-white"><FaHeart /></button>
                                    <button className="bg-white p-2 rounded-full shadow hover:bg-[#b18b5e] hover:text-white"><FaShoppingCart /></button>
                                    <button className="bg-white p-2 rounded-full shadow hover:bg-[#b18b5e] hover:text-white"><FaEye /></button>
                                </div>
                            </div>
                            <h3 className="mt-3 font-semibold">{p.name}</h3>
                            <p className="text-yellow-500 text-sm">★★★★★</p>
                            <p className="text-gray-800 font-bold">USD {p.price}.00</p>
                        </div>
                    ))}
                </div>
            </div>

            <button
                onClick={nextSlide}
                className="absolute right-8 top-1/2 -translate-y-1/2 z-[3] flex p-2 items-center justify-center bg-white rounded-full shadow hover:bg-[#b18b5e] hover:text-white transition">
                <RiArrowDropRightLine className="text-gray-500 h-8 w-8 rounded-full hover:text-white" />
            </button>
        </div>
    );
};

export default Carousel;
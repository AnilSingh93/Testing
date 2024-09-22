'use client';
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState, useEffect } from "react";
import Skeleton from "../components/common/skelton/Banner";
import Link from "next/link";



const Banner = (props:any) => {
    console.log("props", props);
    
    const [gallery, setGallery] = useState([]);
    const [popup, setPopup] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [loading, setLoading] = useState(true)    
    
    useEffect(() => {
        const bannerImage = async () => {
            try {
                const res = await fetch('https://adkinstruments.in/api/v1/images/banners')
                const result = await res.json();
                setGallery(result)
                setLoading(false)
            }
            catch (error) {
                console.log("Banner", error)
            }
        }

        const popupbanner = async () => {
            try {
                const result = await fetch('https://adkinstruments.in/api/v1/images/homepage_banner')
                const resl = await result.json();                
                setPopup(resl);
            }
            catch (error) {
                console.log("Banner popup", error)
            }
        }

        const timer = setTimeout(() => {
            setShowModal(true);
          }, 5000);

        bannerImage()
        popupbanner()
    }, [])


    var settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 2500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    const closeModal = () => {
        setShowModal(false);
      };

    return (
        <>
        {showModal?
            <div onClick={closeModal} className="cursor-pointer fixed top-0 left-0 bg-black/5 z-[1111] w-full h-full bg-black/70">
                <div className="popup_bmain fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-white z-[1111] d-90% md:w-[700px] md:max-h-[500px] px-5 py-10 w-[80%] h-[100%] max-h-[300px] before:content:'' before:absolute before:md:top-[-50px] before:md:w-[calc(100%+40px)]  before:md:h-[calc(100%+70px)] before:h-[100%] before:bg-white before:left-[-20px] before:top-[-40px] before:h-[calc(100%+60px)] before:w-[calc(100%+40px)] before:rounded-md">
                
                    <button className="absolute right-0 bg-white w-[20px] h-[20px] top-[-30px] text-center line-clamp-1 cursor-pointer z-[11111]" onClick={closeModal}>X</button>
                    <Link href="/products/flowtracker2-lab-adv-1721457719">
                        <Image src={popup} alt="pop up modal" fill/>
                    </Link>
             </div>
                    <div className="bg-black/5"></div>
             
             </div>
             :''
}

        <div className="homepage_banner">
{
    loading? <Skeleton />:

            <>            
            <Slider {...settings}>

                    {
                        gallery?.map((data: any, index: any) => {
                            return (
                                <img src={data.link} className='w-full' key={`banner--${index}`} />
                            )
                        })
                    }
            </Slider>
            </>
            }
        </div>
        </>
    )
}
export default Banner
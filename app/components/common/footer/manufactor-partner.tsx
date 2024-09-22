'use client';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Headingtitle from "../Headingtitle";
import { useEffect, useState } from "react";
import Image from "next/image";



const Manufactorpartner = () => {

  const [logo, setLogo] = useState([])
    useEffect(() => {
        const bannerImage = async () => {
            try{
                const res = await fetch('https://adkinstruments.in/api/v1/manufacturer-partners')
                const result = await res.json();
                setLogo(result)
            }
            catch(error){
                  console.log("Banner", error)  
            }
        }
        bannerImage()
    },[])         

    
    var settings = {
        arrows: true,
        speed: 9000,
        autoplayspeed: 0,
        autoplay: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        cssEase:'linear',
        infinite: true,
        focusOnSelect: false,
        initialSlide: 5,
        centerMode: true,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    };

    return (
        <>
            <section className="manufactor-partner md:pt-[80px] pt-[50px]">
                <h2 className="text-center text-[26px] font-bold center">Manufacturer Partners</h2>
                <div className="w-full overflow-hidden">
                        <div className="manufac_logo">
                    <Slider {...settings}>
                    {
                        logo.map((img:any,ind:any) => {
                                return(                                    
                                    <div key={ind}>
                                    <div className="relative max-w-[150px] h-[120px] flip_partner_main cursor-pointer">
                                    <Image src={img.logo} key={`banner--${ind}`}  alt="partners" fill className="flip_partner_img"/>
                                    <div className="partner_flip_text">
                                    <p>Test</p>
                                    </div>
                                   </div>

                    </div>
                    )
                        })
                    }                       
                             
                    </Slider>
                        </div>

                </div>

            </section>
        </>
    )
}

export default Manufactorpartner;
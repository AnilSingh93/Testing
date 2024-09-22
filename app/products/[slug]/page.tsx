'use client';
import { useRouter } from 'next/navigation'
import { useEffect, useState, useRef } from "react";
import Image from 'next/image';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from 'next/link';


const Products = ({ params }: any) => {
    const { slug } = params;
    const [allData, setAlldata] = useState([]);
    const [isShowing, setIsShowing] = useState(false);
    const [related, setRelated] = useState([]);


    const [activetab, setActiovetab] = useState(1);
    const clickTab = (number: any) => {
        setActiovetab(number)
    }

    const featuredProducts = async () => {

        try {
            const res = await fetch('https://adkinstruments.in/api/v1/products/featured')
            const result = await res.json();
            setRelated(result);
        }
        catch (err) {
            console.log("Product tab" + err);
        }
    }
    useEffect(() => {
        const allProducts = async () => {
            try {
                const res = await fetch(`https://adkinstruments.in/api/v1/product/${slug}`);
                const result = await res.json();
                setAlldata(result);
            }
            catch (err) {
                console.log("PDP page  " + err);
            }
        }

        allProducts();
        featuredProducts();
    }, [])

    var settings = {
        slidesToShow: 4,
        asNavFor: '.slider-main',
        vertical: true,
        focusOnSelect: true,
        autoplay: false,
        centerMode: false,
        arrow: true,
    };
    var anothersettings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 2500,
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.slider-main',

    };


    return (
        <div className="container">


            <div className="flex flex-wrap md:flex-nowrap justify-between md:pt-8 pt-5">
                <div className="md:max-w-1/2 w-1/2">
                    <div className="flex flex-wrap relative w-full h-auto min-h-[400px] md:pr-5">
                        <div className="md:max-w-[20%] max-w-full">

                            <Slider {...settings}>
                                {
                                    allData.media?.map((images, id) => <div className="relative thumbnail prod_slider w-full md:max-h-1/2 h-auto min-h-[75px]"><Image fill loading='lazy' src={images} alt="product image" style={{ objectFit: "contain" }} key={id + 5} /></div>)
                                }
                            </Slider>

                        </div>
                        <div className="md:max-w-[80%] max-w-full w-full">
                            <Slider {...anothersettings}>
                                {
                                    allData.media?.map((images, id) => <div className="relative main_img prod_slider w-full md:max-h-1/2 h-auto min-h-[400px]"><Image fill loading='lazy' src={images} alt="product image" style={{ objectFit: "contain" }} key={id + 5} /></div>)
                                }
                            </Slider>
                        </div>

                    </div>
                </div>

                <div className="md:max-w-1/2 w-full md:pl-5">

                    <h1 className='mb-5 font-bold text-[22px] leading-7'>{allData.name}</h1>
                    <div className="flx justify-start mb-6">
                        <button className='p-2 border bg-primary text-white mr-4 border-2 border-primary rounded-md hover:bg-white hover:text-primary font-bold'>Get Quote</button>
                        <a href={`https://shop.adkinstruments.in/product/${allData.name}`} className='p-2 border bg-primary text-white mr-4 border-2 border-primary rounded-md hover:bg-white hover:text-primary font-bold'>Buy Now</a>
                    </div>
                    <div className="w-full max-w-max flx justify-center text-center p-5 bg-gray-50 rounded-sm shadow-sm flex items-center gap-5">
                        <img src="/img/truck.png" /> Standard 9-15 Days Delivery | Once received to our Hub
                        <div className="relative flex flex-col items-center group">
                            <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#4354a4">
                                <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd" />
                            </svg>
                            <div className="absolute bottom-0 flex flex-col items-center hidden mb-5 group-hover:flex">
                                <span className="relative rounded-md z-10 p-4 text-xs leading-none text-white whitespace-no-wrap bg-primary">A top aligned tooltip. That has enough text to be multi-line!<p className="pt-4 pb-4">Just check it out!</p></span>
                                <div className="w-3 h-3 -mt-2 rotate-45 bg-primary"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="main_accordian mt-3 md:mt-5">
                <div className="tab_btn">
                    <button data-attr="1" onClick={() => clickTab(1)} className={activetab == 1 ? 'text-[20px] font-bold border-b-2 border-solid border-primary text-black' : 'text-[20px] text-black'}>Details</button>
                    <button data-attr="2" onClick={() => clickTab(2)} className={activetab == 2 ? 'text-[20px] font-bold border-b-2 border-solid border-primary text-black ml-[20px]' : 'text-[20px] ml-[20px] text-black'}>Specification</button>
                </div>
                <div className={activetab == 1 ? 'block' : 'hidden'} data-attr="1">
                    <div className="prod-with-detail prod-detila flex md:flex-nowrap flex-wrap justify-center gap-8 mt-8">
                        <div dangerouslySetInnerHTML={{ __html: allData?.content && allData.content.description }}></div>
                    </div>
                </div>
                <div className={activetab == 2 ? 'block' : 'hidden'} data-attr="2">
                    <div className="prod-with-detail prod-detila flex md:flex-nowrap flex-wrap justify-between gap-8 mt-8">
                        <div dangerouslySetInnerHTML={{ __html: allData?.content && allData.content.specification }}></div>
                    </div>

                </div>
            </div>

            <div className="relate_main mt-[80px]">
                <h2 className='text-[24px] font-bold text-center border-primary text-black mb-8'>You may also like</h2>
                <div className="prod-with-detail prod-detila flex md:flex-nowrap flex-wrap justify-center gap-8">
                    {
                        related.slice(0, 4).map((data: any) => {
                            return (
                                <>
                                    <div className="text-center product-main w-full" key={data.id + 1}>
                                        <Link href={`/products/${data.slug}`} className="inline-block">
                                            <div className="prod-image relative max-w-[300px] h-[250px]">
                                                <Image src={data.media.original_url} alt="Featured products" fill />

                                            </div>
                                            <div className="prod-detila ">
                                                <h2 className="mb-4 font-bold text-sm md:mt-4 text-[18px]">{data.name}</h2>
                                            </div>
                                        </Link>
                                    </div>
                                </>
                            )
                        })
                    }

                </div>
            </div>
        </div>

    )
}

export default Products; 
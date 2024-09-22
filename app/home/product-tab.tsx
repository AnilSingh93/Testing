'use client';
import { useEffect, useState } from "react";
import Headingtitle from "../components/common/Headingtitle";
import Link from "next/link";
import Image from 'next/image'
import Skeleton from "../components/common/skelton/Imageskelton";


export default function ProductTab() {
    const [data, setData] = useState([]);
    const [featured, setFeatured] = useState([]);
    const [loading, setLoading] = useState(true);


    const newArrived = async () => {
        try {
            const res = await fetch('https://adkinstruments.in/api/v1/products/newly_arrived')
            const result = await res.json();
            setData(result);
            setLoading(false);
        }
        catch (err) {
            console.log("Product tab" + err);
        }
    }

    const featuredProducts = async () => {

        try {
            const res = await fetch('https://adkinstruments.in/api/v1/products/featured')
            const result = await res.json();
            setFeatured(result);
            setLoading(false);
        }
        catch (err) {
            console.log("Product tab" + err);
        }
    }



    useEffect(() => {
        newArrived()
        featuredProducts()
    }, []);



    const [activetab, setActiovetab] = useState(1);
    const clickTab = (number: any) => {
        setActiovetab(number)
        }

        
    return (
        <>
                    <section className="pt-[40px] md:pt-[80px]">
                <Headingtitle title="FIND YOUR NEXT FAVORITE" position="center" />
                <div className="tab_section text-center pt-[15px]">
                    <div className="tab_btn">
                        <button data-attr="1" onClick={() => clickTab(1)} className={activetab == 1 ? 'text-[20px] font-bold border-b-4 border-solid border-primary text-[#251048]' : 'text-[20px] text-black'}>Newly Arrived</button>
                        <button data-attr="2" onClick={() => clickTab(2)} className={activetab == 2 ? 'text-[20px] font-bold border-b-4 border-solid border-primary text-[#251048] ml-[20px]' : 'text-[20px] ml-[20px] text-black'}>Featured Products</button>
                    </div>
                    <div className={activetab == 1 ? 'block container' : 'hidden container'} data-attr="1">
                        <div className="prod-with-detail prod-detila flex md:flex-nowrap flex-wrap justify-center gap-8 mt-8">
                            {loading ? <Skeleton /> : <>

                                {
                                    data?.map((item:any,index:any) => {
                                        return (
                                             <>                                            
                                            <div className="text-center product-main w-full " key={index}>
                                                    <Link href={`/products/${item.slug}`} className="inline-block">
                                                        <div className="prod-image relative md:w-[auto] w-[250px] md:h-[300px] h-[250px] mx-auto">
                                                            
                                                            <Image src={item?.media?.original_url}  alt="newly arrived" fill />
                                                        </div>
                                                        <div className="prod-detila ">
                                                            <h2 className="mb-4 font-bold text-sm mt-4 text-[13px] line-clamp-[1.5]">{item.name}</h2>
                                                        </div>
                                                    </Link>                                                    
                                                </div>
                                            </>
                                        )
                                    })
                                }
                            </>
                            }
                            
                        </div>
                            <button className="mt-[25px] py-[11px] px-[28px] text-center flex relative justify-center border border-primary border-2 rounded-[50px] mx-auto bg-primary text-white hover:bg-white hover:text-[#251048] uppercase hover:border-[#251048]">View Details</button>

                    </div>
                    <div className={activetab == 2 ? 'block container' : 'hidden'} data-attr="2">
                    <div className="prod-with-detail prod-detila flex md:flex-nowrap flex-wrap justify-between gap-8 mt-8">
                     {loading ? <Skeleton /> : <>

                                {
                                    featured.slice(0,4).map((data: any) => {
                                        return (
                                            <>
                                                <div className="text-center product-main w-full" key={data.id+1}>
                                                    <Link href={`/products/${data.slug}`} className="inline-block">                                                    
                                                    <div className="prod-image relative md:w-[330px] w-[250px] md:h-[300px] h-[250px] mx-auto">
                                                        <Image src={data.media.original_url} alt="Featured products" fill/>
                                                            
                                                        </div>
                                                        <div className="prod-detila ">
                                                        <h2 className="mb-4 font-bold text-sm mt-4 text-[13px] line-clamp-[1.5]">{data.name}</h2>
                                                        </div>
                                                    </Link>                                                    
                                                </div>
                                            </>
                                        )
                                    })
                                }
                            </>
                            }
                        </div>

                        <button className="mt-[20px] py-[11px] px-[28px] text-center flex relative justify-center border border-primary border-2 rounded-[50px] mx-auto bg-primary text-white hover:bg-white hover:text-primary">View Details</button>
                    </div>
                </div>
            </section>
        </>
    )
}
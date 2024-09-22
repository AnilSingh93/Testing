"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const catProducts = ({ params }: any) => {
    const { product } = params;
    
    const [allProduct, setallProduct] = useState([]);


    useEffect(() => {
        const data = async () => {
            try {
                const data = await fetch(`https://adkinstruments.in/api/v1/categories/particle-counter-meter/${product}`);
                const res = await data.json();
                setallProduct(await res.data);
            }
            catch (err) {
                console.warn("category product list", err);
            }
        }
        data();
    }, [])

    return (
        <div className="container">
             <div className="heading md:py-8 py-4">
            </div>
            <div className="main_coll flex flex-wrap justify-center gap-8">
                {allProduct.map((data: any) => {
                    return (
                        <div key={data.id + 1} className="main w-full relative md:max-w-[23%] max-w-full mb-7 md:mb-0">
                            <Link href={`/products/${data.slug}`}>
                            <div className="relative after:bg-gradient-to-t from-[#00000065] to-[#00000065] after:content:'' after:absolute after:w-full after:h-full after:left-0 after:top-0  md:h-[400px] h-[auto]">
                                {
                                    <Image src={data.media.original_url} fill loading='lazy' style={{ objectFit: "cover" }} alt="{data.name}" />
                                }
                            </div>
                            <div className="info absolute bottom-[30px] px-12 w-full text-center">
                                <p className="text-white py-3 px-4 text-[16px] font-bold rounded-md mx-auto inline-block md:mb-4 mb-2">{data.name}</p>
                            </div>
                        </Link>
                        </div>
                    )
                })

                }
            </div>
        </div>
    )
};

export default catProducts;
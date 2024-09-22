'use client';
import React, { Suspense, useEffect, useState } from "react";
import Slider from "react-slick";
import Link from "next/link";



const CollectionList = () =>{
  const[collectionList, setCollectionList] = useState([])
  const[loading, setLoading] = useState(true)
  
  useEffect(() =>{
  const homeCollection = async ()=>{
      try{
          const res = await fetch('https://adkinstruments.in/api/v1/categories')
            const result = await res.json();
            const findalResult = result.data;            
             setCollectionList(findalResult);
            setLoading(false)
        }
        catch(error){
            console.log("home Collection"+ error)
        }       
    }
        homeCollection();
        
    },[])

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      };
      const Totallength = Math.floor(Math.random() * ((collectionList.length - 3) - 3) + 3);
      const tillnum = Totallength + 3;
      

    return(
        <section className="md:pt-[80px] pt-[40px] flex justify-between flex-wrap">            
            {
                  collectionList.slice(Totallength,tillnum).map((data:any)=>{
                    return(                    

                        
                        <div key={data.id+1} className="main relative md:max-w-[33.33%] max-w-full mb-7 md:mb-0">
                            <div className="relative after:bg-gradient-to-t from-[#00000065] to-[#00000065] after:content:'' after:absolute after:w-full after:h-full after:left-0 after:top-0  md:h-[500px] h-[auto] main_home_coll">
                                { <img src={data.media.original_url} className="w-full h-full object-cover" /> }                                
                            </div>
                            <div className="info absolute bottom-[30px] px-12 w-full text-center">                                
                                <Link href={`/category/${data.slug}`} className="bg-white py-3 px-4 text-[16px] font-bold  rounded-md mx-auto inline-block">{data.name}</Link>
                                
                                
                            </div>
                        </div>
                        
                    )
                  })
             }            

        </section>
    )
}

export default CollectionList
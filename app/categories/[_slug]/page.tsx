'use client';
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";


const CollectionChildren = ({params}:any ) => {    
    const {_slug} = params;
    
    
const [collections, setCollections] = useState([]);
const [loading, setLoading] = useState(true);
console.log(collections);


useEffect(() =>{
const categoryData = async () => {
    try{
        const res = await fetch(`https://adkinstruments.in/api/v1/categories/${_slug}`);
          const result = await res.json();
         const finalResult = await result.data;         
         setCollections(finalResult);
          setLoading(false)
      }
      catch(error){
          console.log("home Collection"+ error)
      }    
}
    categoryData();
},[])

    return (
                <>
                <div className="container">
             <div className="heading md:py-8 py-4"></div>
            <div className="main_coll flex flex-wrap justify-center gap-8">
                    {
                        collections.map((data:any) => {
                            return(
                                <div key={data.id+1} className="main w-full relative md:max-w-[23%] max-w-full mb-7 md:mb-0">
                                <div className="relative after:bg-gradient-to-t from-[#00000065] to-[#00000065] after:content:'' after:absolute after:w-full after:h-full after:left-0 after:top-0  md:h-[400px] h-[auto]">
                                    {
                                     <Image src={data.media.original_url} fill loading='lazy' style={{objectFit: "cover"}}  alt="{data.name}"/>
                                      }                                
                                </div>
                                <div className="info absolute bottom-[30px] px-12 w-full text-center">   
                                <p className="text-white py-3 px-4 text-[16px] font-bold rounded-md mx-auto inline-block md:mb-4 mb-2">{data.name}</p>                       
                             
                                     <Link href={data.children && data.children.length > 0 ? `/categories/${data.slug_url}`: `/categories/${data.slug_url}`} className="bg-white py-3 px-4 text-[16px] font-bold  rounded-md mx-auto inline-block">See the collections</Link>
                                    
                                  
                                </div>
                            </div>
                            )
                        })
                    }
                    </div>
                    </div>
                </>
    )
}
export default CollectionChildren;
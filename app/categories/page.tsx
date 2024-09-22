'use client';
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";



const allCategory = () => {
const [collections, setCollections] = useState([]);
const [loading, setLoading] = useState(true);


useEffect(() =>{
const categoryData = async () => {
    try{
        const res = await fetch('https://adkinstruments.in/api/v1/categories')
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
// const downloadBrouchers = (url) => {
//     console.log(url);    
//     const aTag = document.createElement('a');
//     aTag.href = url;
//     aTag.setAttribute("download", "optional-value");
//     aTag.setAttribute("target", "_blank");
//     document.body.appendChild(aTag);
//     aTag.click('sample pdf');
//     // aTag.remove();
    
// }


// const onButtonClick = (data) => {
//     console.log("download", data);
    
//     const pdfUrl = data;
//     const link = document.createElement("a");
//     link.href = pdfUrl;
//     link.download = "data"; // specify the filename
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
// }



    return (

        <div className="container">
            <div className="heading md:py-8 py-4">
                <h1 className="md:text-[24px] text-center">All collections</h1>
            </div>
        <div className="flex flex-wrap">
            <div className="main_coll justify-between gap-8 md:w-[25%] w-full">
                        <h2 className="mb-3 font-bold">Download Brochures</h2>
                    <ul className="border-gray-500 border color-grey-100 p-2 max-w-[80%] rounded-sm">
{collections.map((brouchers:any)=>{
    return(
            <li key={brouchers.id+1} className="mb-2 border-b last:border-b-0 border-gray-500 hover:color-black color-grey-100 pb-1">
                
                <button className="flex items-center gap-3" type="button">
                    
                    <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 384 512">

<path d="M384 128h-128V0L384 128zM256 160H384v304c0 26.51-21.49 48-48 48h-288C21.49 512 0 490.5 0 464v-416C0 21.49 21.49 0 48 0H224l.0039 128C224 145.7 238.3 160 256 160zM255 295L216 334.1V232c0-13.25-10.75-24-24-24S168 218.8 168 232v102.1L128.1 295C124.3 290.3 118.2 288 112 288S99.72 290.3 95.03 295c-9.375 9.375-9.375 24.56 0 33.94l80 80c9.375 9.375 24.56 9.375 33.94 0l80-80c9.375-9.375 9.375-24.56 0-33.94S264.4 285.7 255 295z"></path>
</svg>
                    </span>{brouchers.name}</button> 

                    
                </li>
    )
})

}

                    </ul>
            </div>
             <div className="main_coll flex flex-wrap justify-between gap-8 md:w-[72%] w-full">
                {collections.map((data:any) =>{
                    return(
                        <div key={data.id+1} className="main w-full relative md:max-w-[30%] max-w-full mb-7 md:mb-0">
                        <div className="relative after:bg-gradient-to-t from-[#00000065] to-[#00000065] after:content:'' after:absolute after:w-full after:h-full after:left-0 after:top-0  md:h-[300px] h-[auto]">
                            {
                             <Image src={data.media.original_url} fill loading='lazy' style={{objectFit: "cover"}}  alt="{data.name}"/>
                              }                                
                        </div>
                        <div className="info absolute bottom-[30px] px-12 w-full text-center">   
                        <p className="text-white py-3 px-4 text-[16px] font-bold rounded-md mx-auto inline-block md:mb-4 mb-2">{data.name}</p>                       
                     
                             <Link href={data.children && data.children.length >= 1 ? `/categories/${data.slug_url}`: `/categories/` } className="bg-white py-3 px-4 text-[16px] font-bold  rounded-md mx-auto inline-block">See the collections</Link> 


                        </div>
                    </div>
                    )
                })

                }
            </div> 
</div>
        </div>
    )
}
export default allCategory;
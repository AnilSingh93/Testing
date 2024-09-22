'use client';
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const opportunities = () => {
    const [opportunity , setOopportunity] = useState([]);
    const [activetab, setActiovetab] = useState(1);
    const clickTab = (number: any) => {
        setActiovetab(number)
    }
    
    
    
    useEffect(() =>{
    const opportunityData = async () => {
        try{
            const res = await fetch('https://adkinstruments.in/api/v1/opportunities')
            const result = await res.json();              
            // const finalResult = await result.data;
            console.log('result hai', result.careers);
            
            setOopportunity(result);            
            
          }
          catch(error){
              console.log("opportunity"+ error)
          }    
    }
    opportunityData();
    
    },[])
    


    return (
        <>
            <div className="about_main">
                <div className="about_banner">
                    <Image src="/img/CAREER-BANNER-1380X355___media_library_original_1380_355.png" width="1024" height="100" className="w-full" alt="About banner" />
                </div>

            </div>

            <div className="container md:mt-5 mt-3 md: pt-5 ">
                <div className="tab_btn text-center">
                    <button data-attr="1" onClick={() => clickTab(1)} className={activetab == 1 ? 'text-[20px] font-bold border-b-2 border-solid border-primary text-black' : 'text-[20px] text-black'}>
                        Become An Employee</button>
                    <button data-attr="2" onClick={() => clickTab(2)} className={activetab == 2 ? 'text-[20px] font-bold border-b-2 border-solid border-primary text-black ml-[20px]' : 'text-[20px] ml-[20px] text-black'}>
                        Become a Distributor</button>
                </div>
                <div className={activetab == 1 ? 'block' : 'hidden'} data-attr="1">
                    <div className="prod-with-detail prod-detila">



                        <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-5">
                            <table className="w-full text-sm text-left rtl:text-right text-white-100 dark:text-white">
                                <thead className="text-xs uppercase bg-primary dark:text-white text-white">
                                    <tr>
                                        <th scope="col" className="px-6 py-3">S. NO.</th>
                                        <th scope="col" className="px-6 py-3">Position</th>
                                        <th scope="col" className="px-6 py-3">Department</th>
                                        <th scope="col" className="px-6 py-3">Location</th>
                                        <th scope="col" className="px-6 py-3">Action</th>
                                    </tr>
                                </thead>
                            
                            </table>
                        </div>


                    </div>
                </div>

                <div className={activetab == 2 ? 'block' : 'hidden'} data-attr="2">
                    <div className="prod-with-detail prod-detila ">
                        <h1 className="font-bold text-xl text-center mt-5 text-primary">Available Categories</h1>
                        <ul className="flex flex-wrap justify-center mt-5">
                            <li className="mx-2 font-semibold text-[14px]"><Link href="">AIR QUALITY</Link></li>
                            <li className="mx-2 font-semibold text-[14px]"><Link href="">CONSTRUCTIONAL TOOLS</Link></li>
                            <li className="mx-2 font-semibold text-[14px]"><Link href="">MEASURING DEVICES</Link></li>
                            <li className="mx-2 font-semibold text-[14px]"><Link href="">MODEMS/ROUTERS</Link></li>
                            <li className="mx-2 font-semibold text-[14px]"><Link href="">OCEANOGRAPHY</Link></li>
                            <li className="mx-2 font-semibold text-[14px]"><Link href="">WASTE WATER</Link></li>
                        </ul>

                        
<ul className="grid w-full gap-6 md:grid-cols-2 mt-10">
    <li>
        <input type="radio" id="single-category" name="hosting" value="hosting-small" className="hidden peer"  />
        <label htmlFor="single-category" className="peer-checked/draft:text-sky-500 inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">                           
            <div className="block">
                <div className="w-full text-lg font-semibold">Single Category</div>
            </div>
            <svg className="w-5 h-5 ms-3 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </label>
    </li>
    <li>
        <input type="radio" id="multiple-category" name="hosting" value="hosting-big" className="hidden peer" />
        <label htmlFor="multiple-category" className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
            <div className="block">
                <div className="w-full text-lg font-semibold">Multiple category</div>
            </div>
            <svg className="w-5 h-5 ms-3 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </label>
    </li>
</ul>
<Link href="/opportunities/distributors"  className='mt-10 p-2 border bg-primary text-white border-2 border-primary rounded-md hover:bg-white hover:text-primary font-bold w-1/2 mx-auto block text-center'>Apply Now</Link>

                    </div>

                </div>

            </div>

        </>
    )
};

export default opportunities;
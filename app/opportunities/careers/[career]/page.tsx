'use client';
import { Router } from "next/router"
import { useEffect, useState } from "react";

const Careers = ({params}:any) => {    
    const {career} = params;
    const [careerdata, setcareerData] = useState([]);
    console.log("data is", careerdata);
    
    
    useEffect(()=>{
        const careerData = async () =>{
            try{
                const response = await fetch (`https://adkinstruments.in/api/v1/opportunities/careers/${career}`);
                const data = await response.json();
                setcareerData(data);
                console.log(data);
                

            }
            catch{}
        }
        careerData();
    },[])
    return (
        <>        
        <div className="container md:pt-10 pt-2">
        <div className="flex flex-wrap justify-between items-start">
        <div className="md:max-w-[55%] w-full shadow-md shadow-[#e2e2e2] p-5 mr-5 rounded-sm	">
        <h1 className="md:text-[30px] text-lg font-bold">{careerdata?.name} </h1>
                <ul className="mt-10  border-b-grey-500">
                    <li className="mb-2"><b>Location</b>	<span className="ml-10">{careerdata?.location}</span></li>
                    <li className="mb-2"><b>Experience</b>	<span className="ml-10">{careerdata?.experience}</span></li>
                    <li className="mb-2"><b>Department</b>	<span className="ml-10">{careerdata?.department}</span></li>
                </ul>
                {/* <p className="mt-3 text-primary font-semibold ">Job Description for {careerdata?.name}: </p> */}

                
                {/* <div dangerouslySetInnerHTML={{ __html: careerdata?.description && careerdata?.description.
                content }}></div> */}
                <div dangerouslySetInnerHTML={{ __html: careerdata?.description && careerdata?.description[0].content }}></div>
                


                {/*
                <ul className="mt-3 space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">

                <li className="pb-1">Identify and develop new business opportunities through proactive prospecting and lead generation.</li>
                <li className="pb-1">Conduct market research to understand customer needs, preferences, and industry trends.
                </li>
                <li className="pb-1">Build and maintain relationships with existing and potential clients to promote our products or services.
                </li>
                <li className="pb-1">Present product demonstrations and technical presentations to potential customers.
                </li>

            </ul>
             <p className="mt-3 text-primary font-semibold ">Requirements:</p>
            <li className="pb-1">Bachelor's degree in Engineering, Business Administration, or related field.
            </li>
            <li className="pb-1">Proven track record of success in technical sales or a similar role, preferably in Government & Educational Institution Sales.
            </li>
            <li className="pb-1">Strong technical aptitude and understanding of technical products or services.
            </li>
            <li className="pb-1">Excellent communication, negotiation, and presentation skills.
            </li>
            <li className="pb-1">Ability to work independently and as part of a team in a fast-paced environment.
            </li>
            <li className="pb-1">
            Proficiency in MS Office, MS Excel & PowerPoint.

            </li> */}

        </div>
                <div className="md:w-[40%] md:block md:mx-auto w-full  border">
                    <div className="">
                        <h1 className="md:text-[20px] text-center text-lg font-bold bg-primary text-white p-3">Apply Now</h1>
                    </div>
                    <div className="contact_etails md:pt-8 pt-2 p-4">
                        <p className="md:text-[16px] color-[#454545] md:leading-6 leading-4 md:mb-5 mb-2">For more information, kindly fill in your particulars below, and our representative will get in touch with you:</p>
                        <form className="md:flex flex-wrap justify-between md-mt-0 mt-8">
                            <input className="text-[12px] placeholder:text-[12px] md:tex-[16px] md:placeholder:text-[14px] mb-4 border-2 border w-full md:w-[49%] border-grey p-2" type="text" placeholder="First name" />
                            <input className="text-[12px] placeholder:text-[12px] md:tex-[16px] md:placeholder:text-[14px] mb-4 border-2 border w-full md:w-[49%] border-grey p-2" type="text" placeholder="Last name" />
                            <input className="text-[12px] placeholder:text-[12px] md:tex-[16px] md:placeholder:text-[14px] mb-4 border-2 border w-full md:w-[49%] border-grey p-2" type="email" placeholder="Email" />
                            <input className="text-[12px] placeholder:text-[12px] md:tex-[16px] md:placeholder:text-[14px] mb-4 border-2 border w-full md:w-[49%] border-grey p-2" type="text" placeholder="Phone" />                            
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Upload resume (pdf)*</label>
<input className="text-[12px] placeholder:text-[12px] md:tex-[16px] md:placeholder:text-[14px] mb-4 border-2 border w-full border-grey p-2" id="small_size" type="file" accept=".pdf" />

                            
                            <button className="mt-5 inline-block w-full border border-1 md:border-2 rounded-full border-black md:p-3 p-2 text-black uppercase font-bold md:text-[16px] text-[14px]">
                                Submit
                            </button>
                        </form>
                    </div>
                </div>

               

            </div>
            </div>
        </>
    )
}

export default Careers
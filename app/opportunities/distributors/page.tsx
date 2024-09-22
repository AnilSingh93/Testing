
const Careers = () => {
    return (
        <>
        <div className="container md:pt-10 pt-2">
        <div className="flex flex-wrap justify-between items-start">
        <div className="md:max-w-[55%] w-full shadow-md shadow-[#e2e2e2] p-5 mr-5 rounded-sm	">
        <h1 className="md:text-[30px] text-lg font-bold">CATEGORY DETAILS</h1>                              
                <p className="mt-3 text-primary font-semibold ">We are looking for resellers for our multiple categories who can work as team with us in mentioned categories.
</p>
               

        </div>
                <div className="md:w-[40%] md:block md:mx-auto w-full  border">
                    <div className="">
                        <h1 className="md:text-[20px] text-center text-lg font-bold bg-primary text-white p-3">Apply Now</h1>
                    </div>
                    <div className="contact_etails md:pt-8 pt-2 p-4">                        
                        <form className="md:flex flex-wrap justify-between md-mt-0 mt-8">
                            <input className="text-[12px] placeholder:text-[12px] md:tex-[16px] md:placeholder:text-[14px] mb-4 border-2 border w-full md:w-[49%] border-grey p-2" type="text" placeholder="Organization Name *" required />
                            <input className="text-[12px] placeholder:text-[12px] md:tex-[16px] md:placeholder:text-[14px] mb-4 border-2 border w-full md:w-[49%] border-grey p-2" type="text" placeholder="GST No *" required />
                            <input className="text-[12px] placeholder:text-[12px] md:tex-[16px] md:placeholder:text-[14px] mb-4 border-2 border w-full md:w-[49%] border-grey p-2" type="text" placeholder="Location *" required />                            
                            <input className="text-[12px] placeholder:text-[12px] md:tex-[16px] md:placeholder:text-[14px] mb-4 border-2 border w-full md:w-[49%] border-grey p-2" type="email" placeholder="Email" />
                            <input className="text-[12px] placeholder:text-[12px] md:tex-[16px] md:placeholder:text-[14px] mb-4 border-2 border w-full md:w-[49%] border-grey p-2" type="text" placeholder="Categories" />
                            <textarea className="text-[12px] placeholder:text-[12px] md:tex-[16px] md:placeholder:text-[14px] border-2 border w-full border-grey p-2 md:h-[150px] h-[100px]" placeholder="Comments *"></textarea>                            
                            
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
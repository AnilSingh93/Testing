import Image from 'next/image';

const About = () => {
    return (
        <div className="about_main">
            <div className="about_banner">
                <Image src="/img/Sustainability1380x355___media_library_original_1380_355.png" width="1024" height="100" className="w-full" alt="About banner"/>
            </div>
            <div className="container">
                <div className="about_text md:mt-10 mt-5">
          
                <p className=' text-[18px] leading-7 mb-5'>All our products are designed as per the needs of our valued patrons. Our industrial measurement tools can be used in various domains. Our decade-long experience of working with industry experts is the testimony to the fact our aim is to be nothing, but the best.</p>

                <p className=' text-[18px] leading-7 mb-5'>We know that one size doesn’ fit all, and hence, all our products are crafted with a personal touch. And our personalized range of products is there to help our patrons out with the ever-changing needs of the consumers. Just in case you want to know about our range, we offer close to a thousand products! Such a range will help you identify your wants and needs. And it doesn’t end at our range of products! Our experts are there to help you out 24x7, right from helping you choose what’s best for you, to helping you get your desired output. Rest assured, you are not alone in this journey.</p>

                <p className=' text-[18px] leading-7 mb-5'>To date, ADK Instruments is one of the most energy-efficient and environmental companies, and we aim to be the drivers and innovators of change, a change that lies in the sustainable and safe environment.</p>

                <h4 className=' text-[20px] leading-7 mb-3 mt-5'><b>Our Product Range Includes:</b></h4>
                <p className=' text-[18px] leading-7 mb-5'><b>Measuring Devices:</b> Our measuring devices are designed to accurately measure various parameters, and can be used in the spheres of physical, electrical and chemical units.</p>

                <p className=' text-[18px] leading-7 mb-5'><b>
Air Quality Devices:</b> We offer air quality measurement tools, fitted with high-performance sensors that can accurately measure the Air Quality Index (AQI) and various other parameters, to determine the quality of the air.</p>

<p className=' text-[18px] leading-7 mb-5'><b> 
Hydrology:</b> With the ever-growing focus on energy extraction from water, our hydro-specific products revolve around the projects where water plays a crucial role, right from its studying to energy extraction.</p>
 
<p className=' text-[18px] leading-7 mb-5'><b>Meteorology:</b> These products are carefully crafted to solve the observational, modeling and forecasting needs.</p>

<p className=' text-[18px] leading-7 mb-5'><b>
Outdoor:</b> Venturing out in the words for a project? Our personalized tents and outdoor recreational tools are there to take care of all your needs.</p>

 
<p className=' text-[18px] leading-7 mb-5'><b>Water Quality:</b> Our products conform to the highest standards, and help determine the quality of water, and also help in identifying the quality of water that’s being produced.</p>

<p className=' text-[18px] leading-7 mb-5'><b> 
Oceanography:</b> For this domain, our product range comprises plant and animal sampling devices, profilers, water sampling devices and floaters.</p>

 
<p className=' text-[18px] leading-7 mb-5'><b>Waste Water Management:</b> A critical aspect that’s going to change the way we imagine our future, our purifiers, water samplers and water quality identifiers will help you manage and treat the wastewater.</p>

<p className=' text-[18px] leading-7 mb-5'><b>
Communication Applications:</b> “A team that stays together, grows together.” Our communication application platform will help enable enterprises to keep a check on their employees, and develop an environment where the workforce feels at home.</p>
                </div>

                <div className='text_bottom flex items-center justify-between'>
                    <div className='column'>
                    </div>
                    <div className='column'>
                    </div>
                    <div className='column'>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;
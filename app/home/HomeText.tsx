import { useEffect, useState } from "react";

const Hometext = () => {
  const [allData, setAlldata] = useState([]);
  useEffect(() => {
    const allProducts = async () => {
        try {
            const res = await fetch(`https://adkinstruments.in/api/v1/homepage-content`);
            const result = await res.json();
            setAlldata(result);
        }
        catch (err) {
            console.log("PDP page  " + err);
        }
    }

    allProducts();
}, [])

        return(          
            <div className="md:pt-[80px] pt-[40px] container max-w-[1200px] mx-auto text-center ">
             <h2 className="text-center text-[26px] font-bold">ADK INSTRUMENTS</h2>
             <h3 className="text-center text-[20px] mb-4">Setting standards, today and tomorrow.</h3>
             {/*
             <div className="pt-[25px]">
              <p className="text-[16px] leading-7 pb-5 text-black">We set new principles in client experience and aim to create future-ready products. We take great pride in our products, that reek of quality, and our industry-best personalized services.</p>
              <p className="text-[16px] leading-7 pb-5">We, at ADK Instruments, work on the most important things that an industrial enterprise needs, which include Industrial Measurement Tools. Our tools are designed with utmost precision, and are tested under rigorous conditions, in order to provide a one-stop, fuss-free solution to all our dear patrons.</p>
              <p className="text-[16px] leading-7 pb-5">Such is the quality of our products, these tools not only help in enabling the optimization of processes, they also maximize efficiency of the work, thanks to the stringent quality protocols followed by us. These products are specifically designed for diverse industries, from industrial plants, universities, government organizations and laboratories.</p>
              <p className="text-[16px] leading-7 pb-5">All our products are meticulously crafted and manufactured, and that personal touch ensures that you never have to worry about the instrumental needs in your work domain.</p>
              </div> */}

<div className="home_text" dangerouslySetInnerHTML={{ __html: allData && allData.html_content }}></div>

            </div>
        )

}

export default Hometext;
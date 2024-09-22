'use client';
// pages/contact.js
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    phone: '',
    email: '',
    message: '',
    city: '',
    state: '',
    country: '',
    pincode: ''
     });
  const [status, setStatus] = useState('');
  const [failedmessage, setFailedmessage] = useState('');
  const [buttonstatus, setButtonstatus] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonstatus(true)
    
    
    try {        
      const response = await fetch('https://adkinstruments.in/api/v1/contact-us', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('Message sent successfully!');
        setButtonstatus(false);
      } else {
        console.log("contat error", response );
        
        setFailedmessage('Failed to send message.');
        setButtonstatus(false);
      }
    } catch (error) {
      console.error('An error occurred:', error);
      setStatus('An error occurred.');
    }
  };



  return (
       <>
        <div className="container md:pt-10 pt-2">
            <div className="md:w-[700px] md:block md:mx-auto w-full">
                <div className="">
                    <h1 className="md:text-[40px] text-lg font-bold">Contact Us</h1>
                </div>
                <div className="contact_etails md:pt-8 pt-2">
                    <p className="md:text-[16px] color-[#454545] md:leading-6 leading-4 md:mb-5 mb-2">For more information, kindly fill in your particulars below, and our representative will get in touch with you:</p>
                    <form className="md:flex flex-wrap justify-between md-mt-0 mt-8" onSubmit={handleSubmit}>
         
                        <input onChange={handleChange} 
                        name="first_name"
                        value={formData.first_name} className="text-[12px] placeholder:text-[12px] md:tex-[16px] md:placeholder:text-[14px] mb-4 border-2 border w-full md:w-[49%] border-grey p-2" type="text"
                        placeholder="First name"
                        required
                        />

                        <input onChange={handleChange}
                         name="last_name"
                         value={formData.last_name}
                          className="text-[12px] placeholder:text-[12px] md:tex-[16px] md:placeholder:text-[14px] mb-4 border-2 border w-full md:w-[49%] border-grey p-2" type="text" placeholder="Last name"
                          required
                          />

                        <input onChange={handleChange}
                        name="phone"
                         value={formData.phone}
                          className="text-[12px] placeholder:text-[12px] md:tex-[16px] md:placeholder:text-[14px] mb-4 border-2 border w-full md:w-[49%] border-grey p-2" type="text" placeholder="Phone"
                          required
                          />

                        <input onChange={handleChange}
                        name="email"
                        value={formData.email}
                        className="text-[12px] placeholder:text-[12px] md:tex-[16px] md:placeholder:text-[14px] mb-4 border-2 border w-full md:w-[49%] border-grey p-2" type="email" placeholder="Email"
                        required
                        />

                        <input onChange={handleChange}
                        name="city"
                        value={formData.city}
                         className="text-[12px] placeholder:text-[12px] md:tex-[16px] md:placeholder:text-[14px] mb-4 border-2 border w-full md:w-[49%] border-grey p-2" type="text" placeholder="City"
                         required
                         />

                        <input onChange={handleChange}
                        name="state"
                        value={formData.state}
                        className="text-[12px] placeholder:text-[12px] md:tex-[16px] md:placeholder:text-[14px] mb-4 border-2 border w-full md:w-[49%] border-grey p-2" type="text" placeholder="State"
                        required
                        />

                        <input onChange={handleChange}
                         name="country"
                         value={formData.country}
                         className="text-[12px] placeholder:text-[12px] md:tex-[16px] md:placeholder:text-[14px] mb-4 border-2 border w-full md:w-[49%] border-grey p-2" type="text" placeholder="Country"
                         required
                         />

                        <input onChange={handleChange}
                         name="pincode"
                         value={formData.pincode}
                          className="text-[12px] placeholder:text-[12px] md:tex-[16px] md:placeholder:text-[14px] mb-4 border-2 border w-full md:w-[49%] border-grey p-2" type="text" placeholder="Pin code"
                          required
                          />

                        <textarea onChange={handleChange}
                         name="message"
                         value={formData.message}
                         className="text-[12px] placeholder:text-[12px] md:tex-[16px] md:placeholder:text-[14px] border-2 border w-full border-grey p-2 md:h-[150px] h-[100px]" placeholder="Drop your message here and mention company name if any" required></textarea>
                        <button className="mt-5 inline-block w-full border border-1 md:border-2 rounded-full border-black md:p-3 p-2 text-black uppercase font-bold md:text-[16px] text-[14px]">
                            Send Message
                        </button>                        
                    {status && <p className='text-green-500 text-center m-2 w-full'>{status}</p>}
                    {failedmessage && <p className="text-red-500  text-center m-2 w-full">{failedmessage}</p>}
                    
                    </form>
                </div>
            </div>

            <div className="md:flex md:justify-between mt-[60px]">
                <div className="w-full md:w-[33%] pr-5">
                    <div className="flex items-center ">
                        <div className="bg-[#f8f8f8] text-[30px] bg-center w-[60px] h-[60px] text-center leading-[60px] mr-[20px] text-primary flex justify-center items-center">
                        <svg className='w-[20px] h-[20px]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" fill="rgb(67 84 164)"/></svg>
                        </div>
                        <div>
                            <h4 className="font-bold">Email Adress</h4>
                            <p className=""><a href="mailto:enquiry@adkinstruments.in">enquiry@adkinstruments.in</a></p>
                        </div>
                    </div>

                    <div className="flex items-center py-6">
                        <div className="bg-[#f8f8f8] text-[30px] bg-center w-[60px] h-[60px] text-center leading-[60px] mr-[20px] text-primary flex items-center justify-center">
                        <svg className='w-[20px] h-[20px]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" fill="rgb(67 84 164)"/></svg>
                        </div>
                        <div>
                            <h4 className="font-bold">Phone Number</h4>
                            <p className=""><a href="tel:+91-9310246652">+91-9310246652
                            </a></p>
                        </div>
                    </div>

                    <div className="flex items-center">
                        <div className="bg-[#f8f8f8] text-[30px] bg-center w-[60px] h-[60px] text-center leading-[60px] mr-[20px] text-primary flex items-center justify-center">
                        <svg className='w-[22px] h-[22px]'  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M16 144a144 144 0 1 1 288 0A144 144 0 1 1 16 144zM160 80c8.8 0 16-7.2 16-16s-7.2-16-16-16c-53 0-96 43-96 96c0 8.8 7.2 16 16 16s16-7.2 16-16c0-35.3 28.7-64 64-64zM128 480l0-162.9c10.4 1.9 21.1 2.9 32 2.9s21.6-1 32-2.9L192 480c0 17.7-14.3 32-32 32s-32-14.3-32-32z"  fill="rgb(67 84 164)"/></svg>
                        
                        </div>
                        <div>
                            <h4 className="font-bold">
                                Our Location</h4>
                            <p className="">121/C1, Gk1,Indirapuram, Ghaziabad, UP, INDIA, 201014</p>
                        </div>
                    </div>

                </div>

                <div className="h-[400px] w-full md:w-[66%]  mt-8 md:mt-0">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14006.272247653491!2d77.351854!3d28.642705!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfb44e639e945%3A0xaaf4ac6c9cbc1636!2sADK%20Instruments!5e0!3m2!1sen!2sin!4v1716662932134!5m2!1sen!2sin" width="100%" height="100%" loading="lazy"></iframe>

                </div>
            </div>


            

            <div className="mt-8 md:mt-10">
                <h2 className="text-center font-bold text-lg mb-8">OUR OTHER BRANCHES</h2>
                <div className="flex justify-center flex-wrap">                    
                <div className="flex items-center justify-center flex-wrap md:w-[40%] w-full text-center">
                    <div className=" text-[30px] bg-center w-full h-[60px] text-center leading-[60px] mr-[20px] text-primary flex items-center justify-center">
                    <svg className='w-[20px] h-[20px]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z" fill="rgb(67 84 164)"/></svg>
                    </div>
                    <div>
                        <p className="">121/C1, Gk1,Indirapuram, Ghaziabad, UP, INDIA, 201014</p>
                    </div>
                </div>
                <div className="md:mt-0 mt-5 flex items-center justify-center flex-wrap md:w-[40%] w-full text-center">
                    <div className="text-[30px] bg-center w-full h-[60px] text-center leading-[60px] mr-[20px] text-primary flex justify-center items-center">
                    <svg className='w-[20px] h-[20px]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"  fill="rgb(67 84 164)"/></svg>
                    </div>
                    <div>
                        <p className="">#A4 street no. 8 Ashish Nagar west Vinayak public school Risali Bhilai Nagar Distt. Durg 490006</p>
                    </div>
                </div>
            </div>
            </div>
            </div>
    </>
)
};
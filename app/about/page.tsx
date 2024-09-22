import Image from 'next/image';

const About = () => {
    return (
        <div className="about_main">
            <div className="about_banner">
                <Image src="/img/high-Values1380x355___media_library_original_1380_355.png" width="1024" height="100" className="w-full" alt="About banner"/>
            </div>
            <div className="container">
                <div className="about_text md:mt-10 mt-5">
                <p className=' text-[18px] leading-7 mb-5'>ADK Instruments has a long story to tell all its patrons! The company was founded, for the sole mission to simplify all the retail needs of industrial enterprises. With the depleting energy resources and focus on sustainability and renewable energy, it’s no secret that the needs of the world are changing.</p>
                <p className=' text-[18px] leading-7 mb-5'>They say, change is the only constant, and in our bid to be the innovators and drivers of change, we have introduced a slew of products, to help solve the needs of industrial enterprises. Our products are meticulously crafted, undergo thorough testing, and are engineered with precision. Moreover, ADK Instruments is a one-stop solution to all the retail needs of all industrial enterprises.</p>
                <p className=' text-[18px] leading-7 mb-5'>Our desire to work runs deep in our veins, and we craft everything with a fresh approach, energy and enthusiasm. Apart from this, knowledge sharing and learning never stops, we are always willing to learn from our patrons, and we are all ears to understanding and learning about their needs.</p>
                <p className=' text-[18px] leading-7 mb-5'>Our range of products can be used in various sectors, like meteorology, water quality testing, metric measurements and outdoor activities.</p>
                <p className=' text-[18px] leading-7 mb-5'>Our focus has always been to set new standards in customer satisfaction, and we live by that vision every single day! And with this vision, our goal is to set precedents in innovation, quality, and customer satisfaction. And we won’t stop, until we achieve that goal.</p>
                <p className=' text-[18px] leading-7'>As a token of gratitude, we would like to thank all our patrons, without who, we would not have imagined where we are. And we pledge to stand united with everybody, who want to be innovators, and work towards a future that’s not just sustainable, but also bright.</p>
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
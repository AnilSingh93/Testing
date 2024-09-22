'use client';
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import Search from "@/app/search/page";



const Header = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [open, setOpen] = useState(false);
    const [overflow, setOverflow] = useState(false);
    const [opennav, setOpennav] = useState(false);
    const [search, setSearch] = useState("");
    const [filterdata, setFilterdata] = useState([search]);
    console.log("data h", data);
    console.log("open", open);



    const openNav = () => {
        setOpennav(!opennav)
        setOverflow(!overflow)
        document.body.classList.toggle("menu_overflow");
    }
    
    return (
        <header className="md:sticky md:top-0 md:w-full z-[1] md:bg-white shadow">
            <section id="section-announcement" data-section-id="announcement" data-section-type="announcement-bar" className='bg-primary text-center text-white font-bold md:py-[7px] py-3'>
                <div className="AnnouncementBar container">
                    <div className="AnnouncementBar__Wrapper flex md:justify-between justify-center items-center flex-wrap">
                        <p className="hidden md:block text-[14px] AnnouncementBar__Content Heading">Welcome to Our store ADK Instruments</p>
                        <ul className="flex items-center md:mt-0 mt-3">
                            <li className="mr-5">
                                <a href="tel:+91-9310246652" className="flex-wrap text-[16px] flex items-center text-[14px] justify-center">
                                    <svg className='w-[12px] h-[12px] mr-2' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" fill="#fff" /></svg>
                                    +91-9310246652
                                </a>
                            </li>
                            <li>
                                <a href="mailto:enquiry@adkinstruments.in" className="flex-wrap justify-center flex items-center text-[14px]">
                                    <svg className='w-[20px] h-[20px] mr-2' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" fill="#fff" /></svg>
                                    enquiry@adkinstruments.in
                                </a>

                            </li>
                        </ul>
                    </div>
                </div>
            </section>
            <div className="headerWrapper relative">
                <div className="container">
                    <div className="navigation flex items-center justify-between py-[20px]">
                        <div className="mob_hamburger md:hidden max-w-[20px] w-full" onClick={() => openNav()}>
                            <svg className="Icon Icon--nav" role="presentation" viewBox="0 0 20 14">
                                <path d="M0 14v-1h20v1H0zm0-7.5h20v1H0v-1zM0 0h20v1H0V0z" fill="currentColor"></path>
                            </svg>
                        </div>

                        <div className={opennav ? 'mob_menus md:hidden w-full bg-white min-h-[100vh] z-[1] left-0 top-0 absolute px-5 z-1 w-11/12 pt-[20px] ease-linear duration-500 ' : 'mob_menus md:hidden w-full bg-white min-h-[100vh] z-[1] left-[-100%] top-0 absolute px-5 z-1 w-11/12 pt-[20px] ease-linear duration-500'}>
                            <span className="close absolute right-8 z-[1]" onClick={() => openNav()}><svg viewBox="0 0 10 10" className="w-2.5 h-2.5 overflow-visible"><path d="M0 0L10 10M10 0L0 10" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path></svg></span>
                            <ul className="pl-0 mt-[25px]">
                                {/* {
                                                         data.slice(0,15).map((list:any) => {
                                                            return(
                                                                <Link className="text-[16px] font-bold pb-[15px]" href={list.slug} key={list.id}>
                                                                <li >{list.name}</li>
                                                                </Link>
                                                            )
                                                        })
                                                    }
                              */}

                                <li>
                                    <Link className="text-[16px] font-bold pb-28" href="/">
                                        Home
                                    </Link>
                                </li>


                                <li>
                                    <Link className="text-[16px] font-bold pb-[15px]" href="/categories">
                                        Categories
                                    </Link>
                                </li>

                                <li>
                                    <Link className="text-[16px] font-bold pb-[15px]" href="/about">
                                        About us
                                    </Link>
                                </li>
                                <li>
                                    <Link className="text-[16px] font-bold pb-[15px]" href="/contact-us">
                                        Contact us
                                    </Link>
                                </li>

                                <li>
                                    <Link className="text-[16px] font-bold pb-[15px]" href="/opportunities">
                                        Opportunities
                                    </Link>
                                </li>

                                <li>
                                    <Link className="text-[16px] font-bold pb-[15px] sho_now" href="https://shop.adkinstruments.in/">
                                        Shop Now
                                    </Link>
                                </li>
                            </ul>


                        </div>

                        <div className="header_logo">
                            <Link href="/" className="md:max-w-[220px] max-w-[150px] inline-block w-full"><img src="img/logo-tm.png" /></Link>
                        </div>
                        <div className="main_menu hidden md:block">
                            <nav className="Header__MainNav hidden-pocket hidden-lap" aria-label="Main navigation">
                                <ul className="flex items-center">
                                    <li className="relative mx-4 HorizontalList__Item w-auto"><Link href="/" className="">Home</Link></li>
                                    <li className="group mx-4 HorizontalList__Item w-auto"><Link href="/categories" className="">Categories</Link>

                                        <div className="group-hover:opacity:100 group-hover:visible w-full bg-white absolute top-[100%] left-0 z-10 transition-all ease-in-out duration-300 hidden opacity-0">
                                            <div className="flex w-[1200px] p-8 mx-auto ">
                                                <ul className="products columns-6 gap-8">
                                                    {
                                                        data.map((list: any) => {
                                                            return (
                                                                <Link className="" href={list.slug} key={list.id}>
                                                                    <li>{list.name}</li>
                                                                </Link>
                                                            )
                                                        })
                                                    }

                                                </ul>
                                            </div>
                                        </div>

                                    </li>
                                    <li className="relative mx-4 HorizontalList__Item w-auto"><Link href="/about" className="">About us</Link></li>
                                    <li className="relative mx-4 HorizontalList__Item w-auto"><Link href="/contact-us" className="">Contact us</Link></li>
                                    <li className="relative mx-4 HorizontalList__Item w-auto"><Link href="/opportunities" className="">Opportunities</Link></li>
                                    <li className="relative mx-4 HorizontalList__Item w-auto"><Link href="https://shop.adkinstruments.in/" className="sho_now">Shop Now</Link></li>
                                </ul>
                            </nav>
                        </div>
                        <div className="right_menu flex items-center justify-between md:min-w-[60px] min-w-[50px]">

                            <Link href="/login" className="hidden md:block max-w-[20px] inline-block w-full"><svg className="Icon Icon--account" role="presentation" viewBox="0 0 20 20">
                                <g transform="translate(1 1)" stroke="currentColor" strokeWidth="2" fill="none" fillRule="evenodd" strokeLinecap="square">
                                    <path d="M0 18c0-4.5188182 3.663-8.18181818 8.18181818-8.18181818h1.63636364C14.337 9.81818182 18 13.4811818 18 18"></path>
                                    <circle cx="9" cy="4.90909091" r="4.90909091"></circle>
                                </g>
                            </svg></Link>
                            <button onClick={(e) => setOpen(true)} className="max-w-[20px] inline-block w-full"><svg className="Icon Icon--search-desktop" role="presentation" viewBox="0 0 21 21">
                                <g transform="translate(1 1)" stroke="currentColor" strokeWidth="2" fill="none" fillRule="evenodd" strokeLinecap="square">
                                    <path d="M18 18l-5.7096-5.7096"></path>
                                    <circle cx="7.2" cy="7.2" r="7.2"></circle>
                                </g>
                            </svg>

                                <div className={open ? 'openSearchbar search_icon absolute left-0 w-full bg-white translate-y-[35px] py-[25px] border-t-2 border-color-[#9a9a9a54] ] z-[1] ease-linear' :
                                    'closeSearchbar search_icon absolute left-0 w-full bg-white translate-y-[-1000%] py-[25px] border-t-2 border-color-[#9a9a9a54] z-[-1] ease-linear'}>

                                    <div className="container relative">
                                        <span className="absolute top-0 left-auto max-w-[20px] w-full"><svg className="" role="presentation" viewBox="0 0 21 21"><g transform="translate(1 1)" stroke="currentColor" strokeWidth="2" fill="none" fillRule="evenodd" strokeLinecap="square"><path d="M18 18l-5.7096-5.7096"></path><circle cx="7.2" cy="7.2" r="7.2"></circle></g></svg>
                                        </span>

                                        <input onChange={event => { setSearch(event.target.value) }}
                                            type="text" placeholder="Search..." className="w-full pl-[30px] focus-visible:outline-none" name={search}
                                        />

                                        {/* <Search /> */}
                                        <span onClick={()=> setOpen(false)} className="absolute left-auto max-w-[15px] w-full z-[1111]">
                                            <svg className="Icon Icon--close" role="presentation" viewBox="0 0 16 14">
                                                <path d="M15 0L1 14m14 0L1 0" stroke="currentColor" fill="none" fillRule="evenodd"></path>
                                            </svg></span>
                                    </div>
                                </div>
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;
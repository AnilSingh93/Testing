'use client';
import Image from "next/image";
import Link from "next/link";
import Manufactorpartner from "./manufactor-partner";
import { Categories, Links } from './footer-links';

const Footer = () => {

    return (
        <>
            <Manufactorpartner />
            <footer className="border-t-1 pt-5 bg-secondary">
                <div className="footer py-[50px]">
                    <div className="container flex justify-between flex-wrap">
                        <div className="footer_logo self-center md:mx-[unset] mx-auto md:mb-0 mb-10">
                            <Link className="relative" href="/">
                                <Image src="/img/logo-tm-white.png" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" width={250} height={500} alt="footer logo" />
                            </Link>
                        </div>
                        <div className="footer_center md:order-2 order-3 w-full md:w-auto">
                            <ul className="">

                                {
                                    Categories.map((data, ind) => {
                                        return (
                                            <li className=" text-[14px] pb-5 text-white" key={`footer==${ind + 2}`}><Link href={data.url}>{data.title}</Link></li>
                                        )
                                    })
                                }
                            </ul>

                        </div>
                        <div className="footer_right md:order-3 order-4">
                            <ul className="">

                                {
                                    Links.map((data, ind) => {
                                        return (
                                            <li className="text-[14px] pb-5 text-white" key={`footer-sec==${ind + 2}`}><Link href={data.url}>{data.title}</Link></li>
                                        )
                                    })
                                }
                            </ul>
                        </div>

                        <div className="footer_subscribe md:order-4 order-1 md:text-left">
                            <h2 className="text-[24px] text-white ">Follow Us</h2>
                            {/* <p className="text-[12px]">New products, sales, exclusive gifts: Sign up for updates.</p>
                            <form className="mt-2">
                                <input type="text" placeholder="Enter your email address" className="py-2 px-2 border-2  border-[#e3e3e3] " />
                                <button type="submit" className="bg-primary text-white uppercase py-2 px-2">Sign me up</button>
                            </form> */}

                            <ul className="flex flex-col items-center md:justify-start justify-center md:pt-12 pt-5 pb-5 ">
                                <li><a href="https://facebook.com/adkinstruments" className="inline-block md:mr-5 mr-5"><svg className="w-[20px] h-[20px] Icon Icon--facebook" viewBox="0 0 9 17" aria-hidden="true" data-acsb-hidden="true" data-acsb-force-hidden="true">
                                    <path d="M5.842 17V9.246h2.653l.398-3.023h-3.05v-1.93c0-.874.246-1.47 1.526-1.47H9V.118C8.718.082 7.75 0 6.623 0 4.27 0 2.66 1.408 2.66 3.994v2.23H0v3.022h2.66V17h3.182z" fill="#fff"></path>
                                </svg></a></li>
                                <li><a href="https://www.instagram.com/adkinstruments/" className="inline-block"><svg className="w-[20px] h-[20px] Icon Icon--instagram" role="presentation" viewBox="0 0 32 32" aria-hidden="true" data-acsb-hidden="true">
                                    <path d="M15.994 2.886c4.273 0 4.775.019 6.464.095 1.562.07 2.406.33 2.971.552.749.292 1.283.635 1.841 1.194s.908 1.092 1.194 1.841c.216.565.483 1.41.552 2.971.076 1.689.095 2.19.095 6.464s-.019 4.775-.095 6.464c-.07 1.562-.33 2.406-.552 2.971-.292.749-.635 1.283-1.194 1.841s-1.092.908-1.841 1.194c-.565.216-1.41.483-2.971.552-1.689.076-2.19.095-6.464.095s-4.775-.019-6.464-.095c-1.562-.07-2.406-.33-2.971-.552-.749-.292-1.283-.635-1.841-1.194s-.908-1.092-1.194-1.841c-.216-.565-.483-1.41-.552-2.971-.076-1.689-.095-2.19-.095-6.464s.019-4.775.095-6.464c.07-1.562.33-2.406.552-2.971.292-.749.635-1.283 1.194-1.841s1.092-.908 1.841-1.194c.565-.216 1.41-.483 2.971-.552 1.689-.083 2.19-.095 6.464-.095zm0-2.883c-4.343 0-4.889.019-6.597.095-1.702.076-2.864.349-3.879.743-1.054.406-1.943.959-2.832 1.848S1.251 4.473.838 5.521C.444 6.537.171 7.699.095 9.407.019 11.109 0 11.655 0 15.997s.019 4.889.095 6.597c.076 1.702.349 2.864.743 3.886.406 1.054.959 1.943 1.848 2.832s1.784 1.435 2.832 1.848c1.016.394 2.178.667 3.886.743s2.248.095 6.597.095 4.889-.019 6.597-.095c1.702-.076 2.864-.349 3.886-.743 1.054-.406 1.943-.959 2.832-1.848s1.435-1.784 1.848-2.832c.394-1.016.667-2.178.743-3.886s.095-2.248.095-6.597-.019-4.889-.095-6.597c-.076-1.702-.349-2.864-.743-3.886-.406-1.054-.959-1.943-1.848-2.832S27.532 1.247 26.484.834C25.468.44 24.306.167 22.598.091c-1.714-.07-2.26-.089-6.603-.089zm0 7.778c-4.533 0-8.216 3.676-8.216 8.216s3.683 8.216 8.216 8.216 8.216-3.683 8.216-8.216-3.683-8.216-8.216-8.216zm0 13.549c-2.946 0-5.333-2.387-5.333-5.333s2.387-5.333 5.333-5.333 5.333 2.387 5.333 5.333-2.387 5.333-5.333 5.333zM26.451 7.457c0 1.059-.858 1.917-1.917 1.917s-1.917-.858-1.917-1.917c0-1.059.858-1.917 1.917-1.917s1.917.858 1.917 1.917z" fill="#fff"></path>
                                </svg></a></li>
                                <li><a href="https://www.youtube.com/channel/UCzlhyUO7fWzfm0tqsP23meA" className="inline-block">
                                    <svg className="w-[30px] h-[30px] Icon Icon--instagram ml-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" ><path d="M 44.898438 14.5 C 44.5 12.300781 42.601563 10.699219 40.398438 10.199219 C 37.101563 9.5 31 9 24.398438 9 C 17.800781 9 11.601563 9.5 8.300781 10.199219 C 6.101563 10.699219 4.199219 12.199219 3.800781 14.5 C 3.398438 17 3 20.5 3 25 C 3 29.5 3.398438 33 3.898438 35.5 C 4.300781 37.699219 6.199219 39.300781 8.398438 39.800781 C 11.898438 40.5 17.898438 41 24.5 41 C 31.101563 41 37.101563 40.5 40.601563 39.800781 C 42.800781 39.300781 44.699219 37.800781 45.101563 35.5 C 45.5 33 46 29.398438 46.101563 25 C 45.898438 20.5 45.398438 17 44.898438 14.5 Z M 19 32 L 19 18 L 31.199219 25 Z" fill="#fff" /></svg>
                                </a></li>
                                <li><a href="https://www.linkedin.com/in/adk-instruments-10452922a" className="inline-block">
                                    <svg className="ml-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="30px" height="30px">    <path d="M24,4H6C4.895,4,4,4.895,4,6v18c0,1.105,0.895,2,2,2h18c1.105,0,2-0.895,2-2V6C26,4.895,25.105,4,24,4z M10.954,22h-2.95 v-9.492h2.95V22z M9.449,11.151c-0.951,0-1.72-0.771-1.72-1.72c0-0.949,0.77-1.719,1.72-1.719c0.948,0,1.719,0.771,1.719,1.719 C11.168,10.38,10.397,11.151,9.449,11.151z M22.004,22h-2.948v-4.616c0-1.101-0.02-2.517-1.533-2.517 c-1.535,0-1.771,1.199-1.771,2.437V22h-2.948v-9.492h2.83v1.297h0.04c0.394-0.746,1.356-1.533,2.791-1.533 c2.987,0,3.539,1.966,3.539,4.522V22z" fill="#fff" /></svg>
                                </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

            </footer>
        </>
    )
}

export default Footer;
const Login = () => {
    return (
        <>
            <div className="container md:pt-10 pt-2">
                <div className="md:w-[400px] md:block md:mx-auto w-full">
                    <div className="">
                        <h1 className="text-center md:text-[40px] text-lg font-bold">Login</h1>
                    </div>
                    <div className="contact_etails md:pt-8 pt-2">
                        <p className="text-center md:text-[16px] color-[#454545] md:leading-6 leading-4 md:mb-5 mb-2">Please enter your e-mail and password:
</p>
                        <form className="md:flex flex-wrap justify-between md-mt-0 mt-8">                            
                            <input className="text-[12px] placeholder:text-[12px] md:tex-[16px] md:placeholder:text-[14px] mb-4 border-2 border w-full border-grey p-3" type="email" placeholder="Email" />
                            <input className="text-[12px] placeholder:text-[12px] md:tex-[16px] md:placeholder:text-[14px] mb-4 border-2 border w-full border-grey p-3" type="password" placeholder="Password" />                            
                            <button className="mt-5 inline-block w-full border border-1 md:border-2 rounded-full border-black md:p-3 p-2 text-black uppercase font-bold md:text-[16px] text-[14px]">
                                Login
                            </button>
                        </form>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Login
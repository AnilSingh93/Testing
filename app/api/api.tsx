const Api = async (url:any) =>{
    const res = await fetch('url');
    if(!res.ok){
        throw new Error("Check your api")
    }
    return res.json();
}
export default Api;
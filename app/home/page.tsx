'use client'
import { useEffect } from "react"
import Banner from "./Banner"
import CollectionList from "./HomeCollection"
import Hometext from "./HomeText"
import Videos from "./Videos"
import Producttab from './product-tab'



const Home = () =>{
    return (
        <>
        <Banner />
        <Producttab />
        <CollectionList />  
        <Hometext />
        <Videos />
        </>
    )
}

export default Home
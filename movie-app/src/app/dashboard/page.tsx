"use client"

import { useEffect, useState } from "react"
import Navbar from "../components/navbar/navbar"
import SideBar from "../components/sidebar/sidebar"
import HomePage from "../components/homepage/homepage"
import { faStar, faFolder, faClock } from "@fortawesome/free-solid-svg-icons"
import UserGroup from "../components/usergroups/usergroup"
import styles from "./page.module.css"
import Movies from "../components/movies/movies"
import FavWatch from "../components/usergroups/favwatch/favwatch"


export default function Page() {
    const [selected, setSelected] = useState<string>("Home")

    // const [movies, setMovies] = useState<[]>([])

    // useEffect(() => {
    //     fetch( "http://localhost:8000/api/titles/advancedsearch", {
    //         // body: JSON.stringify(data),
    //         headers: {
    //             "Content-Type": "application/json",
    //             "Authorization": `Bearer ${localStorage.getItem("token")}`
    //         },
    //     }).then((d) => {
    //         return d.json();
    //     }).then((d) => {
    //         setMovies(d.titles)
    //         // console.log(movies);
    //     }
    //     )
    // }, [selected])

    const dashboardSections :{[Home: string]: JSX.Element, Favorites: JSX.Element, "Watch Later": JSX.Element} = {
        "Home": <UserGroup ><HomePage /></UserGroup>,
        "Favorites": 
            <UserGroup >
                <FavWatch selected={selected} title="MOVIES YOU LIKE" path="favorite"/>
            </UserGroup>,
        "Watch Later": 
            <UserGroup >
                <FavWatch selected={selected} title="MOVIES TO WATCH LATER" path="watchlater"/>
                {/* <>
                    <h1 className={styles['title']}>MOVIES</h1>
                    <Movies movies={movies}/>
                </> */}
            </UserGroup>,
    }
    const sideBarOptions = [
        {icon: faFolder, text: "Home"},
        {icon: faStar, text: "Favorites"},
        {icon: faClock, text: "Watch Later"},
    ]
    return (
        <>
            <main style={{width: "100%", position: "absolute"}}>
                <Navbar />
                <SideBar options={sideBarOptions} selected={selected} setSelected={setSelected}/>
                {dashboardSections[selected]}
            </main>
        </>
    )
}
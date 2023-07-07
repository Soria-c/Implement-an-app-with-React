"use client"
import SearchBar from "../searchbar/searchbar";
import Input from "../Input/Input";
import { useState } from "react";
import styles from "./homepage.module.css"
import Tag from "../tags/tags";
import Select from "../select/select";
import Movies from "../movies/movies";
import { useEffect } from "react";

export default function HomePage() {
    const [min, setMin] = useState<string | number>(1970)
    const [max, setMax] = useState<string | number>(2020)
    const [sort, setSort] = useState<string>("Default")
    const [search, setSearch] = useState("")
    const [selectedGenres, setSelectedGenres] = useState([{genre: "Action", selected: false}, {genre: "Drama", selected: false}, {genre: "Comedy", selected: false}, {genre: "Biography", selected: false}, {genre: "Romance", selected: false},
    {genre: "Thriller", selected: false}, {genre: "War", selected: false}, {genre: "History", selected: false}, {genre: "Sport", selected: false}, {genre: "Sci-Fi", selected: false}, {genre: "Documentary", selected: false},
    {genre: "Crime", selected: false}, {genre: "Fantasy", selected: false}])
    // let movies : {} = []
    const [movies, setMovies] = useState<[]>([])
    const params = `minYear=${min}&maxYear=${max}`
    useEffect(() => {
        fetch( `http://localhost:8000/api/titles/advancedsearch`, {
            // body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem("token")}`
            },
        }).then((d) => {
            
            
            return d.json();
        }).then((d) => {
            console.log(d);
            setMovies(d.titles)
            // console.log(movies);
        }
        )
    }, [min, max])
    
    return (
        <>
            <div className={styles['container']}>
                <div className={styles['inputs-container']}>
                    <SearchBar value={search} setValue={setSearch}/>
                    <div className={styles['inputs']}>
                        <div>
                            <Input label="Min Date:" type dark value={min} setValue={setMin} width="204px" eType="number"/>
                        </div>
                        <div>
                            <Input label="Max Date" type dark value={max} setValue={setMax} width="204px" eType="number"/>
                        </div>
                        <div>
                            <Select label="Sort:" value={sort} setValue={setSort} width="204px" options={["Default", "Latest", "Oldest", "Highest Rated", "Lowest Rated"]}/>
                        </div>
                    </div>
                </div>
                <div className={styles['tags']}>
                    {selectedGenres.map((v, i) => <Tag key={i.toString()} text={v.genre} selected={v.selected!} genres={selectedGenres} update={setSelectedGenres}/>)}
                </div>
            </div>
            <Movies movies={movies}/>
        </>
    )
}
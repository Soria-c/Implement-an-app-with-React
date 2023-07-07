import styles from "./card.module.css"
import Tag from "../tags/tags"
import { faStar, faClock } from "@fortawesome/free-solid-svg-icons"
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react"

config.autoAddCss = false

interface CardProps {
    movie?: {
        createdAt: string
        genres: string[]
        id: number
        imageurls: string[]
        imdbId: string
        imdbrating:  number
        quotes: string[]
        released: number
        reviews: string[]
        runtime:  number
        summary: string
        synopsis: string
        title: string
        trailerUrl: string[]
        type: string
        updatedAt: string
    }
}

export default function Card({movie} : CardProps) {
    const [img, setImg] = useState((movie!.imageurls.length <= 0) ? "https://cdn.download.it/ms/static/images/poster-placeholder.png" : movie!.imageurls[0])
    
    const handleFavorite = function (){
        fetch( `http://localhost:8000/api/titles/favorite/${movie!.imdbId}`, {
            method: "POST",
            // body: JSON.stringify({imdbId: movie?.imdbId}),
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem("token")}`
            },
        }).then((d) => {
            console.log(d);
        })
    }

    const handleWatchLater = function (){
        fetch( `http://localhost:8000/api/titles/watchlater/${movie!.imdbId}`, {
            method: "POST",
            // body: JSON.stringify({imdbId: movie?.imdbId}),
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem("token")}`
            },
        }).then((d) => {
            console.log(d);
        })
    }

    return (
        <div className={styles['card']}>
            <div className={styles['img']}>
                    <img src={img} alt="no image available" onError={ () => setImg("https://cdn.download.it/ms/static/images/poster-placeholder.png")} />
                <div className={styles['title']}>
                    <p>{movie?.title}</p>
                </div>
                <div className={styles['actions']}>
                    <FontAwesomeIcon icon={faClock} color="white" className={styles['icon']} onClick={handleWatchLater}/>
                    <FontAwesomeIcon icon={faStar} color="white" className={styles['icon']} onClick={handleFavorite}/>
                </div>
            </div>
            <div className={styles['description']}>
                <p >{movie?.synopsis}</p>
                <div className={styles['tags']}>
                    {movie?.genres.map((v, i) => <Tag key={i} text={v} selected/>)}
                </div>
            </div>
        </div>
    )
}
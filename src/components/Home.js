import React, {useState, useEffect} from "react";
import axios from "axios"

export default function Home(){
    const [info, setInfo] = useState([])

    useEffect(() => {
        axios.get("http://hp-api.herokuapp.com/api/characters")
        .then(res => {
            setInfo(res.data)
        })
        .catch(error => {
            console.log("error", error)
        })
    }, [info])

    return(
        <div>
            <h1>Harry Potter</h1>
            {info.map(item => (
                <div>
                    <ul>
                        <li>{item.name}</li>
                        <li>{item.species}</li>
                        <li>{item.house}</li>
                        <li>{item.dateOfBirth}</li>
                    </ul>
                    <figure>
                        <img src={item.image} alt="a" />
                    </figure>
                </div>
            ))}
        </div>
    )
}
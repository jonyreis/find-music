import React from "react";
import { Info } from './styles.js'


function List({ artist }) {
    return (
        <Info>
            <img src={artist.image[1]['#text']} alt="" />
            <ul>
                <li className="font-li">{artist.name}</li>
                <li><span className="font-listeners">{artist.listeners}</span> Ouvintes</li>
            </ul>
            <a href={artist.url}>View</a>
        </Info>
    )
}

export default List

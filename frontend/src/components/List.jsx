import React from "react";

const List = ({ item }) => (
    <li className="dev-item">
        <header>
        {/* <img src={item.image} alt={item.name}/> */}
        <div className="user-info">
            <span>{item.name}</span>
            <span>{item.listeners}</span>
        </div>
        </header>
    </li>
)

export default List
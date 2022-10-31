/* eslint-disable react/prop-types */
import React from "react";

export default function Card(props) {
    return (
    <div className="card">
        <img src={props.imageUrl} alt="" />
        <i className="fa-solid fa-location-dot"></i><span>{props.location}</span><a href={props.googleMapsUrl}>View on Google Maps</a>
        <h1>{props.title}</h1>
        <p>{props.startDate}-{props.endDate}</p>
        <p>{props.description}</p>
    </div>
    )
}
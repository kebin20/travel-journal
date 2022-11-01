/* eslint-disable react/prop-types */
import React from "react";

export default function Card(props) {
    return (
    <div className="card">
        <img className="card-img"src={props.imageUrl} alt="" />
        <div className="location">
            <i className="fa-solid fa-location-dot"></i><span className="prefecture-name">{props.location}</span><a className="location-url"href={props.googleMapsUrl}>View on Google Maps</a>
        </div>
        <div className="title">
            <h1>{props.title}</h1>
        </div>
        <div className="description">
            <p className="date">{props.startDate} - {props.endDate}</p>
            <p>{props.description}</p>
        </div>
    </div>
    )
}
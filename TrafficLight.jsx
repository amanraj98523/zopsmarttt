import React, { useState, useEffect } from "react";
import "./TrafficLight.css";

const TrafficLight = () => {
    const [color, setColor] = useState("red"); 

    useEffect(() => {
        let timer;
        if (color === "red") {
            timer = setTimeout(() => setColor("green"), 3000); 
        } else if (color === "green") {
            timer = setTimeout(() => setColor("yellow"), 2000); 
        } else if (color === "yellow") {
            timer = setTimeout(() => setColor("red"), 1000); 
        }
        return () => clearTimeout(timer); 
    }, [color]);

    return (
        <div className="traffic-light">
            <div className={`bulb ${color === "red" ? "red" : ""}`}></div>
            <div className={`bulb ${color === "yellow" ? "yellow" : ""}`}></div>
            <div className={`bulb ${color === "green" ? "green" : ""}`}></div>
        </div>
    );
};

export default TrafficLight;

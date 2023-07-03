import react, { useState} from "react";

const TrafficLight = () => {

    const [color, setColor] = useState("null")


    return (
        <div className="container text-center">

        <div className="top"></div>

        <div className="traffic-ligth">
            <div
                className={
                    color === "red" ? "red light selected" : "red light"
                }
                onClick={() => setColor("red")}></div>
            <div
                className={
                    color === "yellow"
                        ? "yellow light selected"
                        : "yellow light"
                }
                onClick={() => setColor("yellow")}></div>
            <div
                className={
                    color === "green"
                        ? "green light selected"
                        : "green light"
                }
                onClick={() => setColor("green")}></div>
            </div>
        </div>
    )
}
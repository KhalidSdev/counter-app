import React from "react";
import Digit from "./0.svg";

function Main () {
    return (
        <div>
        <div className = "MainWindow">
            <img src ={Digit} alt ="dig" />
        </div>
        <div className="button_list">
            <div className="btn1">
                Увеличить
            </div>
            <div className="btn2">
                Уменьшить
            </div>
            <div className="btn3">
                Сбросить
            </div>
        </div>
        </div>
    )
}

export default Main
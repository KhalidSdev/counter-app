import React from "react";
import Logo2 from "./logo2.svg";

function Footer () {
    return (
        <div className="foot">
           <div className="logo_foot">
                <img src ={Logo2} alt ="log2" />
            </div> 
            <div className="info_foot">
                <div>
                    Партнерам
                </div>
                <div>
                    Разработчикам
                </div>
                <div>
                    Вакансии
                </div>
            </div> 
            <div className="copyright">
            ООО “интукод”, 2020г.
            </div> 
        </div>
    )
}

export default Footer
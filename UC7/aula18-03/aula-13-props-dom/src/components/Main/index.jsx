import React from "react";
import Band from "../Band/index";
import Style from "./Main.module.css"
import bandas from "../../data/bancoBandas";




function Main(){
    return(
         <main className={Style.Main}>
            {
                bandas.map((banda, index) => (
                    <section>
                        <Band key={index} {...banda} />
                    </section>
                ))
            }
        </main>
    )
}

export default Main;
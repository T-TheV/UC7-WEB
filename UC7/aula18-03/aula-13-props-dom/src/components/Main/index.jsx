import React from "react";
import Band from "../Band/index";
import Style from "./Main.module.css"
import bandas from "../../data/bancoBandas";
import { Link } from "react-router-dom";




function Main() {
    return (
        <main className={Style.Main}>
            {
                bandas.map((banda, index) => (
                    <section>
                        <Link key={index} to={`/band/${banda.id}`}>
                            <Band key={index} {...banda} />
                        </Link>

                    </section>
                ))
            }
        </main>
    )
}

export default Main;
import React from "react";
import { useParams } from "react-router-dom";
import bandas from "../../data/bancoBandas";
import Band from "../../components/Band/index"
import { Link } from "react-router-dom";
import Header from "../../components/Header";
import Aside from "../../components/Aside";
import Footer from "../../components/Footer";
import styles from './BandDetalhes.module.css';

function BandDetalhes() {
    const { id } = useParams();
    const band = bandas.find((b) => b.id === parseInt(id));

    if (!band)
        return (
    <>
            <div className={styles.container}>

                <Header />
                    <h2>Banda não encontrada</h2>
                    <div><Link to={`/`}>
                        <button>Voltar</button></Link>
                        </div>
                <Aside />
                <Footer />
                </div>
                </>
        );


    return (
        <div className={styles.container}>

        <Header />

                <Band {...band} />
                <Link to={`/`}>
                    <button>Voltar</button></Link>
            <Aside />
                <Footer />
                </div>
    );
}

export default BandDetalhes;
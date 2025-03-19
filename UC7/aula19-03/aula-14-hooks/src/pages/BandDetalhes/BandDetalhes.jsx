import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import bandas from "../../data/bancoBandas";
import Band from "../../components/Band";
import Header from "../../components/Header";
import Aside from "../../components/Aside";
import Footer from "../../components/Footer";
import styles from './BandDetalhes.module.css';

function BandDetalhes() {
    const { id } = useParams();
    const band = bandas.find((b) => b.id === parseInt(id));
    const [curiosidade] = useState(() => {
        const randomIndex = Math.floor(Math.random() * band.curiosidades.length);
        return band.curiosidades[randomIndex];
      });
      

    if (!band)
        return (
            <div className={styles.container}>
                <Header />
                <h2>Banda não encontrada</h2>
                <div>
                    <Link to={`/`}>
                        <button>Voltar</button>
                    </Link>
                </div>
                <Aside />
                <Footer />
            </div>
        );

    return (
        <div className={styles.container}>
            <Header />
            <Band {...band} />
            <div className="curiosidade">
                <h2>Curiosidade</h2>
                <p>{curiosidade}</p>
            </div>
            <Link to={`/`}>
                <button>Voltar</button>
            </Link>
            <Aside />
            <Footer />
        </div>
    );
}

export default BandDetalhes;

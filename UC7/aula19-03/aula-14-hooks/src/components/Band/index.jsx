import React, { useState } from "react";
import Style from "./Band.module.css";

function Band({ imagem, nome, descricao }) {
    const [like, setLike] = useState(0);
    const [liked, setLiked] = useState(false);

    const handleLike = () => {
        if (liked) {
            setLike(like - 1);
        } else {
            setLike(like + 1);
        }
        setLiked(!liked);
    };

    return (
        <section className={Style.Band}>
            <div className="Band">
                <img src={imagem} alt={nome}></img>
                <div className="Bandinfo">
                    <h2>{nome}</h2>
                    <p>{descricao}</p>
                </div>
                <button onClick={handleLike}>
                    {liked ? "Descurtir 👍" : "Curtir 👍"}
                </button>
                <p>{like} curtidas</p>
            </div>
        </section>
    );
}

export default Band;
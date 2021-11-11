import React from 'react'

import './card.styles.css'

export const Card = (props) => (
    <div className="card-container">
        <img src={`https://robohash.org/${props.monster.organisasjonsnummer}?set=set3&size=180x180`} alt="monster" />
        <h1>{props.monster.navn}</h1>
        <p>Poststed: {props.monster.forretningsadresse.poststed}</p>
        <p>Orgaisasjonsform: {props.monster.organisasjonsform.kode}</p>
        {/* {console.log(props.monster)} */}
    </div>
)
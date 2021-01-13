import React from 'react';

export const PokeView = (props) => {
    const {pokeman} = props;

    console.log("pokemon: " + JSON.stringify(pokeman));

    // v1 using named function, and pass function into map()
    const renderPokeman = (pokeman, index) => (
        <p key={index}>
            <a href={pokeman.url} target="blank">
                {pokeman.name}
            </a>
        </p>
    );

    return (
        pokeman.map(renderPokeman)
    );

    // v2 with lambda/anonymous function
//     return (
//         pokeman.map((name, index) => (
//             <p key={index}>{name}</p>
//         ))
//     );
}

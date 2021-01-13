
export const PokemanButton = (props) => {
    const {setPokeman} = props;

    const fetchAndSetPokeman = (event) => {
        //alert(event.target.innerHTML); // alerts "catch pokemon"
        //alert(event.target.value); // more useful for inputs, it will alert the "value" property/attribute if exists.

        // google chrome plugin that will render pretty json
        // https://pokeapi.co/api/v2/pokemon?limit=1
        // https://pokeapi.co/api/v2/pokemon?limit=100
        // https://pokeapi.co/api/v2/pokemon?limit=1200 // there are 1118 pokeman, fetch them all 
        // eventually we can page through pokeman, say, 20 at a time
        fetch("https://pokeapi.co/api/v2/pokemon?limit=1200")
            .then(response => {
                return response.json();

            }).then(pokemanJson => {
                console.log(JSON.stringify(pokemanJson));
                setPokeman(pokemanJson.results); // results is an array

            }).catch(error => {
                console.log(JSON.stringify(error));
            });
    };

    return (
        <button onClick={fetchAndSetPokeman}>catch pokeman</button>
    );
};

// fetch("https://pokeapi.co/api/v2/pokemon")
//     .then(response => {
//         return response.json();

//     }).then(response => {
//         console.log(response);
//     }).catch(err => {
//         console.log(err);
//     });


$(document).ready(function() {
    //console.log('ready');

    $('form').on('submit', function(e) {
        e.preventDefault();

        var pokeSearch = $('.poke-input').val();
        var pokeURL = `https://pokeapi.co/api/v2/pokemon/${pokeSearch}/`;

        $.ajax({
            method: 'GET',
            url: pokeURL,
            success: onSuccess,
            error: onError
        });

        function onSuccess (response) {
            console.log(response);
            $('.poke-result').empty();
            
            pokeName = `<p>${response.name}</p>`;
            $('.poke-result').append(pokeName);

            pokePic = `<img src="${response.sprites.front_default}">`;
            $('.poke-result').append(pokePic);
        }

        function onError() {
            $(`.poke-result`).empty();
            invalidMessage = `<p>No such Pokemon exists! Did you check your spelling?</p>`;
            $('.poke-result').append(invalidMessage);
        }
    });

    $('.gen').on('click', function(){
        //console.log("check");
        var pokeClick = $('.gen').val();
        //console.log(pokeClick);
        var genUrl = `https://pokeapi.co/api/v2/generation/${pokeClick}/`;

        $.ajax({
            method: 'GET',
            url: genUrl,
            success: onSuccess,
            error: onError
        });

        function onSuccess(response) {
            console.log(response);
            $('.poke-list').empty();
            var pokeSpecies = `<li>${response.pokemon_species}</li>`;
            console.log(pokeSpecies);

        }

        function onError(e1,e2,e3) {
            console.log(e2);
        }
    });
})
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
            error: onerror
        });

        function onSuccess (response) {
            //console.log(response);
            $('.poke-result').empty();
            
            pokeName = `<p>${response.name}</p>`
            $('.poke-result').append(pokeName);
            
            


            
        }
    });
})
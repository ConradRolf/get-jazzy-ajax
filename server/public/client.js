$(document).ready(onReady);

function onReady() {
    // hey jquery run the AJAX function
    $.ajax({
        // getting the info from the server
        type: 'GET',
        url: '/artist'
        // after the AJAX function run the response from AJAX
    }).then(function (response) {
        // going through the array
        for (let i = 0; i < response.length; i++) {
            let artist = response[i];
            // appending a new table row onto the DoM with array values as data sets
            $('#artistTableBody').append(`
                <tr>
                    <td>${artist.name}</td>
                    <td>${artist.born}</td>
                    <td>${artist.died}</td>
                </tr>
            `);
        }
    });

    // TODO Add ajax request for /songs and display on DOM

    $.ajax({
        type: 'GET',
        url: '/songs'
    }).then(function(response){
        for (let song of response){
            $('#songTableBody').append(`
                <tr>
                    <td>${song.title}</td>
                    <td>${song.artist}</td>
                </tr>
            `)
        }
    })
}

function renderSongs(response){
    for (let song of response){
        $('#songTableBody').append(`
                <tr>
                    <td>${song.title}</td>
                    <td>${song.artist}</td>
                </tr>
        `)
    }
}

function renderArtist(response){
    for (let artist of response){
        $('#artistTableBody').append(`
                <tr>
                    <td>${artist.name}</td>
                    <td>${artist.born}</td>
                    <td>${artist.died}</td>
                </tr>
        `)
    }
}

interface Album {
    artist: string;
    title: string;
    tracks?: number;
}

function make_album(artist: string, title: string, tracks?: number): Album {
    let album: Album = {
        artist: artist,
        title: title
    };

    if (tracks !== undefined) {
        album.tracks = tracks;
    }

    return album;
}

// Creating albums
let album1 = make_album("Artist1", "Album One", 10);
let album2 = make_album("Artist2", "Album Two");
let album3 = make_album("Artist3", "Album Three", 12);

// Printing the album information
console.log(album1);
console.log(album2);
console.log(album3);

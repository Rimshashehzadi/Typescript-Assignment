function make_album(artist, title, tracks) {
    var album = {
        artist: artist,
        title: title
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
// Creating albums
var album1 = make_album("Artist1", "Album One", 10);
var album2 = make_album("Artist2", "Album Two");
var album3 = make_album("Artist3", "Album Three", 12);
// Printing the album information
console.log(album1);
console.log(album2);
console.log(album3);

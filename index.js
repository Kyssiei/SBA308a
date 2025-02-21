import {artistsUploads } from "./api.js";

async function testArtistUploads() {
    const uploads = await artistsUploads("BurnaBoy");
    console.log("Artist Uploads:", uploads);
}
testArtistUploads();




// function displayArtists(artists) {
//     const artistContainer = document.getElementById("Artists");
//     artistContainer.innerHTML = "";

//     artists.forEach(artist => {
//         const img = document.createElement("img");
//         img.src = artist.img
//     });
// }
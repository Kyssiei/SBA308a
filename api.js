//Todo: first create a variable for the base api link 
const AudiomackApi = "https://api.audiomack.com/v1"

//Todo: fetch trending songs from the audiomack api
// export async function fetchtrendingSongs() {
//     try {
//         const response = await fetch (`${AudiomackApi}/music/trending`)
//         if (!response.ok) throw new Error("Couldn't find trending songs.");
//         const data = await response.json() 
//         return data.results;

//     } catch (error) {
//         console.error("Error Finding Song", error);
//         return[];
//     }
// };

// export async function musicSearch(query) {
//     try {
//         const response = await fetch(`${AudiomackApi}/search`);
//         if (!response.ok) 
//             throw new Error("Couldnt find song");
//             const data = await response.json();
//             return data.results;
        
//     } catch (error) {
//         console.error("Couldnt find song", error);
//         return[];
//     }
// };


export async function artistsUploads(artistSlug) {
    try {
        const response = await fetch (`${AudiomackApi}/artist/${artistSlug}/uploads`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            }
        });
        if(!response.ok)
            throw new Error("Werent able to find artist");
            const data = await response.json();
            return data.results;
        
    } catch (error) {
        console.error("couldnt find artist", error);
        return[];
    }
}
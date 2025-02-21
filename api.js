//Todo: first create a variable fpr the base api link 
const AudiomackApi = "https://api.audiomack.com/v1"

//Todo: fetch trending songs from the audiomack api
export async function fetchtrendingSongs() {
    try {
        const response = await fetch (`${AudiomackApi}/v1/music/trending`)
        if (!response.ok) throw new Error("Couldn't find trending songs.");
        const data = await response.json() 
        return data.results;

    } catch (error) {
        console.error("Error Finding Song");
        return[];
    }
};

export async function musicSearch() {
    try {
        const musicSearch = await fetch(`${AudiomackApi}/search`);
        if (!musicSearch.ok) 
            throw new Error("Couldnt find song");
            const data1 = await response.json();
            return data1.results;
        
    } catch (error) {
        console.error("Couldnt find song");
        return[];
    }
};


export async function artistsUploads() {
    try {
        const artistsUploads = await fetch (`${AudiomackApi}/v1/artist/(artist slug)/uploads`);
        if(!artistsUploads.ok)
            throw new Error("Werent able to find artist");
            const data2 = await response.json();
            return data2.results;
        
    } catch (error) {
        console.error("couldnt find artist");
        return[];
    }
}
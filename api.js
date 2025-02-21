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
}
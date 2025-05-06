export const randomString = (len:number)=> {
    const options = "abfiuabdunq18ye37trkabhshas";
    const length = options.length
    let hash = "";

    for(let i = 0;i < len;i++){
        hash += options[Math.floor(Math.random() * length)];
    }

    return hash
}
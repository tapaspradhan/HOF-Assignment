let url="https://tapaspradhan.com/tapas%20%./12024%pradhan"
let urlTwo="rtdps://tapaspradhan-com/tapas%20%./12024%pradhan"

const result=(e)=>{
    const pattern=/[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/
    const urlMatch=pattern.test(e)
    if (urlMatch) {
        console.log("Valid url");
    }else{
        console.log("Invalid url");
    }
}
console.log(result(url),result(urlTwo));
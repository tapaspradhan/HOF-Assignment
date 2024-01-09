let linkedin="https://www.linkedin.com/in/tapas--pradhan/"


let result=(e)=>{
    const regexPattern=/^https:\/\/www.linkedin.com\/in\/[a-zA-Z0-9_\-]{5,30}[a-zA-Z0-9]$/gi;

    const matchLinkedin=regexPattern.test(e)

    if (matchLinkedin) {
        console.log("Valid url");
    }else{
        console.log("Invalid url");
    }
}

console.log(result(linkedin));
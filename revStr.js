let arrOne=["abc","def","ghi","jkl","mno","pqr","stu","vwx","yz"]

const arrTwo=(e)=>{
    const arrThree=arrOne.map((e,i,a)=>{
        return a[arrOne.length-1-i]
    })
    return arrThree
}
// console.log(arrTwo());

setTimeout(() => {
    console.log(arrTwo());
}, 2000);
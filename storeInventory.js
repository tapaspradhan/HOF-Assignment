const inrValue=80

const items=[
    {
        item:"toy1",
        price: 10
    },
    {
        item:"toy2",
        price: 20
    },
    {
        item:"toy3",
        price: 30
    },
    {
        item:"toy4",
        price: 40
    }
]
const convertedPrice=items.map((e)=>{
    return {item:e.item,price:e.price*inrValue}
    
})
// convertedPrice()
console.log(convertedPrice);

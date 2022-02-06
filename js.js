// Problem - 1 

function anaToVori(ana){
    if(typeof ana != "number"){
        return "Please Input an number";
    }
    let vori = ana / 16;
    return vori;
}

 let anaToVoris = anaToVori(20);;
//  console.log(anaToVoris)

 // Problem  - 2 

 function pandaCost(singaraQuantity,somosaQuantity,jelabiQuantity){

    if(typeof singaraQuantity != "number" || typeof somosaQuantity != "number"  || typeof jelabiQuantity != "number"){
        return "3 Inputs should be number";
    }
    else{
     let singaraPrice = 7;
     let somosaPrice = 10;
     let jelabiPrice = 15;

     let singaraTotalPrice = singaraQuantity * singaraPrice;
     let somosaTotalPrice = somosaQuantity * somosaPrice;
     let jelabiTotalPrice = jelabiQuantity * jelabiPrice;

    let foodTotalPrice = singaraTotalPrice + somosaTotalPrice + jelabiTotalPrice;

    return foodTotalPrice;
    }
 }

 let foodPrice = pandaCost(2,2,2);
//  console.log(foodPrice)

// Problem - 3

 function picnicBudget(person){
    const firstHundredCost = 5000;
    const secondHundredCost = 4000;
    const restOfThePersonCost = 3000;


    if(typeof person != "number"){
        return "Please Write a Number";
    }else if(person <= 0){
        return "Please write a Positive number";

    }
    if(person <= 100){
        let firstTotalCosting = firstHundredCost * person;
        return firstTotalCosting;
        
    }
    else if(person > 100 && person <= 200){
        let secondTotal = (person - 100) * secondHundredCost;
        let secondTotalCosting = (firstHundredCost * 100) + secondTotal;
        return secondTotalCosting;
    }
    else if(person > 200){
        let restOfTheCosting = (person - 200) * restOfThePersonCost;
        let thirdTotal =  (firstHundredCost * 100) + (secondHundredCost * 100) + restOfTheCosting;
        return thirdTotal;
    }
 
 }

 const totalPersonCosting = picnicBudget(80);
//  console.log(totalPersonCosting)


// Problem - 4 

function oddFriend(friends){

    if(!Array.isArray(friends)){
        return "Please Write your friends name in Array!";
    } 
    else{
    for(const friend of friends){
        let checks = friend.length;
       if(checks % 2 == 1){
           checks =  friend; 
             return checks;
       }
    } 
}  
}

const friends = ["Rahul Sahriars","Kobir Hasans","Ridoy","Fardin Hasan","Nasir udding","HRS"];
const friendsName = oddFriend(friends);
// console.log(friendsName)



const products = [
    {name:"Samsung",price:233353,model:"Gtx"},
    {name:"Huawai",price:54575,model:"trc"},
    {name:"Oppo",price:875412,model:"rtx"},
    {name:"Iphone laptop",price:745150,model:"ftx"},
    {name:"Xiomi",price:542451,model:"ttx"},
    {name:"Samsung",price:457752,model:"etx"},
]

function productSearch(products,search){
    for(const product of products){
        if(product.name.includes(search)){
            console.log(product)
        }
}
}

const productSearches = productSearch(products,"laptop");
console.log(productSearches)









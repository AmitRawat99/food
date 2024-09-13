
function col(){
   let msg = alert("When Are Comes To Special Offerce Than Will Send You Massage")
}
function order(){
    let a = alert("your order is succsesful And , (Your Order Is Delivery 30 Min Latter)")
}
function info(){
    let c = alert("Thare Are Something Problem")
}

 var Bigimg = document.getElementById("Bigimg");
 var SmallImg = document.getElementsByClassName("Small_img")
 SmallImg[0].onclick = function(){
   Bigimg.src = SmallImg[0].src;
 }
 SmallImg[1].onclick = function(){
     Bigimg.src = SmallImg[1].src;
 }
 SmallImg[2].onclick = function(){
    Bigimg.src = SmallImg[2].src;
 }
 SmallImg[3].onclick = function(){
     Bigimg.src = SmallImg[3].src;
 }
 SmallImg[3].onclick = function(){
    Bigimg.src = SmallImg[3].src;
}
SmallImg[4].onclick = function(){
    Bigimg.src = SmallImg[4].src;
}
SmallImg[5].onclick = function(){
    Bigimg.src = SmallImg[5].src;
}
SmallImg[6].onclick = function(){
    Bigimg.src = SmallImg[6].src;
}
SmallImg[7].onclick = function(){
    Bigimg.src = SmallImg[7].src;
}
SmallImg[8].onclick = function(){
    Bigimg.src = SmallImg[8].src;
}
SmallImg[9].onclick = function(){
    Bigimg.src = SmallImg[9].src;
}
SmallImg[10].onclick = function(){
    Bigimg.src = SmallImg[10].src;
}
SmallImg[11].onclick = function(){
    Bigimg.src = SmallImg[11].src;
}
SmallImg[12].onclick = function(){
    Bigimg.src = SmallImg[12].src;
}
SmallImg[13].onclick = function(){
    Bigimg.src = SmallImg[13].src;
}




let input = document.getElementById('count')
let ItemPrice = document.getElementById('Price')

let value = 0;
function counter(num){
   let pricevalue = num;
   value = value+num;
   document.getElementById("price").innerHTML = value;
}

// let count = 0
// function counter(num){
//     let value = num;
//     count = count+num;
//     document.getElementById("Price").innerHTML = count;
// }

// let count = 0;
// function Counter(num) {
//   let value = num;
//   count = count + num;
//   document.getElementById("number").innerHTML = count;
// }
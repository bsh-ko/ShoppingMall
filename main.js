"use strict"

function Product(name, price) { 
    this.name = name 
    this.price = price 
} 
   
let products = [
    new Product('대뱃살', 3000),
    new Product('목살', 5000), 
    new Product('배꼽살', 4000),
    new Product('중뱃살', 1000) 
]

//초기화면 준비 -> 데이터 갯수만큼, select내에 option태그 준비
let selectNode = document.getElementById('products')
//option 태그 출력,, innerHTML, createElement()
let optionTxt = ''
products.forEach((item, index) => {
    optionTxt += `<option vlaue=${index}>${item.name} - ${item.price}</option>`
})
selectNode.innerHTML = optionTxt


function selectChange(e) {

}

function payment() {

}
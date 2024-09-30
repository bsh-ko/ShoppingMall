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

let result = document.getElementById('result')
let paymentPrice = 0

function selectChange(e) {
    // 현재 유저가 선택한 options 획득
    let values = e.target.selectedOptions

    // console.dir(values)

    if(values.length != 0) {
        let resultTxT = '<h4>선택한 상품</h4>'
        resultTxT += '<ul>'
        let totalPrice = 0

        //선택된 개수만큼
        for(let i = 0; i < values.length; i++) {
            let product = products[values[i].value]
            resultTxT += `<li>${product.name} - ${product.price}</li>`
            totalPrice += product.price
        }
    
        resultTxT += '</ul>'
        resultTxT += `<h4>총액 :${totalPrice}</h4>`
        result.innerHTML = resultTxT

        paymentPrice = totalPrice
    } else {
        result.innerHTML = ''
        paymentPrice = 0
    }
}

function payment() {
    if(paymentPrice == 0) {
        alert('결제할 상품을 선택해야 합니다.')
    } else {
        window.open('payment.html', '_blank', 'left=100, top=100, width=300, height=200')
    }
}

// payment.html창에서 호출하는 함수
function getTotalPrice() {
    return paymentPrice
}

function paymentSuccess(cardNo) {
    /*
        실전 상황에서는 payment.html에서는 결제 성공/실패만 발생시키고
        성공, 실패시 그 후속 작업이 많은데, 
        그 작업은 대부분의 데이터를 가지고있는 index.html에서 하는게 맞다
    */
    alert(`${cardNo}로 ${paymentPrice}원이 결제완료 되었습니다.`)
    /*
        실전 상황에서는 성공/실패 데이터를 영속적으로 저장(보통 서버에 넘겨서)
        실전 상황에서는 성공/실패 시의 화면을 별도로 준비하고.. 그 화면으로 전환..
    */
    paymentPrice = 0
    result.innerHTML = ''
}
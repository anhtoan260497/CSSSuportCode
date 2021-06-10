const url = "https://60bddef6ace4d50017aabb88.mockapi.io/FEE/order"
async function Data() {
let res = await fetch(url)
return await res.json()

}

async function run() {
let data = await Data()
for(i=0;i<data.length;i++) {
document.getElementsByClassName("table_data")[0].insertAdjacentHTML("beforeend",`
<tr>
<td><img src="${data[i].product}"></td>
<td>${data[i].Description}</td>
<td class="quantity">
    <p id="quantity" value="1">1</p>
    <button id="plus">+</button>
    <button id="minus">-</button>
    <button id="del">x</button>
</td>
<td id="price" value=${data[i].price}>${data[i].price}</td>
<td id="discount" value=20>20$</td>
<td id="tax" value="15">15$</td>
<td id="total" value=0></td>
</tr>
`)

}

console.log(data)

const plus = document.getElementById("plus")
const minus = document.getElementById("minus")
const del = document.getElementById("del")
const quantity =document.getElementById("quantity")
const tax = document.getElementById("tax")
const price = document.getElementById("price")
const discount = document.getElementById("discount")
const total = document.getElementById("total")



plus.addEventListener("click",(e)=>{
    // e.preventDefault();
    let quantities = parseInt(quantity.getAttribute("value"))
    quantities += 1
    quantity.setAttribute("value",quantities)
    quantity.innerHTML = quantities
    let total_c = quantities*parseInt(price.getAttribute("value"))-(parseInt(tax.getAttribute("value"))*quantities)-(parseInt(discount.getAttribute("value"))*quantities)
    total.innerHTML = total_c
})

minus.addEventListener("click",(e)=>{
    e.preventDefault();
    let quantities = parseInt(quantity.getAttribute("value"))
    if(quantities > 0) {quantities -= 1 } else {quantities=0}
    quantity.setAttribute("value",quantities)
    if(quantities==0 || quantities < 0) {total.innerHTML=0 ; quantity.innerHTML=0} else {quantity.innerHTML=quantities}
    let total_c = quantities*parseInt(price.getAttribute("value"))-(parseInt(tax.getAttribute("value"))*quantities)-(parseInt(discount.getAttribute("value"))*quantities)
    if(quantities=0 ||quantities < 0) {total.innerHTML = 0} else {total.innerHTML = total_c}
    
})

}


run()




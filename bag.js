var totalprice = 0
const output = document.getElementById('output')
const showcart = async () =>{
    const products = JSON.parse(localStorage.getItem('products'))
    for(let i = 0;i<items.length;i++){
        try{
            let body = `<div class="p-2">
                            <div alt="items" class="d-flex flex-row justify-content-around">
                                <div class="p-2">
                                    <img src="${products[i].prdImageUrl}" id="productinbag-img" style="width: 230px; height: 230px;">
                                </div>
                                <div class="p-2">
                                    
                                    <div class="flex-column justify-content-start flex-wrap">
                                        <div class="p-2">
                                            <h4 class="price">${products[i].prdPrice} THB</h4>
                                        </div>
                                        <div class="p-2">
                                            <h4 class="product_name">${products[i].prdname}</h4>
                                        </div>
                                        <div class="p-2">
                                            <div class="d-flex flex-row">
                                                <div class="d-flex flex-column">
                                                    <div class="p-1">
                                                        <p class="type">Size</p>
                                                    </div>
                                                    <div class="p-1">
                                                        <select class="form-select" style="width:200px" aria-label="Default select example">
                                                            <option selected>${products[i].prdSize}</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div class="d-flex flex-column">
                                                    <div class="p-1">
                                                        <p class="type">Quantity</p>
                                                    </div>
                                                    <div class="p-1">
                                                        <select class="form-select" style="width:100px" aria-label="Default select example">
                                                            <option selected>1</option>
                                                        </select>
                                                    </div>
                                                </div>  
                                            </div>
                                        </div>
                                        <div class="p-2" id="item${i}">
                                            <a class="removeitem"><b>Remove this item</b></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>`
            output.innerHTML += body
            let id = 'item' + i
            document.getElementById(id).addEventListener('click',function(){
                delItem(i)
            })
            totalprice += parseInt(items[i].prdPrice)
        } catch (error) {
            console.log('error',error)
        }
    }
    document.getElementById('subtotal').innerHTML = totalprice
    document.getElementById('total').innerHTML = totalprice
}

function delItem(index){
    const products = JSON.parse(localStorage.getItem('products'))
    delete products[index]
    localStorage.setItem('items', JSON.stringify(products));
    output.innerHTML = ''
    totalprice = 0
    showcart()
}

document.getElementById('checkout').addEventListener('click',function(){
    location.href = `confirm.html?price=${totalprice}`;
})

showcart()
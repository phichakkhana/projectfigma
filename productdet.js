let productID = new URLSearchParams(window.location.search).get("id")
const showdetail = async () => {
    try{
        const response = await axios.get(`https://6102d7aa79ed680017482359.mockapi.io/productdetail?id=${productID}`)
        let product = response.data[0]
        document.getElementById('beadcrumb-name').innerHTML = product.prdname
        document.getElementById('product-img').src = product.prdImageUrl
        document.getElementById('product-name').innerHTML = product.prdname
        document.getElementById('product-price').innerHTML = product.prdPrice + " THB"
        document.getElementById('product-detail').innerHTML = product.txtDetail
        document.querySelector('.form-select').innerHTML = 
        `
        <option selected>Please Select</option>
        ${product.prdSize.map((option)=>{
            return `<option value="${option}">${option}</option>`
        })}
        `
        document.getElementById('addtobag').addEventListener('click',function(){
            if(document.querySelector('.form-select').selectedIndex == 0){
                alert('Please select size.')
            }else{
                var selectedoption = document.querySelector('.form-select').options[document.querySelector('.form-select').selectedIndex].value
                addItem(product.id,product.prdname,product.prdPrice,selectedoption,product.prdImageUrl,product.textDetail)
                alert('Item added to cart.')
            }
        })
    } catch (error) {
        console.log('error',error)
    }
}

showdetail()

function addItem(id,name,price,size,image,detail) {
    var oldItems = JSON.parse(localStorage.getItem('products')) || [];
    
    var newItem = {
        "id":id,
        "prdname":name,
        "prdPrice":price,
        "prdSize":size,
        "prdImageUrl":image,
        "txtDetail":detail
    };
    let finItem = oldItems.concat(newItem);
    localStorage.setItem('items', JSON.stringify(finItem));
};


window.addEventListener('resize',function(){
    const block = document.getElementById('displayblock')
    const form = document.querySelector('.form-select')
    const addbag = document.getElementById('addtobag')
    let w = document.documentElement.clientWidth
    if(w<=1150){
        block.classList.remove('flex-row')
        block.classList.add('flex-column')
        block.classList.add('align-items-center')
        form.style.width='150px'
        addbag.style.width='150px'
    }else{
        block.classList.add('flex-row')
        block.classList.remove('flex-column')
        block.classList.remove('align-items-center')
        form.style.width='350px'
        addbag.style.width='350px'
    }
})
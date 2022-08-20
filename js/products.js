let categoriesArray = [];
const URL = 'https://japceibal.github.io/emercado-api/cats_products/101.json';


function showProductsList(array){
    let htmlContentToAppend = "";

    for (let i = 0; i < array.length; i++) { 
        let product = array[i];
        console.log(array)
        htmlContentToAppend += `
        <div class="list-group-item list-group-item-action">
            <div class="row">
                <div class="col-3">
                    <img src="` + product.image + `" alt="product image" class="img-thumbnail">
                </div>
                <div class="col">
                    <div class="d-flex w-100 justify-content-between">
                        <div class="mb-1">
                        <h4> `+ product.name +`</h4> 
                        <p> `+ product.description +`</p>
                        <p> ` + product.currency + product.cost + `</p> 
                        </div>
                        <small class="text-muted"> Vendidos: ` + product.soldCount + `</small> 
                    </div>

                </div>
            </div>
        </div>
        `

        
        document.getElementById("cat-list-container").innerHTML = htmlContentToAppend; 
    }
    
}




document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(URL).then(function(resultObj){
        if (resultObj.status === "ok")
        {
            categoriesArray = resultObj.data.products;
            showProductsList(categoriesArray);
        }
    });
});
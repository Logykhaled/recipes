var httpRequest=new  XMLHttpRequest();
var deails_url=new URLSearchParams(window.location.search)
var currentId=deails_url.get('rId')
var details_img=document.querySelector('#details-img')
var ingredientdLis=document.querySelector(".ingredientdLis")


httpRequest.open('Get',`https://forkify-api.herokuapp.com/api/get?rId=${currentId}`)
httpRequest.send()
httpRequest.addEventListener('readystatechange',function(){
    if(httpRequest.readyState==4)
    {
        var url =JSON.parse(httpRequest.response).recipe.image_url
        details_img.src= `${url}`
        getIngredients()

    }})

    function getIngredients(){
        var ingredients=JSON.parse(httpRequest.response).recipe.ingredients
        var lis='';
        for(var i=0; i<ingredients.length;i++)
            {
               lis+=
               `
                <li>${ingredients[i]}</li>
               `
        
            }
            ingredientdLis.innerHTML=lis        

    }
    
    


var httpRequest= new XMLHttpRequest();
var recipes=[]
var recepies_row=document.querySelector('#recepies_row')
httpRequest.open('Get',"https://forkify-api.herokuapp.com/api/search?q=pizza");
httpRequest.send();
httpRequest.addEventListener("readystatechange",function(){
    if(httpRequest.readyState==4){
       recipes=JSON.parse(httpRequest.response).recipes
       displayRecipes()
    }
})

function displayRecipes(){
    var recipesContainer='';
    for(var i=0; i<recipes.length;i++){
        recipesContainer+=
        `
            <div class="col-md-4">
                <div class="recipe">
                    <img  class='img-fluid recipe-img' src="${recipes[i].image_url}">
                    <h4>${recipes[i].title}</h4>
                    <a target="_blank" href='${recipes[i].source_url}'> source</a>
                    <a target="_blank" href='details.html?rId=${recipes[i].recipe_id}'>Details</a>
                </div>
            </div>
        
        `
    }
    recepies_row.innerHTML=recipesContainer;
   
}

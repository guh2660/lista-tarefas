var botao = document.getElementById("botao");
var inputItem = document.getElementById("novo");
var lista = document.getElementById("lista");

botao.addEventListener("click", addItem);
inputItem.addEventListener("keydown", function(event){
    if(event.key === "Enter"){
    addItem();
    }
});

function addItem(){
  if(inputItem.value !== ""){
   let novoItem = document.createElement("div");
   novoItem.className = "fazer";

   let textoItem = document.createElement("p");
   textoItem.className = "textoItem";
   textoItem.innerHTML = inputItem.value;
   textoItem.addEventListener("click", checkItem);

   let excluirItem = document.createElement("p");
   excluirItem.className = "excluirItem";
   excluirItem.addEventListener("click", excluir);
    
   novoItem.appendChild(textoItem);
   novoItem.appendChild(excluirItem);
   lista.appendChild(novoItem);
   inputItem.value = "";
   checkVazio();
}
   inputItem.focus();
}

function checkVazio(){
    var item = lista.querySelector("div");
    var vazio = document.getElementById("vazio");
   if(lista.contains(vazio)){
     vazio.remove();
   }else if(!lista.contains(vazio) && !lista.contains(item)){
    let novoP = document.createElement("p");
    novoP.setAttribute("id", "vazio");
    novoP.innerText = "Nenhum item";

    lista.appendChild(novoP);
}
}


function excluir(event){
    event.target.parentElement.remove();
    checkVazio();
}

function checkItem(event){
    var pai = event.target.parentElement;
    if(pai.className === "feito"){
     pai.className = "fazer";
    }else{
        pai.className = "feito"; 
    };
}

var desfazer = document.querySelector(".desfazer");

desfazer.addEventListener("click", function(){
 lista.innerHTML = "";
 let novoP = document.createElement("p");
 novoP.setAttribute("id", "vazio");
 novoP.innerText = "Nenhum item";

 lista.appendChild(novoP);
});
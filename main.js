nomeConvidadosArray = [];

function submit() {
    var nomeConvidados = document.getElementById("NomeConvidados1").value;
    console.log(nomeConvidados);
    nomeConvidadosArray.push(nomeConvidados);
    console.log("array: "+nomeConvidadosArray);
}

function show() {
    document.getElementById("listaConvidados").innerHTML=nomeConvidadosArray;
}

function searching() {
    var s = document.getElementById("search").value;
    var found = 0;
    var i;
    for (i = 0; i < nomeConvidadosArray.legth; i++) {
        if(s==nomeConvidadosArray[i]){
          console.log("array: "+nomeConvidadosArray[i]);
            found=found+1;
        }
    }
    document.getElementById("pesquisa").innerHTML="Nome encontrado "+found+" vez(es)";
    console.log("Nome encontrado "+found+" vez(es)");
}
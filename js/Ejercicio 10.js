function convertir(){
    var cel = document.getElementById("celsius").value;
    if (cel === "" || isNaN(cel)) {
        alert("Ingresa un valor numérico válido");
        return;
    }
    var res = (parseFloat(cel)*9/5)+32;
    
    document.getElementById("TF").value=res;

}
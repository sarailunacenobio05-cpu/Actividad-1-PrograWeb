function convertir(){
    var mex = document.getElementById("mex").value;
    if (mex === "" || isNaN(mex) || mex<=0) {
        alert("Ingresa un valor numérico válido");
        return;
    }
    var res = parseFloat(mex)*0.058 ;
    
    document.getElementById("dol").value=res ;

}
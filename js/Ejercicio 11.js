function convertir(){
    var kil = document.getElementById("kil").value;
    if (kil === "" || isNaN(kil) || kil<=0) {
        alert("Ingresa un valor numérico válido");
        return;
    }
    var res = parseFloat(kil)*0.621371 ;
    
    document.getElementById("millas").value=res ;

}
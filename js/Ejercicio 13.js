function calcular(){
    var edad = document.getElementById("edad").value;
    var res;
    if (edad.trim() === "" || isNaN(edad) || edad <= 0) {
        alert("Ingresa una edad válida (número positivo)");
        document.getElementById("edad").value = "";
        return;
    }
    if (edad >=18) {
        res = "Si puedes votar";
    } else{
        res = "No puedes votar";
    } 
    document.getElementById("voto").value=res ;

}
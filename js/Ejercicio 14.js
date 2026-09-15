function calcular(){
    var numeros = document.getElementById("numeros").value;
    if (numeros.trim() === "") {
        alert("Ingresa valores numéricos válidos");
        document.getElementById("numeros").value = "";
        return;
    }
    
    var arre = numeros.split(",");
    var num = [];

    for (var i = 0; i < arre.length; i++) {
        var valorActual = arre[i].trim();
        
        if (valorActual === "" || isNaN(valorActual)) {
            alert("Ingresa valores numéricos válidos separados por comas");
            document.getElementById("numeros").value = "";
            limpiarResultados();
            return;
        }
        
        num.push(Number(valorActual));
    }
    var num=arre.map(Number);
    var maximo=Math.max(...num);
    var minimo=Math.min(...num);

    var suma= num.reduce((acc,valor)=> acc+valor,0);
    var prom= suma/num.length;
    
    
    document.getElementById("mayor").value=maximo;
    document.getElementById("menor").value=minimo;
    document.getElementById("promedio").value=prom;

}
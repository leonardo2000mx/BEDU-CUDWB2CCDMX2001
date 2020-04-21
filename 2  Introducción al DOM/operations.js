function suma(){
    var sumando1=parseInt(document.getElementById('valor1').value);
    var sumando2=parseInt(document.getElementById('valor2').value);
    var resultado=sumando1+sumando2;
    document.getElementById('resultado').textContent=resultado;
    
}
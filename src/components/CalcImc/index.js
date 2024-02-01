export function calcularIMC(peso, altura) {
    if (peso > 0 && altura > 0) {
        const alturaMetros = altura / 100; 
        const imcCalculado = peso / (alturaMetros * alturaMetros);
        return imcCalculado.toFixed(2); 
    } else {
        return 0; 
    }
}
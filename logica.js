import PromptSync from "prompt-sync";
const prompt = PromptSync()

const edad = 20;

if (edad >= 18) {
    console.log('Puedes entrar al sistema.')
} else {
    console.log('Acceso denegado.')
}

for (let i = 1; i <= 5; i++) {
    console.log(`Iteración ${i}`)
}

const nota = Number(prompt("Ingrese la nota: "));

if (nota >= 90) {
    console.log('excelente')
} if (nota >= 70) {
    console.log('bien')
} else {
    console.log('mejorar')
}


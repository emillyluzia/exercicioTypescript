let numero :number =200;
let segundoNumero: number = 100;

console.log(numero + segundoNumero);

let idade: number = 17;
let texto: string ="Minha idade é:" + idade;

console.log(texto);

let idadeNova: number = 17;
let textoNovo: string ="Minha idade é:";

console.log(textoNovo + idadeNova);

let verdadeiro: boolean = true;

console.log(verdadeiro);

let arr: number[] = [1, 2, 3, 4, 10, 50,60];

console.log(arr);
console.log("Tamanho do array" + arr.length);
console.log("acessando a posicão do array:" + arr[0]);
console.log(arr.indexOf(60));

let  arrayTexto: Array<string>;

arrayTexto = ['ab', 'bc', 'cd', 'de'];

console.log(arrayTexto);
console.log(arrayTexto.indexOf('ab'));

function exibirTexto(){
    console.log('Exibindo meu Texto');
}

exibirTexto();

function exibirOutroTexto(){
    return "Exibindo outro Texto";
}

console.log(exibirOutroTexto());

function retornaNumero(): number{
    return 15;
}

console.log(retornaNumero());

function retornaTexto(): string{
    return "retornando string";
}

console.log(retornaTexto());

function soma(a: number, b: number): number {
         return a + b;
}

console.log("O valor da soma é:"+ soma(50, 100));

function multiplicação(a: number, b: number): number {
    return a * b;
}

console.log("O valor da multiplicação é:"+ multiplicação(5, 6));

function media(a: number, b: number, c: number): number {
    return (a + b)* c;
}

console.log("O valor da media é:"+ media(5, 6, 8));





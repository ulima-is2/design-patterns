// Closures
let g = (nombre : string) => {
    let n = nombre
    let x = () => {
        console.log(n)
    }
    return x
}

let funcion = g("Billy")
//...
funcion()
import { Persona } from "./singleton";

let fDecorator = ( func : (p : Persona) => string ) => {
    let fWrapper = (p : Persona) => {
        let personaString = func(p)
        return personaString.toUpperCase()
    }
    return fWrapper
}

let fADecorar = (p : Persona) => {
    return JSON.stringify(p)
}

let fConvertirAXML = ( p : Persona) => {
    return `<persona nombre="${p.nombre}" edad="${p.edad}" />`
}

let p : Persona = Persona.getInstance()
p.nombre = "Billy"
let fDecorada = fDecorator(fADecorar)
console.log(fDecorada(p))

let fDecorada2 = fDecorator(fConvertirAXML)
console.log(fDecorada2(p))
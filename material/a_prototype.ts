class Alumno
{
    // Propiedades de instancia
    codigo : string
    nombre : string

    constructor(codigo : string , nombre : string)
    {
        this.codigo = codigo
        this.nombre = nombre
    }

    clone() : Alumno
    {
        // Spread Operator
        return {
            ...this
        }
        //let p : Alumno = new Alumno(this.codigo, this.nombre)
        //return p
    }
}

let main2 = () => {
    let a1 : Alumno = new Alumno("20161212", "Juanita")
    let a2 : Alumno = a1.clone()
    console.log(a2.codigo)
    console.log(a2.nombre)
    a1.nombre = "billy"
    console.log(a2.nombre)
} 
main2()
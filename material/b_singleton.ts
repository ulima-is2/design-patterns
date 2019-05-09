
// Clase Singleton
export class Persona
{
    // Propiedad de clase
    private static instancia : Persona | null = null 

    // Propiedad de instancia
    nombre : string = ""
    edad : number = 18

    private constructor()
    {}

    static getInstance() : Persona
    {
        if (Persona.instancia == null)
        {
            Persona.instancia = new Persona()
        }
        return Persona.instancia
    }
}

let main = () => {
    let p1 : Persona = Persona.getInstance()
    p1.nombre = "Billy"
    // ....

    let p2 : Persona = Persona.getInstance()
    console.log(p2.nombre)
    p2.edad = 33
    console.log(p1.edad)
}

main()
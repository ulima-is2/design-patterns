import { Forecast } from "./forecast";

class Partido
{
    equipo1 : string
    equipo2 : string
    constructor(equipo1 : string, equipo2 : string)
    {
        this.equipo1 = equipo1
        this.equipo2 = equipo2
    }
}

let main = () => {
    let listaPartidos = []
    listaPartidos.push(new Partido("Peru", "Dinamarca"))
    listaPartidos.push(new Partido("Francia", "Australia"))
    listaPartidos.push(new Partido("Peru", "Francia"))
    listaPartidos.push(new Partido("Australia", "Dinamarca"))
    listaPartidos.push(new Partido("Peru", "Australia"))
    listaPartidos.push(new Partido("Dinamarca", "Francia"))

    let predictor : Forecast = new Forecast()

    for (let i=0; i< listaPartidos.length; i++)
    {
        let res = predictor.predict(listaPartidos[i].equipo1, listaPartidos[i].equipo2)
        let resp : string = ""
        if (res == 0)
        {
            resp = "empate"
        }else if (res == 1)
        {
            resp = `gano ${listaPartidos[i].equipo1}`
        }else{
            resp = `gano ${listaPartidos[i].equipo2}`
        }
        console.log(`${listaPartidos[i].equipo1} vs ${listaPartidos[i].equipo1} -> ${resp}`)
    }
}
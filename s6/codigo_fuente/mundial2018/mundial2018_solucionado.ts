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

// Adapter
abstract class Adapter
{
    abstract forecast(partido : Partido) : number
}

class PredictorAdapter extends Adapter
{
    forecast(partido : Partido) : number
    {
        let forecast : Forecast = new Forecast()
        return forecast.predict(partido.equipo1, partido.equipo2)
    }
}

// Fachada
class PartidosManager
{
    static instancia : PartidosManager | null = null

    partidos : Partido[] = []
    predictor : Adapter | null = null

    //singleton
    static getInstance()
    {
        if (PartidosManager.instancia == null)
        {
            PartidosManager.instancia = new PartidosManager()
        }
        return PartidosManager.instancia
    }

    predecir()
    {
        if (this.predictor == null)
        {
            console.error("Debe setear un predictor")
            return
        }
        for (let i=0; i< this.partidos.length; i++)
        {
            let res = this.predictor.forecast(this.partidos[i])
            let resp : string = ""
            if (res == 0)
            {
                resp = "empate"
            }else if (res == 1)
            {
                resp = `gano ${this.partidos[i].equipo1}`
            }else{
                resp = `gano ${this.partidos[i].equipo2}`
            }
            console.log(`${this.partidos[i].equipo1} vs ${this.partidos[i].equipo2} -> ${resp}`)
        }
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

    let predictor = new PredictorAdapter()

    PartidosManager.getInstance().partidos = listaPartidos
    PartidosManager.getInstance().predictor = predictor
    PartidosManager.getInstance().predecir()

}
main()
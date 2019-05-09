export class Forecast
{
    predict(equipo1 : string , equipo2 : string)
    {
        return Math.floor(Math.random() * 3)
    }
}
import { DBFachada } from "./fachada";
import { Alumno } from "./adapter";

let main = () => {
    let fachada : DBFachada = new DBFachada(process.argv[2])
    fachada = new DBFachada(process.argv[2])
    fachada.conectar()
    fachada.inicializar()
    fachada.desconectar()
    fachada.insertarAlumno(new Alumno("20165656", "Billy", "Sistemas"))
    fachada.desconectar()
}

main()
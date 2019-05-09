class Empleado
{
    nombre : string
    constructor(nom : string)
    {
        this.nombre = nom
    }
}

class Cocinero extends Empleado
{

}

class Jalador extends Empleado
{

}

class Cliente
{
    realizarPedido(pedido : string, mozo : Mozo)
    {
        mozo.escribirPedido(pedido) // Cliente ---> Mozo
    }
}

class Mozo extends Empleado
{
    escribirPedido(pedido : string)
    {
        console.log(`El mozo recibe el pedido ${pedido}`)
    }
}

let main = () => {
    let cliente : Cliente = new Cliente()
    let mozo : Empleado = new Mozo("Paolo")

    cliente.realizarPedido("Ceviche", <Mozo>mozo) // main --> Cliente

}

main()
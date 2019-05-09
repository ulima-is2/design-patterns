import hashlib

def devolver_SHA256(cadena_a_encriptar):
    m = hashlib.sha256()
    m.update(cadena_a_encriptar.encode('utf-8'))
    return m.hexdigest()

lista_usuarios = []

def main():
    while True:
        print("Que desea hacer?")
        print("(1) : Registrar")
        print("(2) : Autenticar")
        print("Cualquier otra tecla para salir.")
        opcion = input("Ingrese opcion:")

        if opcion == "1":
            print("----|Registrar Usuario|----")
            nombre = input("Ingrese su nombre de usuario:")
            password = input("Ingrese su password:")

            password_encriptado = devolver_SHA256(password)
            lista_usuarios.append({"nombre": nombre, "password": password_encriptado})
            print("SE REGISTRÓ EXITOSAMENTE!")
            print()

        elif opcion == "2":
            print("----|Login|----")
            nombre = input("Ingrese su nombre de usuario:")
            password = input("Ingrese su password:")

            password_encriptado = devolver_SHA256(password)
            encontrado = False
            for usuario in lista_usuarios:
                if usuario["nombre"] == nombre:
                    encontrado = True
                    if usuario["password"] == password_encriptado:
                        print("LOGIN CORRECTO")
                    else:
                        print("LOGIN INCORRECTO")
            if encontrado == False:
                print("LOGIN INCORRECTO")
            print()
        else:
            break

if __name__ == "__main__":
    main()
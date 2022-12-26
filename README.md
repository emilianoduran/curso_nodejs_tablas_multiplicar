# Aplicación de consola

---

Para ejecutar la aplicación primero debes instalar los módulos de node.js

```ash
 npm install
```

### Notas

```bash
Opciones:
      --help     Muestra ayuda                                        [booleano]
      --version  Muestra número de versión                            [booleano]
  -b, --base     Es la base de la tabla de multiplicar.     [número] [requerido]
  -l, --list     Muestra la tabla en consola         [booleano] [defecto: false]
  -t, --to       Límite de multiplicaciones               [número] [defecto: 10]
```

Para imprimir una tabla debes utilizar el siguiente comando.

```bash
node app -b 5 -l -t 10

```

El paquete utilizado para construir esta aplicación de consola es yargs.
[documentación oficial](http://yargs.js.org/)

### Metodos utilizados

---

- options
- check

### npm colors

---

Librería que sirve para cambiar los colores a los textos de la consola.
[Documentación](https://www.npmjs.com/package/colors)

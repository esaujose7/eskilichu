# eskilichu

Vamos a aprender un poco sobre git, modulos y manejo de archivos.

## Instrucciones para entregar las tareas

La idea a partir de ahora es que trabajemos como si fueramos realmente un equipo de software.

Se te van a asignar tareas, especificando que problema vamos a querer resolver y de tu parte vamos a querer un entregable (codigo), contenido en una branch que puedes compartir como Pull Request y que pueda ser revisada por tus pares y aprobada o no en caso de necesitar cambios.

## Tarea #1 - Tu primera PR

Para la primera tarea vamos a querer que hagas tus primeros cambios, commitearlos y compartirlos con Git.

Si no tienes Git instalado, asegurate de hacerlo. Las instrucciones que voy a escribir va a estar todo basado en Linux, asi que la alternativa de Windows te la debo.

Para nuestra primera tarea vamos a querer escribir una funcion simple. La idea de esta tarea es familiarizarte con el proceso de PRs y Git, no tanto el codigo JS en si. 

**Objetivo**: Dada una string `s` que contiene espacios y palabras, devolver el largo de la ultima palabra contenida en la string. Esta prohibido usar `.split(' ')`.

Ejemplo:

**Input**: s = 'Tomas puto siuu cr7 no se que escribo pero bueno'
**Output**: 5
**Explicacion**: La palabra `bueno` tiene 5 caracteres de largo.

Una vez logrado, commitear y subirlo en una branch llamada `tarea-1`.

Proveer una Pull Request para poder revisar el codigo.

^ Hasta aca termina la tarea. Varias cosas sobre Git:

Git es una herramienta para **VERSIONAR** tu codigo. Te permite ir haciendo cambios y poder contrastarlos con tus viejas versiones. Es estupidamente poderoso, ya que te permite ver como evoluciona tu codigo a traves del tiempo.

Digamos que comenzamos con este repositorio practicamente vacio. Este repositorio tiene una branch/rama (eww espaniol) principal que es la que va a contener los ultimos cambios vigentes y funcionales. Esta branch principal es sagrada, siempre tiene que estar en perfecto estado.

Si quieres contribuir cambios a la branch principal, entonces te tienes que crear una branch aparte, que parte desde la principal, y en esa nueva branch hacer tus cambios. Una vez que tienes los cambios que quieres en el codigo, vas a desear COMMITEAR a la branch que creaste. Pero COMMITEAR no es tan facil como se piensa. Primero tienes que sumar los cambios que exactamente quieres a traves de un `git add .`, una vez seleccionado esos cambios, se procede con el commit. Luego con esos ultimos cambios que commiteaste, puedes pushearlos para crear una PULL REQUEST y pedir que tu nueva branch que creaste, se sume a la branch principal. Aca entro yo un poco donde reviso los cambios propuestos por ti, te los comento, te digo que los cambies, etc, y luego a traves de GitHub, una vez tengamos consenso en que todo bien, se aprueban. Cuando esto ultimo sucede, se puede mergear tu branch para combinar los cambios que hiciste en tu branch con la branch principal y que la branch principal tenga ahora a futuro estos ultimos cambios en su ultima version.

Es complicado, asi que lo mas probable mejor que te veas un videito. Aca abajo te dejo algunos comandos de como usar Git desde la terminal. Los putos lo usan desde VS Code, asi que capaz te guste usarlo desde ahi.

```bash
# Como clonarte este proyecto
# (clonar significa -> como descargarte este proyecto a tu maquina)
git clone https://github.com/esaujose7/eskilichu.git

# Como crear una branch nueva
git checkout -b 'nombre_de_mi_nueva_branch'

# Ver que archivos de mi branch han cambiado
git status

# Ver los cambios de mis archivos
git diff

# Aniadir archivos a mi branch
git add nombre_archivo.js
git add . # aniade todos los archivos cambiados a tu indice de cambios

# Commitear los archivos aniadidos
git commit -m 'el mensaje que quiero para mi branch'

# Subir tu branch con los commits
git push origin nombre_de_mi_nueva_branch
```

Estos ultimos comandos, en orden, es como yo uso Git en el dia a dia.
Branch nueva, hago cambios, sumo los cambios que quiero con git add
Commiteo los cambios (usualmente hago muchos commits, para poder tener los cambios lo mas granulares posibles, pero no le des bola a eso ahora)
Y por ultimo pusheo y se genera una PR.
Cuando pusheas te aparece un link para CREAR la PR. Dale bola a eso. Y dale bola a lo que te diga la terminal tambien.

## Tarea 2 - Modulos

Aca vamos a explorar el mundo de los modulos en Node.js.

Te invito a leer un poco sobre que es CommonJS, que es la manera en la que los modulos funcionan en Node.js

La idea es sencilla: queremos que la funcion que hiciste en la Tarea 1, exportarla a su propio modulo. El nombre de este modulo queremos que sea `string.js` Importar ese modulo en `index.js`, y usar la funcion exportada en el `index.js`

Nuevamente, proveer una segunda PR, nombre de branch `tarea-2` para revisar y aprobar en caso de que este todo bien.

## Tarea 3 - Manejo de archivos

Aca se pone buena la cosa. En el repositorio vas a encontrar una carpeta llamada `languages`. Cada archivo que esta adentro de esa carpeta contiene un texto en su lenguaje identificado por el mismo nombre del archivo. Cada nombre de archivo corresponde a un lenguaje en base a la especificacion ISO 639. Por lo tanto, `es` corresponde a lenguaje espaniol, y en el contenido de ese archivo deberia haber un texto en espaniol.

Con eso planteado, entonces, queremos lo siguiente:

1. Un modulo para manejar mis lenguajes.
2. Nuestro nuevo modulo deberia tener una funcion que me permita saber cuales lenguajes tengo disponibles en mi aplicacion para usar.
3. Nuestro nuevo modulo deberia tener una funcion que dado un lenguaje segun ISO 639, darme el contenido que hay para ese lenguaje `getContentForLanguage`. En caso de que no exista el lenguaje, deberia devolverme un error por consola y devolverlo por standard error.
4. Nuestro nuevo modulo deberia tener una funcion que dado un lenguaje en base a la especificacion ISO 639, traducirmelo a el nombre exacto del lenguaje. Esto deberia funcionar al menos para los lenguajes que mi aplicacion provee.
5. Implementar la funcion de la tarea 1 en los contenidos de todos los lenguajes de nuestra aplicacion, haciendo uso de las funciones que implementamos en nuestro modulo.

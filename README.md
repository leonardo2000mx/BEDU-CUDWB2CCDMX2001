# Repositorio del grupo CUDWB2CCDMX2001

## ¡Bienvenido al módulo de Programación con Javascript!

En este repositorio encontrarás el material visto en clase, las especificaciones de cada postwork por sesión y podrás subir tus soluciones a los retos o postworks.

Recuerda que los postworks no son obligatorios pero es importante que los realices para que practiques lo visto en clase.

## ¿Cómo subo mi solución al Postwork de la semana?

_Paso 1._ En la parte superior derecha presionar el botón _fork_. Esto "forkeara" (copiará tal cual) este repositorio en tu cuenta.
![](https://i.imgur.com/vRKOJ40.png)

_Paso 2._ La copia tardará unos segundos en realizarse. Una vez terminado el proceso github te va a redirigir al repositorio forkeado en tu cuenta, verifica que tenga la siguiente leyenda en el nombre del repositorio.
![](https://i.imgur.com/QvK4MM3.png)

_Paso 3._ A partir de este momento puedes clonar el repositorio (asegurate que sea el que tienes en tu cuenta!!) y trabajar como lo haces normalmente. Deberás subir tus soluciones a la rama que se te fue asignada (¿no sabes cuál? pregunta en Slack), si no sabes como hacerlo te dejo estos comandos en terminal:

```bash
git clone url-repositorio-forkeado-en-tu-cuenta

git fetch origin

git checkout rama-asignada

# Trabajar como lo haces normalmente, git add, git commit, git push

git push origin rama-asignada
```

_Paso 4._ Una vez que hayas hecho push exitósamente de todos tus cambios al repositorio forkeado, deberás entrar a github y dar click en el siguiente botón:
![](https://i.imgur.com/aekDbrV.png)

_Paso 5._ Un Pull Request es una solicitud para aplicar los cambios del repositorio que tu forkeaste al original, esto ayudará a poder dejar comentarios si es que tu solución tiene algún detalle o bien aceptar los cambios dando por entendido que todo esta bien. Cuando creas un nuevo Pull Request debes seleccionar la rama origen (la rama que se te asigno en el repositorio, especificado del lado derecho) y la rama destino (en teoría es la misma rama, especificado del lado izquierdo).
![](https://i.imgur.com/bSSwApy.png)

_Paso 6._ Si ambas ramas tienen alguna diferencia entonces se habilitará el botón para crear un nuevo Pull Request.
![](https://i.imgur.com/cOrto5q.png)

_Paso 7._ Para finalizar, deberás ponerle un título y una descripción a tu Pull Request y presionar el botón de crear Pull Request.
![](https://i.imgur.com/3oTT8HO.png)

Y ¡listo! Con eso habrás creado una solicitud para incluir tus cambios en el repositorio original. En caso de haber algún detalle con tu solución te llegará un correo electrónico informandote que tienes un comentario en tu Pull Request.

Para actualizar tu Pull Request **NO ES NECESARIO CREARLO NUEVAMENTE**, simplemente actualiza la rama con los comandos que ya sabes (git add, git commit y git push) y ¡listo!, el Pull Request se actualizará para volverlo a revisar.

Si tienes dudas sobre este proceso no dudes preguntar en el canal de Slack.

**¡Suerte!**

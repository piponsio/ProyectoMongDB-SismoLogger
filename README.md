# ProyectoMongDB-SismoLogger
Rest-API que muestra datos relacionados a los sismos al rededor del mundo.

Proyecto desarrollado por Felipe Soto para el Curso de MongoDB impartido por escalab

# Table of Contents
- [ProyectoMongDB-SismoLogger](#proyectomongdb-sismologger)
- [Table of Contents](#table-of-contents)
- [Request](#request)
  - [/sismos/insert](#sismosinsert)
    - [Params](#params)
    - [Example](#example)
  - [/sismos/delete](#sismosdelete)
    - [Params](#params-1)
    - [Example](#example-1)
  - [/sismos/list](#sismoslist)
    - [Params](#params-2)
    - [Example](#example-2)
  - [/sismos/gte](#sismosgte)
    - [Params](#params-3)
    - [Example](#example-3)
  - [/sismos/average](#sismosaverage)
    - [Params](#params-4)
    - [Example](#example-4)
- [Backup](#backup)
- [Replica](#replica)
- [Screenshots](#screenshots)


# Request
Se presentan las request disponibles, parametros necesarios y respuestas.

## /sismos/insert
Recurso que permite insertar uno o más sismos
### Params
- id: (Required) Id único para sismo.
- country_id: (Required) Id que relaciona el sismo con uno de los paises registrados.
- magnitude: magnitud del sismo (Admite decimales, Ex: 8.4)
- description: Pequeña descripción de lo sucedido
### Example
GET /sismos/insert?id=99&country_id=16&magnitude=20&description="falso xd" HTTP/1.1

## /sismos/delete
Recurso que elimina un sismo mediante su id
### Params
- id: (Required) Id del sismo a borrar.
### Example
GET /sismos/delete?id=99 HTTP/1.1

## /sismos/list
Recurso que retorna un listado de todos los sismos registrados
### Params
No son necesarios parametros
### Example
GET /sismos/list HTTP/1.1

## /sismos/gte
Recurso que retorna todos los sismos con magnitud mayor o igual a la indicada
### Params
- magnitude: (Required) Magnitud a comparar.
### Example
GET /sismos/gte?magnitude=9 HTTP/1.1

## /sismos/average
Recurso que retorna el promedio de todos los sismos registrados
### Params
No son necesarios parametros
### Example
GET /sismos/average HTTP/1.1

# Backup
Este proyecto fué planificado para ser levantado en la misma maquina en la que se ejecutará el servidor de MongoDB.

Debido a lo descrito anteriormente, la estrategia de backup (No fué implementada) es crear un módulo Cron que una vez al día realice un backup en un destino predestinado utilizando el comando ```mongodump``` 

# Replica

Para mantener el servicio siempre activo, se propone utilizar un sistema de nodos replicados.

Para dicha implementación se recomienda tener cada nodo en una maquina distinta, para así mantener una alta disponibilidad.

Se utilizará una replicación binaria, debido a que su tipo de sincronización es sencilla para los nodos secundarios, además de esta forma la cantidad de información a transferir es más baja.(Será necesario utilizar la misma tipología, arquitectura de las maquinas y version de MongoDB).

# Screenshots

Las capturas del sistema funcionando se pueden encontrar en la carpeta [screenshots](https://github.com/piponsio/ProyectoMongDB-SismoLogger/tree/master/screenshots).
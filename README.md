<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

# Ejecutar en desarrollo

1. Clonar el repositorio
2. Ejecutar
```
npm install
```

3. Tener Nest CLI instalado
```
npmi -g nestjs/cli
```

4. Levantar la base de datos
```
docker-compose up -d
```

5. Reconstruir la base de datos con la semilla
```
http://localhost:3000/api/v2/seed
```

6. Recoger todos los datos 
```
http://localhost:3000/api/v2/pokemon
```

7. Buscar por una propiedad
```
http://localhost:3000/api/v2/pokemon/{name,number,Mongo_id}
```

7. Eliminar un registro
```
http://localhost:3000/api/v2/pokemon/{Mongo_id}
```

8. Añadir registro
```
http://localhost:3000/api/v2/pokemon
POST{ name:string; no:number }
```
9. Editar registro
```
http://localhost:3000/api/v2/pokemon/{Mongo_id}
PATCH{ name:string; no:number }
```


## Stack Usado
* MongoDB
* NesjJs
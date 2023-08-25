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

5. Clonar el archivo ```__.env.template__``` ,luego renombrar la copia a __.env__ y 
   llenar las variables de entorno definidas en el ```.env``` 

6. Reconstruir la base de datos con la semilla
```
http://localhost:3000/api/v2/seed
```

7. Recoger todos los datos 
```
http://localhost:3000/api/v2/pokemon
```

8. Buscar por una propiedad
```
http://localhost:3000/api/v2/pokemon/{name,number,Mongo_id}
```

9. Eliminar un registro
```
http://localhost:3000/api/v2/pokemon/{Mongo_id}
```

10. Añadir registro
```
http://localhost:3000/api/v2/pokemon
POST{ name:string; no:number }
```
11. Editar registro
```
http://localhost:3000/api/v2/pokemon/{Mongo_id}
PATCH{ name:string; no:number }
```


## Stack Usado
* MongoDB
* NesjJs


# Notas

Heroku redeploy sin cambios:
```
git commit --allow-empty -m "Trigger heroku deploy"
git push heroku master
```
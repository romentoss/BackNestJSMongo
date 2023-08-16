import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { PokemonModule } from './pokemon/pokemon.module';
import { MongooseModule } from '@nestjs/mongoose';
import { CommonModule } from './common/common.module';



// Para servir una página por defecto de contenido estatico
// debemos hacer el npm i @nestjs/serve-static, luego generar 
// en la carpeta public en raiz el contenido estatico y añadir estas 
// lineas en el import del modulo app ServeStaticModule.forRoot({
//   rootPath: join(__dirname,'..','public'),
// })

@Module({
  imports: [ServeStaticModule.forRoot({
    rootPath: join(__dirname,'..','public'),
  }),
  MongooseModule.forRoot('mongodb://localhost:27017/nest-pokemon'),
  PokemonModule,
  CommonModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

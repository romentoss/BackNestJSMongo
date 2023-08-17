import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { PokemonModule } from './pokemon/pokemon.module';
import { MongooseModule } from '@nestjs/mongoose';
import { CommonModule } from './common/common.module';
import { SeedModule } from './seed/seed.module';
import { ConfigModule } from '@nestjs/config';
import { EnvConfiguration } from './config/env.config';
import { JoiValidationSchema } from './config/joi.valitadion';



// Para servir una página por defecto de contenido estatico
// debemos hacer el npm i @nestjs/serve-static, luego generar 
// en la carpeta public en raiz el contenido estatico y añadir estas 
// lineas en el import del modulo app ServeStaticModule.forRoot({
//   rootPath: join(__dirname,'..','public'),
// })

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [EnvConfiguration],
      validationSchema:JoiValidationSchema
    }),
    ServeStaticModule.forRoot({
    rootPath: join(__dirname,'..','public'),
  }),
  MongooseModule.forRoot(process.env['MONGODB']),
  PokemonModule,
  CommonModule,
  SeedModule],
  controllers: [],
  providers: [],
})
export class AppModule {
}

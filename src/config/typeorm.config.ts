import { TypeOrmModuleOptions } from "@nestjs/typeorm";

export const typeOrmConfig: TypeOrmModuleOptions = {
    type: '<your db type>',
    host: 'localhost',
    port: 5432,
    username: '<your user>',
    password: '<your password>',
    database: '<your db name>',
    entities: [__dirname + '/../**/*.entity.{js,ts}'],
    synchronize: true,
};
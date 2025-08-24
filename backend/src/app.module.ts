// import { Module } from '@nestjs/common';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';

// @Module({
//   imports: [],
//   controllers: [AppController],
//   providers: [AppService],
// })
// export class AppModule {}

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { AdminModule } from './admin/admin.module';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',   // change if you set another user
      password: 'root', // put your MySQL password
      database: 'roxiller', // make sure you create this database in MySQL
      autoLoadEntities: true,
      synchronize: true, // ⚠️ only for dev (it auto-creates tables)
    }),
    UserModule,
    AdminModule,
  ],

})
export class AppModule {}

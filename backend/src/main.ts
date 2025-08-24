import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

// For admin seeding
import { DataSource } from 'typeorm';
import { Admin } from './admin/admin.entity';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Enable CORS for React frontend
  app.enableCors({
    origin: 'http://localhost:5173',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  });

  // Create static admin if not exists
  const dataSource = app.get(DataSource);
  const adminRepo = dataSource.getRepository(Admin);

  const existingAdmin = await adminRepo.findOne({ where: { email: 'admin@example.com' } });
  if (!existingAdmin) {
    const admin = adminRepo.create({
      email: 'admin@example.com',
      password: 'admin123', // For production, hash this password
      name: 'Super Admin',
    });
    await adminRepo.save(admin);
    console.log('Static Admin created!');
  }

  // Start the server
  await app.listen(process.env.PORT ?? 4000);
}
bootstrap();

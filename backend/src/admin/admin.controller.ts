// src/admin/admin.controller.ts
import { Controller, Post, Body } from '@nestjs/common';
import { AdminService } from './admin.service';
import { Admin } from './admin.entity';

@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @Post('login')
  async login(@Body() body: { email: string; password: string }): Promise<{ message: string; admin?: Admin }> {
    const admin = await this.adminService.login(body.email, body.password);
    if (admin) {
      return { message: 'Admin login successful', admin };
    }
    return { message: 'Invalid credentials' };
  }
}

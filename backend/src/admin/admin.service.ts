// src/admin/admin.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Admin } from './admin.entity';

@Injectable()
export class AdminService {
  constructor(
    @InjectRepository(Admin)
    private adminRepository: Repository<Admin>,
  ) {}

  async login(email: string, password: string): Promise<Admin | null> {
    const admin = await this.adminRepository.findOne({ where: { email, password } });
    return admin || null;
  }
}

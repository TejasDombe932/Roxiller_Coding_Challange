// import { Injectable } from '@nestjs/common';

// @Injectable()
// export class UserService {}

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async register(userData: Partial<User>): Promise<User> {
    const user = this.userRepository.create(userData);
    return this.userRepository.save(user);
  }

  async login(email: string, password: string): Promise<User | null> {
    const user = await this.userRepository.findOne({ where: { email, password } });
    return user || null;
  }
}

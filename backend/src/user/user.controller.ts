// import { Controller } from '@nestjs/common';

// @Controller('user')
// export class UserController {}

import { Controller, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.entity';

@Controller('auth')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('register')
  async register(@Body() body: { email: string; password: string; name: string }): Promise<User> {
    return this.userService.register(body);
  }

  @Post('login')
  async login(@Body() body: { email: string; password: string }): Promise<{ message: string; user?: User }> {
    const user = await this.userService.login(body.email, body.password);
    if (user) {
      return { message: 'Login successful', user };
    }
    return { message: 'Invalid credentials' };
  }
}

import {
  Body,
  Controller,
  Delete,
  Get,
  NotImplementedException,
  Param,
  Patch,
  Post,
  Query,
  UseGuards,
} from "@nestjs/common";

import { UsersService } from "./users.service";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { ApiTags } from "@nestjs/swagger";
import { User } from "./entities/user.entity";
import { JwtAuthGuard } from "../auth/guards/jwt-auth.guard";

@ApiTags("Users")
@Controller("users")
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
    // @Inject(forwardRef(() => PrimalJwtGuard))
    // private readonly primalJwtGuard: PrimalJwtGuard,
  ) {}

  @Get("test")
  async test() {
    return await this.usersService.createFirstUser();
  }

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    throw new NotImplementedException();
    // return this.usersService.create(createUserDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get("email/:email")
  findOneByEmail(@Param("email") email: string): Promise<User> {
    return this.usersService.findByEmail(email);
  }

  @Get()
  async findAll() {
    return this.usersService.findAll();
  }

  @Get("createFirstUser")
  CreateFirstUser() {
    console.log("CreateFirstUser");
    return this.usersService.createFirstUser();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    //where id is the user id
    return this.usersService.findOne(id);
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(id, updateUserDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.usersService.remove(id);
  }
}

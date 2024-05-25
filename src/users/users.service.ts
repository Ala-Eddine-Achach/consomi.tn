import { Injectable, NotFoundException } from "@nestjs/common";
import { UpdateUserDto } from "./dto/update-user.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { User } from "./entities/user.entity";
import { Role } from "src/enum/user-role.enum";

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>
  ) {}

  async add(user: User) {
    return await this.userRepository.save(user);
  }

  async createFirstUser() {
    console.log("CreateFirstUser 1111");
    const user = this.userRepository.create({
      name: "Johnrt",
      lastName: "Dortghthe",
      email: "John@mthail.com",
      password: "12345678",
      phone: "12345678",
      city: "Tunis",
      street: "Tunis",
      postalCode: "1000",
      isApproved: true,
      role: Role.ADMIN, // Replace "admin" with a valid value from the Role enum
    });
    return await this.userRepository.save(user);
  }

  async findByEmail(email: string): Promise<User> {
    return await this.userRepository.findOne({where: {email}});
  }

  async findAll(): Promise<User[]> {
    return await this.userRepository.find();
  }

  async findOne(id: string): Promise<User> {
    const user = await this.userRepository.findOne({where: {id}});
    if (!user) {
      throw new NotFoundException(`User with ID '${id}' not found`);
    }
    return user;
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    const user = await this.findOne(id);
    this.userRepository.merge(user, updateUserDto);
    return await this.userRepository.save(user);
  }

  async remove(id: string) {
    const user = await this.findOne(id);
    return await this.userRepository.remove(user);
  }

  async verifyUserExsitance(id: string): Promise<boolean> {
    const user = await this.userRepository.findOne({where: {id}});
    return Boolean(user);
  }
}

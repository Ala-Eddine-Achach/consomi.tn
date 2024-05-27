import { Module } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { JwtModule } from "@nestjs/jwt";
import { AuthController } from "./auth.controller";
import { PassportModule } from "@nestjs/passport";
import { UsersModule } from "src/users/users.module";
import { JwtAuthGuard } from "./guards/jwt-auth.guard";
import { JwtStrategy } from "./strategies/jwt.strategy";
import { WsJwtGuard } from "./guards/ws-auth.guard";
import { GqlAuthGuard } from "./guards/gql-auth.guard";

@Module({
  imports: [
    PassportModule.register({
      defaultStrategy: "jwt",
    }),
    JwtModule.register({
      global: true,
      secret: process.env.SECRET || "0xDeadBeef",
      signOptions: { expiresIn: "7d" },
    }),
    UsersModule,
  ],
  providers: [AuthService, JwtAuthGuard, JwtStrategy, WsJwtGuard, GqlAuthGuard],
  controllers: [AuthController],
  exports: [AuthService, JwtAuthGuard, GqlAuthGuard],
})
export class AuthModule {}

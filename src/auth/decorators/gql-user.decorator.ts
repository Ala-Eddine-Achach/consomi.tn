import {
  createParamDecorator,
  ExecutionContext,
  UnauthorizedException,
} from "@nestjs/common";
import { GqlExecutionContext } from "@nestjs/graphql";
import { User } from "src/users/entities/user.entity";

export const GQLCurrentUser = createParamDecorator(
  (data: unknown, context: ExecutionContext): User => {
    const ctx = GqlExecutionContext.create(context);
    const request = ctx.getContext().req;

    if (!request.user) {
      throw new UnauthorizedException("Login first! (No user object found)");
    }

    return request.user;
  },
);

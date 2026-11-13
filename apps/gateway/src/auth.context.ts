import { UnauthorizedException } from '@nestjs/common';
import { app } from './app';
import { ClientProxy } from '@nestjs/microservices';
import { AUTH_SERVICE } from '@app/common';
import { lastValueFrom } from 'rxjs';
import { UserDto } from '@app/common';

export const authContext = async ({ req }: any) => {
  try {
    const authorization = req?.headers?.authorization;
    if (!authorization) {
      return {};
    }
    const authClient = app.get<ClientProxy>(AUTH_SERVICE);
    const user = await lastValueFrom<UserDto>(
      authClient.send('authenticate', {
        Authentication: authorization,
      }),
    );
    return { user };
  } catch (error) {
    throw new UnauthorizedException(error);
  }
};

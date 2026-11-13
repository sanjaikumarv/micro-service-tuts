import { INestApplication } from '@nestjs/common';

let app: INestApplication;

const setApp = (expressApp: INestApplication) => {
  app = expressApp;
};

export { app, setApp };

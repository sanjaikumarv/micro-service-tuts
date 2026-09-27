import { Module } from '@nestjs/common';
import { createObserveModule } from '@nestjs/observe';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from '@app/common';

export const { ObserveModule, ObserveInstrument } = createObserveModule();

@Module({
  imports: [
    DatabaseModule,
    // Distributed tracing, auto-correlated logs, request/job metrics, error
    // telemetry, alarms, and more — out of the box. Sign up at https://observe.nestjs.com
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

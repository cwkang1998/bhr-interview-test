import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
// import { CatsController } from './cats.controller';
// import { CatsService } from './cats.service';
import { Notification, NotificationSchema } from './notification.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Notification.name, schema: NotificationSchema },
    ]),
  ],
  // controllers: [CatsController],
  // providers: [CatsService],
})
export class CatsModule {}

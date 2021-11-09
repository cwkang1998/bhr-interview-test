import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Notification, NotificationDocument } from './notification.schema';

@Injectable()
export class NotificationService {
  constructor(
    @InjectModel(Notification.name)
    private notificationModel: Model<NotificationDocument>,
  ) {}

  sendNotification(
    sendNotificationDto: Partial<Notification>,
  ): Promise<Notification> {
    return;
  }

  getUINotificationList(userId: string): Promise<Notification[]> {
    return this.notificationModel
      .find({
        userId,
        'type.channels': { $in: ['ui'] },
      })
      .exec();
  }
}

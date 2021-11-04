import { Injectable } from '@nestjs/common';

@Injectable()
export class NotificationService {
  sendNotification(
    sendNotificationDto: Partial<Notification>,
  ): Promise<Notification> {
    return;
  }

  getUINotificationList(): Promise<Notification[]> {
    return Promise.resolve([]) as Promise<Notification[]>;
  }
}

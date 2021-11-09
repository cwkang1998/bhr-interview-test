import { Body, Controller, Get, Post } from '@nestjs/common';
import { NotificationService } from './notification.service';

@Controller()
export class NotificationController {
  constructor(private readonly notificationService: NotificationService) {}

  @Post('/send')
  sendNotification(
    @Body() sendNotificationDto: Partial<Notification>,
  ): Promise<Notification> {
    return this.notificationService.sendNotification(sendNotificationDto);
  }

  @Get('/getUI')
  getUINotification(): Promise<Notification[]> {
    return this.notificationService.getUINotificationList();
  }
}

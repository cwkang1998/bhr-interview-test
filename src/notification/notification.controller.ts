import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { Notification } from './notification.schema';
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

  @Get('/ui/:userId')
  getUINotification(@Param('userId') userId: string): Promise<Notification[]> {
    return this.notificationService.getUINotificationList(userId);
  }
}

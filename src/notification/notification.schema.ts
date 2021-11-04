import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type NotificationDocument = Notification & Document;

export enum NotificationType {
  LEAVE_BALANCE_REMINDER = 'leave-balance-reminder',
  MONTHLY_PAYSLIP = 'monthly-payslip',
  HAPPY_BIRTHDAY = 'happy-birthday',
}

@Schema()
export class Notification {
  companyId: string;

  userId: string;

  @Prop({ type: String, required: true, enum: Object.keys(NotificationType) })
  type: NotificationType;

  @Prop({ type: Object })
  content: any;
}

export const NotificationSchema = SchemaFactory.createForClass(Notification);

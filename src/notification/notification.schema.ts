import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type NotificationDocument = Notification & Document;

@Schema()
export class NotificationType {
  name: string;

  channels: string[];
}

export const NotificationTypeSchema =
  SchemaFactory.createForClass(NotificationType);

@Schema()
export class Notification {
  companyId: string;

  userId: string;

  @Prop({ type: NotificationType, required: true })
  type: NotificationType;

  @Prop({ type: Object })
  content: any;
}

export const NotificationSchema = SchemaFactory.createForClass(Notification);

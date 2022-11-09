import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { NotificationEnumPriorityEnum } from "./notificationenumpriorityenum";


export class NotifyV1ServiceNotification extends SpeakeasyBase {
  @Metadata({ data: "json, name=account_sid" })
  accountSid?: string;

  @Metadata({ data: "json, name=action" })
  action?: string;

  @Metadata({ data: "json, name=alexa" })
  alexa?: any;

  @Metadata({ data: "json, name=apn" })
  apn?: any;

  @Metadata({ data: "json, name=body" })
  body?: string;

  @Metadata({ data: "json, name=data" })
  data?: any;

  @Metadata({ data: "json, name=date_created" })
  dateCreated?: Date;

  @Metadata({ data: "json, name=facebook_messenger" })
  facebookMessenger?: any;

  @Metadata({ data: "json, name=fcm" })
  fcm?: any;

  @Metadata({ data: "json, name=gcm" })
  gcm?: any;

  @Metadata({ data: "json, name=identities" })
  identities?: string[];

  @Metadata({ data: "json, name=priority" })
  priority?: NotificationEnumPriorityEnum;

  @Metadata({ data: "json, name=segments" })
  segments?: string[];

  @Metadata({ data: "json, name=service_sid" })
  serviceSid?: string;

  @Metadata({ data: "json, name=sid" })
  sid?: string;

  @Metadata({ data: "json, name=sms" })
  sms?: any;

  @Metadata({ data: "json, name=sound" })
  sound?: string;

  @Metadata({ data: "json, name=tags" })
  tags?: string[];

  @Metadata({ data: "json, name=title" })
  title?: string;

  @Metadata({ data: "json, name=ttl" })
  ttl?: number;
}

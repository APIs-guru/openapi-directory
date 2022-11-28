import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { NotificationEnumPriorityEnum } from "./notificationenumpriorityenum";



export class NotifyV1ServiceNotification extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=account_sid" })
  accountSid?: string;

  @SpeakeasyMetadata({ data: "json, name=action" })
  action?: string;

  @SpeakeasyMetadata({ data: "json, name=alexa" })
  alexa?: any;

  @SpeakeasyMetadata({ data: "json, name=apn" })
  apn?: any;

  @SpeakeasyMetadata({ data: "json, name=body" })
  body?: string;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: any;

  @SpeakeasyMetadata({ data: "json, name=date_created" })
  dateCreated?: Date;

  @SpeakeasyMetadata({ data: "json, name=facebook_messenger" })
  facebookMessenger?: any;

  @SpeakeasyMetadata({ data: "json, name=fcm" })
  fcm?: any;

  @SpeakeasyMetadata({ data: "json, name=gcm" })
  gcm?: any;

  @SpeakeasyMetadata({ data: "json, name=identities" })
  identities?: string[];

  @SpeakeasyMetadata({ data: "json, name=priority" })
  priority?: NotificationEnumPriorityEnum;

  @SpeakeasyMetadata({ data: "json, name=segments" })
  segments?: string[];

  @SpeakeasyMetadata({ data: "json, name=service_sid" })
  serviceSid?: string;

  @SpeakeasyMetadata({ data: "json, name=sid" })
  sid?: string;

  @SpeakeasyMetadata({ data: "json, name=sms" })
  sms?: any;

  @SpeakeasyMetadata({ data: "json, name=sound" })
  sound?: string;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: string[];

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;

  @SpeakeasyMetadata({ data: "json, name=ttl" })
  ttl?: number;
}

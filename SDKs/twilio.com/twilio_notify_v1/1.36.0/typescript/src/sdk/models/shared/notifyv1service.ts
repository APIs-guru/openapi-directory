import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class NotifyV1Service extends SpeakeasyBase {
  @Metadata({ data: "json, name=account_sid" })
  accountSid?: string;

  @Metadata({ data: "json, name=alexa_skill_id" })
  alexaSkillId?: string;

  @Metadata({ data: "json, name=apn_credential_sid" })
  apnCredentialSid?: string;

  @Metadata({ data: "json, name=date_created" })
  dateCreated?: Date;

  @Metadata({ data: "json, name=date_updated" })
  dateUpdated?: Date;

  @Metadata({ data: "json, name=default_alexa_notification_protocol_version" })
  defaultAlexaNotificationProtocolVersion?: string;

  @Metadata({ data: "json, name=default_apn_notification_protocol_version" })
  defaultApnNotificationProtocolVersion?: string;

  @Metadata({ data: "json, name=default_fcm_notification_protocol_version" })
  defaultFcmNotificationProtocolVersion?: string;

  @Metadata({ data: "json, name=default_gcm_notification_protocol_version" })
  defaultGcmNotificationProtocolVersion?: string;

  @Metadata({ data: "json, name=delivery_callback_enabled" })
  deliveryCallbackEnabled?: boolean;

  @Metadata({ data: "json, name=delivery_callback_url" })
  deliveryCallbackUrl?: string;

  @Metadata({ data: "json, name=facebook_messenger_page_id" })
  facebookMessengerPageId?: string;

  @Metadata({ data: "json, name=fcm_credential_sid" })
  fcmCredentialSid?: string;

  @Metadata({ data: "json, name=friendly_name" })
  friendlyName?: string;

  @Metadata({ data: "json, name=gcm_credential_sid" })
  gcmCredentialSid?: string;

  @Metadata({ data: "json, name=links" })
  links?: Map<string, any>;

  @Metadata({ data: "json, name=log_enabled" })
  logEnabled?: boolean;

  @Metadata({ data: "json, name=messaging_service_sid" })
  messagingServiceSid?: string;

  @Metadata({ data: "json, name=sid" })
  sid?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;
}

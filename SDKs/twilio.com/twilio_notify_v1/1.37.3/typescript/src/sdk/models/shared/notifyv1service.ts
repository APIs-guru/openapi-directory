import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class NotifyV1Service extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=account_sid" })
  accountSid?: string;

  @SpeakeasyMetadata({ data: "json, name=alexa_skill_id" })
  alexaSkillId?: string;

  @SpeakeasyMetadata({ data: "json, name=apn_credential_sid" })
  apnCredentialSid?: string;

  @SpeakeasyMetadata({ data: "json, name=date_created" })
  dateCreated?: Date;

  @SpeakeasyMetadata({ data: "json, name=date_updated" })
  dateUpdated?: Date;

  @SpeakeasyMetadata({ data: "json, name=default_alexa_notification_protocol_version" })
  defaultAlexaNotificationProtocolVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=default_apn_notification_protocol_version" })
  defaultApnNotificationProtocolVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=default_fcm_notification_protocol_version" })
  defaultFcmNotificationProtocolVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=default_gcm_notification_protocol_version" })
  defaultGcmNotificationProtocolVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=delivery_callback_enabled" })
  deliveryCallbackEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=delivery_callback_url" })
  deliveryCallbackUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=facebook_messenger_page_id" })
  facebookMessengerPageId?: string;

  @SpeakeasyMetadata({ data: "json, name=fcm_credential_sid" })
  fcmCredentialSid?: string;

  @SpeakeasyMetadata({ data: "json, name=friendly_name" })
  friendlyName?: string;

  @SpeakeasyMetadata({ data: "json, name=gcm_credential_sid" })
  gcmCredentialSid?: string;

  @SpeakeasyMetadata({ data: "json, name=links" })
  links?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=log_enabled" })
  logEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=messaging_service_sid" })
  messagingServiceSid?: string;

  @SpeakeasyMetadata({ data: "json, name=sid" })
  sid?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}

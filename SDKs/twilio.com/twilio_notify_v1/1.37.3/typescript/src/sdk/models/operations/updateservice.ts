import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const UpdateServiceServerList = [
	"https://notify.twilio.com",
] as const;


export class UpdateServicePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=Sid" })
  sid: string;
}


export class UpdateServiceUpdateServiceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=AlexaSkillId;" })
  alexaSkillId?: string;

  @SpeakeasyMetadata({ data: "form, name=ApnCredentialSid;" })
  apnCredentialSid?: string;

  @SpeakeasyMetadata({ data: "form, name=DefaultAlexaNotificationProtocolVersion;" })
  defaultAlexaNotificationProtocolVersion?: string;

  @SpeakeasyMetadata({ data: "form, name=DefaultApnNotificationProtocolVersion;" })
  defaultApnNotificationProtocolVersion?: string;

  @SpeakeasyMetadata({ data: "form, name=DefaultFcmNotificationProtocolVersion;" })
  defaultFcmNotificationProtocolVersion?: string;

  @SpeakeasyMetadata({ data: "form, name=DefaultGcmNotificationProtocolVersion;" })
  defaultGcmNotificationProtocolVersion?: string;

  @SpeakeasyMetadata({ data: "form, name=DeliveryCallbackEnabled;" })
  deliveryCallbackEnabled?: boolean;

  @SpeakeasyMetadata({ data: "form, name=DeliveryCallbackUrl;" })
  deliveryCallbackUrl?: string;

  @SpeakeasyMetadata({ data: "form, name=FacebookMessengerPageId;" })
  facebookMessengerPageId?: string;

  @SpeakeasyMetadata({ data: "form, name=FcmCredentialSid;" })
  fcmCredentialSid?: string;

  @SpeakeasyMetadata({ data: "form, name=FriendlyName;" })
  friendlyName?: string;

  @SpeakeasyMetadata({ data: "form, name=GcmCredentialSid;" })
  gcmCredentialSid?: string;

  @SpeakeasyMetadata({ data: "form, name=LogEnabled;" })
  logEnabled?: boolean;

  @SpeakeasyMetadata({ data: "form, name=MessagingServiceSid;" })
  messagingServiceSid?: string;
}


export class UpdateServiceSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class UpdateServiceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: UpdateServicePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: UpdateServiceUpdateServiceRequest;

  @SpeakeasyMetadata()
  security: UpdateServiceSecurity;
}


export class UpdateServiceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  notifyV1Service?: shared.NotifyV1Service;
}

import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const CREATESERVICE_SERVERS = [
	"https://notify.twilio.com",
];



export class CreateServiceCreateServiceRequest extends SpeakeasyBase {
  @Metadata({ data: "form, name=AlexaSkillId;" })
  alexaSkillId?: string;

  @Metadata({ data: "form, name=ApnCredentialSid;" })
  apnCredentialSid?: string;

  @Metadata({ data: "form, name=DefaultAlexaNotificationProtocolVersion;" })
  defaultAlexaNotificationProtocolVersion?: string;

  @Metadata({ data: "form, name=DefaultApnNotificationProtocolVersion;" })
  defaultApnNotificationProtocolVersion?: string;

  @Metadata({ data: "form, name=DefaultFcmNotificationProtocolVersion;" })
  defaultFcmNotificationProtocolVersion?: string;

  @Metadata({ data: "form, name=DefaultGcmNotificationProtocolVersion;" })
  defaultGcmNotificationProtocolVersion?: string;

  @Metadata({ data: "form, name=DeliveryCallbackEnabled;" })
  deliveryCallbackEnabled?: boolean;

  @Metadata({ data: "form, name=DeliveryCallbackUrl;" })
  deliveryCallbackUrl?: string;

  @Metadata({ data: "form, name=FacebookMessengerPageId;" })
  facebookMessengerPageId?: string;

  @Metadata({ data: "form, name=FcmCredentialSid;" })
  fcmCredentialSid?: string;

  @Metadata({ data: "form, name=FriendlyName;" })
  friendlyName?: string;

  @Metadata({ data: "form, name=GcmCredentialSid;" })
  gcmCredentialSid?: string;

  @Metadata({ data: "form, name=LogEnabled;" })
  logEnabled?: boolean;

  @Metadata({ data: "form, name=MessagingServiceSid;" })
  messagingServiceSid?: string;
}


export class CreateServiceSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class CreateServiceRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreateServiceCreateServiceRequest;

  @Metadata()
  security: CreateServiceSecurity;
}


export class CreateServiceResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  notifyV1Service?: shared.NotifyV1Service;
}

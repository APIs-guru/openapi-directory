import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const CREATENOTIFICATION_SERVERS = [
	"https://notify.twilio.com",
];



export class CreateNotificationPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" })
  serviceSid: string;
}


export class CreateNotificationCreateNotificationRequest extends SpeakeasyBase {
  @Metadata({ data: "form, name=Action;" })
  action?: string;

  @Metadata({ data: "form, name=Alexa;" })
  alexa?: any;

  @Metadata({ data: "form, name=Apn;" })
  apn?: any;

  @Metadata({ data: "form, name=Body;" })
  body?: string;

  @Metadata({ data: "form, name=Data;" })
  data?: any;

  @Metadata({ data: "form, name=DeliveryCallbackUrl;" })
  deliveryCallbackUrl?: string;

  @Metadata({ data: "form, name=FacebookMessenger;" })
  facebookMessenger?: any;

  @Metadata({ data: "form, name=Fcm;" })
  fcm?: any;

  @Metadata({ data: "form, name=Gcm;" })
  gcm?: any;

  @Metadata({ data: "form, name=Identity;" })
  identity?: string[];

  @Metadata({ data: "form, name=Priority;" })
  priority?: shared.NotificationEnumPriorityEnum;

  @Metadata({ data: "form, name=Segment;" })
  segment?: string[];

  @Metadata({ data: "form, name=Sms;" })
  sms?: any;

  @Metadata({ data: "form, name=Sound;" })
  sound?: string;

  @Metadata({ data: "form, name=Tag;" })
  tag?: string[];

  @Metadata({ data: "form, name=Title;" })
  title?: string;

  @Metadata({ data: "form, name=ToBinding;" })
  toBinding?: string[];

  @Metadata({ data: "form, name=Ttl;" })
  ttl?: number;
}


export class CreateNotificationSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class CreateNotificationRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: CreateNotificationPathParams;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreateNotificationCreateNotificationRequest;

  @Metadata()
  security: CreateNotificationSecurity;
}


export class CreateNotificationResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  notifyV1ServiceNotification?: shared.NotifyV1ServiceNotification;
}

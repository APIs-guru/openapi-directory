import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const CreateNotificationServerList = [
	"https://notify.twilio.com",
] as const;


export class CreateNotificationPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" })
  serviceSid: string;
}


export class CreateNotificationCreateNotificationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=Action;" })
  action?: string;

  @SpeakeasyMetadata({ data: "form, name=Alexa;" })
  alexa?: any;

  @SpeakeasyMetadata({ data: "form, name=Apn;" })
  apn?: any;

  @SpeakeasyMetadata({ data: "form, name=Body;" })
  body?: string;

  @SpeakeasyMetadata({ data: "form, name=Data;" })
  data?: any;

  @SpeakeasyMetadata({ data: "form, name=DeliveryCallbackUrl;" })
  deliveryCallbackUrl?: string;

  @SpeakeasyMetadata({ data: "form, name=FacebookMessenger;" })
  facebookMessenger?: any;

  @SpeakeasyMetadata({ data: "form, name=Fcm;" })
  fcm?: any;

  @SpeakeasyMetadata({ data: "form, name=Gcm;" })
  gcm?: any;

  @SpeakeasyMetadata({ data: "form, name=Identity;" })
  identity?: string[];

  @SpeakeasyMetadata({ data: "form, name=Priority;" })
  priority?: shared.NotificationEnumPriorityEnum;

  @SpeakeasyMetadata({ data: "form, name=Segment;" })
  segment?: string[];

  @SpeakeasyMetadata({ data: "form, name=Sms;" })
  sms?: any;

  @SpeakeasyMetadata({ data: "form, name=Sound;" })
  sound?: string;

  @SpeakeasyMetadata({ data: "form, name=Tag;" })
  tag?: string[];

  @SpeakeasyMetadata({ data: "form, name=Title;" })
  title?: string;

  @SpeakeasyMetadata({ data: "form, name=ToBinding;" })
  toBinding?: string[];

  @SpeakeasyMetadata({ data: "form, name=Ttl;" })
  ttl?: number;
}


export class CreateNotificationSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class CreateNotificationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: CreateNotificationPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreateNotificationCreateNotificationRequest;

  @SpeakeasyMetadata()
  security: CreateNotificationSecurity;
}


export class CreateNotificationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  notifyV1ServiceNotification?: shared.NotifyV1ServiceNotification;
}

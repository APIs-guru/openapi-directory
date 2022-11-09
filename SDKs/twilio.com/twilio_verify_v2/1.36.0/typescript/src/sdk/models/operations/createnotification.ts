import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const CREATENOTIFICATION_SERVERS = [
	"https://verify.twilio.com",
];



export class CreateNotificationPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=ChallengeSid" })
  challengeSid: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=Identity" })
  identity: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" })
  serviceSid: string;
}


export class CreateNotificationCreateNotificationRequest extends SpeakeasyBase {
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
  verifyV2ServiceEntityChallengeNotification?: shared.VerifyV2ServiceEntityChallengeNotification;
}

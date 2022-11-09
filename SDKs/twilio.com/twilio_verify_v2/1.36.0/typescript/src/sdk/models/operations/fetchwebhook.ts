import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const FETCHWEBHOOK_SERVERS = [
	"https://verify.twilio.com",
];



export class FetchWebhookPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" })
  serviceSid: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=Sid" })
  sid: string;
}


export class FetchWebhookSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class FetchWebhookRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: FetchWebhookPathParams;

  @Metadata()
  security: FetchWebhookSecurity;
}


export class FetchWebhookResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  verifyV2ServiceWebhook?: shared.VerifyV2ServiceWebhook;
}

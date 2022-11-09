import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const CREATEWEBHOOK_SERVERS = [
	"https://verify.twilio.com",
];



export class CreateWebhookPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" })
  serviceSid: string;
}


export class CreateWebhookCreateWebhookRequest extends SpeakeasyBase {
  @Metadata({ data: "form, name=EventTypes;" })
  eventTypes: string[];

  @Metadata({ data: "form, name=FriendlyName;" })
  friendlyName: string;

  @Metadata({ data: "form, name=Status;" })
  status?: shared.WebhookEnumStatusEnum;

  @Metadata({ data: "form, name=Version;" })
  version?: shared.WebhookEnumVersionEnum;

  @Metadata({ data: "form, name=WebhookUrl;" })
  webhookUrl: string;
}


export class CreateWebhookSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class CreateWebhookRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: CreateWebhookPathParams;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreateWebhookCreateWebhookRequest;

  @Metadata()
  security: CreateWebhookSecurity;
}


export class CreateWebhookResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  verifyV2ServiceWebhook?: shared.VerifyV2ServiceWebhook;
}

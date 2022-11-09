import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const UPDATEWEBHOOK_SERVERS = [
	"https://autopilot.twilio.com",
];



export class UpdateWebhookPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=AssistantSid" })
  assistantSid: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=Sid" })
  sid: string;
}


export class UpdateWebhookUpdateWebhookRequest extends SpeakeasyBase {
  @Metadata({ data: "form, name=Events;" })
  events?: string;

  @Metadata({ data: "form, name=UniqueName;" })
  uniqueName?: string;

  @Metadata({ data: "form, name=WebhookMethod;" })
  webhookMethod?: string;

  @Metadata({ data: "form, name=WebhookUrl;" })
  webhookUrl?: string;
}


export class UpdateWebhookSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class UpdateWebhookRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: UpdateWebhookPathParams;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: UpdateWebhookUpdateWebhookRequest;

  @Metadata()
  security: UpdateWebhookSecurity;
}


export class UpdateWebhookResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  autopilotV1AssistantWebhook?: shared.AutopilotV1AssistantWebhook;
}

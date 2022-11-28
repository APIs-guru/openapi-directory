import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const CreateWebhookServerList = [
	"https://autopilot.twilio.com",
] as const;


export class CreateWebhookPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=AssistantSid" })
  assistantSid: string;
}


export class CreateWebhookCreateWebhookRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=Events;" })
  events: string;

  @SpeakeasyMetadata({ data: "form, name=UniqueName;" })
  uniqueName: string;

  @SpeakeasyMetadata({ data: "form, name=WebhookMethod;" })
  webhookMethod?: string;

  @SpeakeasyMetadata({ data: "form, name=WebhookUrl;" })
  webhookUrl: string;
}


export class CreateWebhookSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class CreateWebhookRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: CreateWebhookPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreateWebhookCreateWebhookRequest;

  @SpeakeasyMetadata()
  security: CreateWebhookSecurity;
}


export class CreateWebhookResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  autopilotV1AssistantWebhook?: shared.AutopilotV1AssistantWebhook;
}

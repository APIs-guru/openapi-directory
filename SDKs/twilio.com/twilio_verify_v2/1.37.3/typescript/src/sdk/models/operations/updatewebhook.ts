import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const UpdateWebhookServerList = [
	"https://verify.twilio.com",
] as const;


export class UpdateWebhookPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" })
  serviceSid: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=Sid" })
  sid: string;
}


export class UpdateWebhookUpdateWebhookRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=EventTypes;" })
  eventTypes?: string[];

  @SpeakeasyMetadata({ data: "form, name=FriendlyName;" })
  friendlyName?: string;

  @SpeakeasyMetadata({ data: "form, name=Status;" })
  status?: shared.WebhookEnumStatusEnum;

  @SpeakeasyMetadata({ data: "form, name=Version;" })
  version?: shared.WebhookEnumVersionEnum;

  @SpeakeasyMetadata({ data: "form, name=WebhookUrl;" })
  webhookUrl?: string;
}


export class UpdateWebhookSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class UpdateWebhookRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: UpdateWebhookPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: UpdateWebhookUpdateWebhookRequest;

  @SpeakeasyMetadata()
  security: UpdateWebhookSecurity;
}


export class UpdateWebhookResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  verifyV2ServiceWebhook?: shared.VerifyV2ServiceWebhook;
}

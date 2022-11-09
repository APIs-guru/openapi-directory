import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const LISTWEBHOOK_SERVERS = [
	"https://autopilot.twilio.com",
];



export class ListWebhookPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=AssistantSid" })
  assistantSid: string;
}


export class ListWebhookQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListWebhookSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListWebhookRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: ListWebhookPathParams;

  @Metadata()
  queryParams: ListWebhookQueryParams;

  @Metadata()
  security: ListWebhookSecurity;
}


export class ListWebhookListWebhookResponseMeta extends SpeakeasyBase {
  @Metadata({ data: "json, name=first_page_url" })
  firstPageUrl?: string;

  @Metadata({ data: "json, name=key" })
  key?: string;

  @Metadata({ data: "json, name=next_page_url" })
  nextPageUrl?: string;

  @Metadata({ data: "json, name=page" })
  page?: number;

  @Metadata({ data: "json, name=page_size" })
  pageSize?: number;

  @Metadata({ data: "json, name=previous_page_url" })
  previousPageUrl?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;
}


export class ListWebhookListWebhookResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=meta" })
  meta?: ListWebhookListWebhookResponseMeta;

  @Metadata({ data: "json, name=webhooks", elemType: shared.AutopilotV1AssistantWebhook })
  webhooks?: shared.AutopilotV1AssistantWebhook[];
}


export class ListWebhookResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listWebhookResponse?: ListWebhookListWebhookResponse;

  @Metadata()
  statusCode: number;
}

import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const LISTCHANNELWEBHOOK_SERVERS = [
	"https://chat.twilio.com",
];



export class ListChannelWebhookPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=ChannelSid" })
  channelSid: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" })
  serviceSid: string;
}


export class ListChannelWebhookQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListChannelWebhookSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListChannelWebhookRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: ListChannelWebhookPathParams;

  @Metadata()
  queryParams: ListChannelWebhookQueryParams;

  @Metadata()
  security: ListChannelWebhookSecurity;
}


export class ListChannelWebhookListChannelWebhookResponseMeta extends SpeakeasyBase {
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


export class ListChannelWebhookListChannelWebhookResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=meta" })
  meta?: ListChannelWebhookListChannelWebhookResponseMeta;

  @Metadata({ data: "json, name=webhooks", elemType: shared.ChatV2ServiceChannelChannelWebhook })
  webhooks?: shared.ChatV2ServiceChannelChannelWebhook[];
}


export class ListChannelWebhookResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listChannelWebhookResponse?: ListChannelWebhookListChannelWebhookResponse;

  @Metadata()
  statusCode: number;
}

import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const LISTWEBCHANNEL_SERVERS = [
	"https://flex-api.twilio.com",
];



export class ListWebChannelQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListWebChannelSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListWebChannelRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  queryParams: ListWebChannelQueryParams;

  @Metadata()
  security: ListWebChannelSecurity;
}


export class ListWebChannelListWebChannelResponseMeta extends SpeakeasyBase {
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


export class ListWebChannelListWebChannelResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=flex_chat_channels", elemType: shared.FlexV1WebChannel })
  flexChatChannels?: shared.FlexV1WebChannel[];

  @Metadata({ data: "json, name=meta" })
  meta?: ListWebChannelListWebChannelResponseMeta;
}


export class ListWebChannelResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listWebChannelResponse?: ListWebChannelListWebChannelResponse;

  @Metadata()
  statusCode: number;
}

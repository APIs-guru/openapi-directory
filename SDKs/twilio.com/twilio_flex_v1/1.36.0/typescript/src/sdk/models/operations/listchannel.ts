import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const LISTCHANNEL_SERVERS = [
	"https://flex-api.twilio.com",
];



export class ListChannelQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListChannelSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListChannelRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  queryParams: ListChannelQueryParams;

  @Metadata()
  security: ListChannelSecurity;
}


export class ListChannelListChannelResponseMeta extends SpeakeasyBase {
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


export class ListChannelListChannelResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=flex_chat_channels", elemType: shared.FlexV1Channel })
  flexChatChannels?: shared.FlexV1Channel[];

  @Metadata({ data: "json, name=meta" })
  meta?: ListChannelListChannelResponseMeta;
}


export class ListChannelResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listChannelResponse?: ListChannelListChannelResponse;

  @Metadata()
  statusCode: number;
}

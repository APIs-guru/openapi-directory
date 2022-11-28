import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const ListWebChannelServerList = [
	"https://flex-api.twilio.com",
] as const;


export class ListWebChannelQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListWebChannelSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListWebChannelListWebChannelResponseMeta extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=first_page_url" })
  firstPageUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=key" })
  key?: string;

  @SpeakeasyMetadata({ data: "json, name=next_page_url" })
  nextPageUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "json, name=page_size" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "json, name=previous_page_url" })
  previousPageUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}


export class ListWebChannelListWebChannelResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=flex_chat_channels", elemType: shared.FlexV1WebChannel })
  flexChatChannels?: shared.FlexV1WebChannel[];

  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta?: ListWebChannelListWebChannelResponseMeta;
}


export class ListWebChannelRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  queryParams: ListWebChannelQueryParams;

  @SpeakeasyMetadata()
  security: ListWebChannelSecurity;
}


export class ListWebChannelResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  listWebChannelResponse?: ListWebChannelListWebChannelResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}

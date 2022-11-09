import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const LISTMESSAGE_SERVERS = [
	"https://ip-messaging.twilio.com",
];



export class ListMessagePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=ChannelSid" })
  channelSid: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" })
  serviceSid: string;
}


export class ListMessageQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Order" })
  order?: shared.MessageEnumOrderTypeEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListMessageSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListMessageRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: ListMessagePathParams;

  @Metadata()
  queryParams: ListMessageQueryParams;

  @Metadata()
  security: ListMessageSecurity;
}


export class ListMessageListMessageResponseMeta extends SpeakeasyBase {
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


export class ListMessageListMessageResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=messages", elemType: shared.IpMessagingV1ServiceChannelMessage })
  messages?: shared.IpMessagingV1ServiceChannelMessage[];

  @Metadata({ data: "json, name=meta" })
  meta?: ListMessageListMessageResponseMeta;
}


export class ListMessageResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listMessageResponse?: ListMessageListMessageResponse;

  @Metadata()
  statusCode: number;
}

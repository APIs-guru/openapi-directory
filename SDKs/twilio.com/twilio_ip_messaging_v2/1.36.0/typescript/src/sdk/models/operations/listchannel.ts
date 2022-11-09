import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const LISTCHANNEL_SERVERS = [
	"https://ip-messaging.twilio.com",
];



export class ListChannelPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" })
  serviceSid: string;
}


export class ListChannelQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Type" })
  type?: shared.ChannelEnumChannelTypeEnum[];
}


export class ListChannelSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListChannelRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: ListChannelPathParams;

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
  @Metadata({ data: "json, name=channels", elemType: shared.IpMessagingV2ServiceChannel })
  channels?: shared.IpMessagingV2ServiceChannel[];

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

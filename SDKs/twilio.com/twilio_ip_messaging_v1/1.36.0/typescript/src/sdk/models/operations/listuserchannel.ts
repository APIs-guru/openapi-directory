import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const LISTUSERCHANNEL_SERVERS = [
	"https://ip-messaging.twilio.com",
];



export class ListUserChannelPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" })
  serviceSid: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=UserSid" })
  userSid: string;
}


export class ListUserChannelQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListUserChannelSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListUserChannelRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: ListUserChannelPathParams;

  @Metadata()
  queryParams: ListUserChannelQueryParams;

  @Metadata()
  security: ListUserChannelSecurity;
}


export class ListUserChannelListUserChannelResponseMeta extends SpeakeasyBase {
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


export class ListUserChannelListUserChannelResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=channels", elemType: shared.IpMessagingV1ServiceUserUserChannel })
  channels?: shared.IpMessagingV1ServiceUserUserChannel[];

  @Metadata({ data: "json, name=meta" })
  meta?: ListUserChannelListUserChannelResponseMeta;
}


export class ListUserChannelResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listUserChannelResponse?: ListUserChannelListUserChannelResponse;

  @Metadata()
  statusCode: number;
}

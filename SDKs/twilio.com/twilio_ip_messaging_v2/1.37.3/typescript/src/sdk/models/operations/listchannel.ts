import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const ListChannelServerList = [
	"https://ip-messaging.twilio.com",
] as const;


export class ListChannelPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" })
  serviceSid: string;
}


export class ListChannelQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Type" })
  type?: shared.ChannelEnumChannelTypeEnum[];
}


export class ListChannelSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListChannelListChannelResponseMeta extends SpeakeasyBase {
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


export class ListChannelListChannelResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=channels", elemType: shared.IpMessagingV2ServiceChannel })
  channels?: shared.IpMessagingV2ServiceChannel[];

  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta?: ListChannelListChannelResponseMeta;
}


export class ListChannelRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: ListChannelPathParams;

  @SpeakeasyMetadata()
  queryParams: ListChannelQueryParams;

  @SpeakeasyMetadata()
  security: ListChannelSecurity;
}


export class ListChannelResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  listChannelResponse?: ListChannelListChannelResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}

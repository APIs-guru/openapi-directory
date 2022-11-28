import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const ListUserChannelServerList = [
	"https://chat.twilio.com",
] as const;


export class ListUserChannelPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" })
  serviceSid: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=UserSid" })
  userSid: string;
}


export class ListUserChannelQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListUserChannelSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListUserChannelListUserChannelResponseMeta extends SpeakeasyBase {
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


export class ListUserChannelListUserChannelResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=channels", elemType: shared.ChatV1ServiceUserUserChannel })
  channels?: shared.ChatV1ServiceUserUserChannel[];

  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta?: ListUserChannelListUserChannelResponseMeta;
}


export class ListUserChannelRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: ListUserChannelPathParams;

  @SpeakeasyMetadata()
  queryParams: ListUserChannelQueryParams;

  @SpeakeasyMetadata()
  security: ListUserChannelSecurity;
}


export class ListUserChannelResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  listUserChannelResponse?: ListUserChannelListUserChannelResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}

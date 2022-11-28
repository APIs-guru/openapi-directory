import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const ListInviteServerList = [
	"https://ip-messaging.twilio.com",
] as const;


export class ListInvitePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ChannelSid" })
  channelSid: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" })
  serviceSid: string;
}


export class ListInviteQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Identity" })
  identity?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListInviteSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListInviteListInviteResponseMeta extends SpeakeasyBase {
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


export class ListInviteListInviteResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=invites", elemType: shared.IpMessagingV1ServiceChannelInvite })
  invites?: shared.IpMessagingV1ServiceChannelInvite[];

  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta?: ListInviteListInviteResponseMeta;
}


export class ListInviteRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: ListInvitePathParams;

  @SpeakeasyMetadata()
  queryParams: ListInviteQueryParams;

  @SpeakeasyMetadata()
  security: ListInviteSecurity;
}


export class ListInviteResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  listInviteResponse?: ListInviteListInviteResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}

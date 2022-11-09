import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const LISTINVITE_SERVERS = [
	"https://ip-messaging.twilio.com",
];



export class ListInvitePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=ChannelSid" })
  channelSid: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" })
  serviceSid: string;
}


export class ListInviteQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Identity" })
  identity?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListInviteSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListInviteRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: ListInvitePathParams;

  @Metadata()
  queryParams: ListInviteQueryParams;

  @Metadata()
  security: ListInviteSecurity;
}


export class ListInviteListInviteResponseMeta extends SpeakeasyBase {
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


export class ListInviteListInviteResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=invites", elemType: shared.IpMessagingV2ServiceChannelInvite })
  invites?: shared.IpMessagingV2ServiceChannelInvite[];

  @Metadata({ data: "json, name=meta" })
  meta?: ListInviteListInviteResponseMeta;
}


export class ListInviteResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listInviteResponse?: ListInviteListInviteResponse;

  @Metadata()
  statusCode: number;
}

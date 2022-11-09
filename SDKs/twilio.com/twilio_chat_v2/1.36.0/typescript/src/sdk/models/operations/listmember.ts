import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const LISTMEMBER_SERVERS = [
	"https://chat.twilio.com",
];



export class ListMemberPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=ChannelSid" })
  channelSid: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" })
  serviceSid: string;
}


export class ListMemberQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Identity" })
  identity?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListMemberSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListMemberRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: ListMemberPathParams;

  @Metadata()
  queryParams: ListMemberQueryParams;

  @Metadata()
  security: ListMemberSecurity;
}


export class ListMemberListMemberResponseMeta extends SpeakeasyBase {
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


export class ListMemberListMemberResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=members", elemType: shared.ChatV2ServiceChannelMember })
  members?: shared.ChatV2ServiceChannelMember[];

  @Metadata({ data: "json, name=meta" })
  meta?: ListMemberListMemberResponseMeta;
}


export class ListMemberResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listMemberResponse?: ListMemberListMemberResponse;

  @Metadata()
  statusCode: number;
}

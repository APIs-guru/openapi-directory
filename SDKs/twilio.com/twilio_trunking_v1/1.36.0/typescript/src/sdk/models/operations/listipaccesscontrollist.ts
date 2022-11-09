import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const LISTIPACCESSCONTROLLIST_SERVERS = [
	"https://trunking.twilio.com",
];



export class ListIpAccessControlListPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=TrunkSid" })
  trunkSid: string;
}


export class ListIpAccessControlListQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListIpAccessControlListSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListIpAccessControlListRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: ListIpAccessControlListPathParams;

  @Metadata()
  queryParams: ListIpAccessControlListQueryParams;

  @Metadata()
  security: ListIpAccessControlListSecurity;
}


export class ListIpAccessControlListListIpAccessControlListResponseMeta extends SpeakeasyBase {
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


export class ListIpAccessControlListListIpAccessControlListResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=ip_access_control_lists", elemType: shared.TrunkingV1TrunkIpAccessControlList })
  ipAccessControlLists?: shared.TrunkingV1TrunkIpAccessControlList[];

  @Metadata({ data: "json, name=meta" })
  meta?: ListIpAccessControlListListIpAccessControlListResponseMeta;
}


export class ListIpAccessControlListResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listIpAccessControlListResponse?: ListIpAccessControlListListIpAccessControlListResponse;

  @Metadata()
  statusCode: number;
}

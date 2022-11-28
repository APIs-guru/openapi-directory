import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const ListIpAccessControlListServerList = [
	"https://trunking.twilio.com",
] as const;


export class ListIpAccessControlListPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=TrunkSid" })
  trunkSid: string;
}


export class ListIpAccessControlListQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListIpAccessControlListSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListIpAccessControlListListIpAccessControlListResponseMeta extends SpeakeasyBase {
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


export class ListIpAccessControlListListIpAccessControlListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ip_access_control_lists", elemType: shared.TrunkingV1TrunkIpAccessControlList })
  ipAccessControlLists?: shared.TrunkingV1TrunkIpAccessControlList[];

  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta?: ListIpAccessControlListListIpAccessControlListResponseMeta;
}


export class ListIpAccessControlListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: ListIpAccessControlListPathParams;

  @SpeakeasyMetadata()
  queryParams: ListIpAccessControlListQueryParams;

  @SpeakeasyMetadata()
  security: ListIpAccessControlListSecurity;
}


export class ListIpAccessControlListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  listIpAccessControlListResponse?: ListIpAccessControlListListIpAccessControlListResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}

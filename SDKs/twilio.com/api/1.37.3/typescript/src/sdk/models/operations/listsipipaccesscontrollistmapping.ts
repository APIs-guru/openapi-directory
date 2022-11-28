import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const ListSipIpAccessControlListMappingServerList = [
	"https://api.twilio.com",
] as const;


export class ListSipIpAccessControlListMappingPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=AccountSid" })
  accountSid: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=DomainSid" })
  domainSid: string;
}


export class ListSipIpAccessControlListMappingQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListSipIpAccessControlListMappingSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListSipIpAccessControlListMappingListSipIpAccessControlListMappingResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=end" })
  end?: number;

  @SpeakeasyMetadata({ data: "json, name=first_page_uri" })
  firstPageUri?: string;

  @SpeakeasyMetadata({ data: "json, name=ip_access_control_list_mappings", elemType: shared.ApiV2010AccountSipSipDomainSipIpAccessControlListMapping })
  ipAccessControlListMappings?: shared.ApiV2010AccountSipSipDomainSipIpAccessControlListMapping[];

  @SpeakeasyMetadata({ data: "json, name=next_page_uri" })
  nextPageUri?: string;

  @SpeakeasyMetadata({ data: "json, name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "json, name=page_size" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "json, name=previous_page_uri" })
  previousPageUri?: string;

  @SpeakeasyMetadata({ data: "json, name=start" })
  start?: number;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri?: string;
}


export class ListSipIpAccessControlListMappingRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: ListSipIpAccessControlListMappingPathParams;

  @SpeakeasyMetadata()
  queryParams: ListSipIpAccessControlListMappingQueryParams;

  @SpeakeasyMetadata()
  security: ListSipIpAccessControlListMappingSecurity;
}


export class ListSipIpAccessControlListMappingResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  listSipIpAccessControlListMappingResponse?: ListSipIpAccessControlListMappingListSipIpAccessControlListMappingResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}

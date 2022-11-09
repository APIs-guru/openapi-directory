import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const LISTSIPAUTHCALLSIPACCESSCONTROLLISTMAPPING_SERVERS = [
	"https://api.twilio.com",
];



export class ListSipAuthCallsIpAccessControlListMappingPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=AccountSid" })
  accountSid: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=DomainSid" })
  domainSid: string;
}


export class ListSipAuthCallsIpAccessControlListMappingQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListSipAuthCallsIpAccessControlListMappingSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListSipAuthCallsIpAccessControlListMappingRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: ListSipAuthCallsIpAccessControlListMappingPathParams;

  @Metadata()
  queryParams: ListSipAuthCallsIpAccessControlListMappingQueryParams;

  @Metadata()
  security: ListSipAuthCallsIpAccessControlListMappingSecurity;
}


export class ListSipAuthCallsIpAccessControlListMappingListSipAuthCallsIpAccessControlListMappingResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=contents", elemType: shared.ApiV2010AccountSipSipDomainSipAuthSipAuthCallsSipAuthCallsIpAccessControlListMapping })
  contents?: shared.ApiV2010AccountSipSipDomainSipAuthSipAuthCallsSipAuthCallsIpAccessControlListMapping[];

  @Metadata({ data: "json, name=end" })
  end?: number;

  @Metadata({ data: "json, name=first_page_uri" })
  firstPageUri?: string;

  @Metadata({ data: "json, name=next_page_uri" })
  nextPageUri?: string;

  @Metadata({ data: "json, name=page" })
  page?: number;

  @Metadata({ data: "json, name=page_size" })
  pageSize?: number;

  @Metadata({ data: "json, name=previous_page_uri" })
  previousPageUri?: string;

  @Metadata({ data: "json, name=start" })
  start?: number;

  @Metadata({ data: "json, name=uri" })
  uri?: string;
}


export class ListSipAuthCallsIpAccessControlListMappingResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listSipAuthCallsIpAccessControlListMappingResponse?: ListSipAuthCallsIpAccessControlListMappingListSipAuthCallsIpAccessControlListMappingResponse;

  @Metadata()
  statusCode: number;
}

import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const LISTSIPCREDENTIALLISTMAPPING_SERVERS = [
	"https://api.twilio.com",
];



export class ListSipCredentialListMappingPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=AccountSid" })
  accountSid: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=DomainSid" })
  domainSid: string;
}


export class ListSipCredentialListMappingQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListSipCredentialListMappingSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListSipCredentialListMappingRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: ListSipCredentialListMappingPathParams;

  @Metadata()
  queryParams: ListSipCredentialListMappingQueryParams;

  @Metadata()
  security: ListSipCredentialListMappingSecurity;
}


export class ListSipCredentialListMappingListSipCredentialListMappingResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=credential_list_mappings", elemType: shared.ApiV2010AccountSipSipDomainSipCredentialListMapping })
  credentialListMappings?: shared.ApiV2010AccountSipSipDomainSipCredentialListMapping[];

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


export class ListSipCredentialListMappingResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listSipCredentialListMappingResponse?: ListSipCredentialListMappingListSipCredentialListMappingResponse;

  @Metadata()
  statusCode: number;
}

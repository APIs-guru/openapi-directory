import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const ListSipCredentialListMappingServerList = [
	"https://api.twilio.com",
] as const;


export class ListSipCredentialListMappingPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=AccountSid" })
  accountSid: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=DomainSid" })
  domainSid: string;
}


export class ListSipCredentialListMappingQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListSipCredentialListMappingSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListSipCredentialListMappingListSipCredentialListMappingResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=credential_list_mappings", elemType: shared.ApiV2010AccountSipSipDomainSipCredentialListMapping })
  credentialListMappings?: shared.ApiV2010AccountSipSipDomainSipCredentialListMapping[];

  @SpeakeasyMetadata({ data: "json, name=end" })
  end?: number;

  @SpeakeasyMetadata({ data: "json, name=first_page_uri" })
  firstPageUri?: string;

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


export class ListSipCredentialListMappingRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: ListSipCredentialListMappingPathParams;

  @SpeakeasyMetadata()
  queryParams: ListSipCredentialListMappingQueryParams;

  @SpeakeasyMetadata()
  security: ListSipCredentialListMappingSecurity;
}


export class ListSipCredentialListMappingResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  listSipCredentialListMappingResponse?: ListSipCredentialListMappingListSipCredentialListMappingResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}

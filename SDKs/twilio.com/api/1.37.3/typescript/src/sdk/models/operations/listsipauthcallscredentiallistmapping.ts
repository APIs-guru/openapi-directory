import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const ListSipAuthCallsCredentialListMappingServerList = [
	"https://api.twilio.com",
] as const;


export class ListSipAuthCallsCredentialListMappingPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=AccountSid" })
  accountSid: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=DomainSid" })
  domainSid: string;
}


export class ListSipAuthCallsCredentialListMappingQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListSipAuthCallsCredentialListMappingSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListSipAuthCallsCredentialListMappingListSipAuthCallsCredentialListMappingResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=contents", elemType: shared.ApiV2010AccountSipSipDomainSipAuthSipAuthCallsSipAuthCallsCredentialListMapping })
  contents?: shared.ApiV2010AccountSipSipDomainSipAuthSipAuthCallsSipAuthCallsCredentialListMapping[];

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


export class ListSipAuthCallsCredentialListMappingRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: ListSipAuthCallsCredentialListMappingPathParams;

  @SpeakeasyMetadata()
  queryParams: ListSipAuthCallsCredentialListMappingQueryParams;

  @SpeakeasyMetadata()
  security: ListSipAuthCallsCredentialListMappingSecurity;
}


export class ListSipAuthCallsCredentialListMappingResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  listSipAuthCallsCredentialListMappingResponse?: ListSipAuthCallsCredentialListMappingListSipAuthCallsCredentialListMappingResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}

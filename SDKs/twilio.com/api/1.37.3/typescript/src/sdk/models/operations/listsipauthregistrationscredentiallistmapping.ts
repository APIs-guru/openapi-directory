import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const ListSipAuthRegistrationsCredentialListMappingServerList = [
	"https://api.twilio.com",
] as const;


export class ListSipAuthRegistrationsCredentialListMappingPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=AccountSid" })
  accountSid: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=DomainSid" })
  domainSid: string;
}


export class ListSipAuthRegistrationsCredentialListMappingQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListSipAuthRegistrationsCredentialListMappingSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListSipAuthRegistrationsCredentialListMappingListSipAuthRegistrationsCredentialListMappingResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=contents", elemType: shared.ApiV2010AccountSipSipDomainSipAuthSipAuthRegistrationsSipAuthRegistrationsCredentialListMapping })
  contents?: shared.ApiV2010AccountSipSipDomainSipAuthSipAuthRegistrationsSipAuthRegistrationsCredentialListMapping[];

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


export class ListSipAuthRegistrationsCredentialListMappingRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: ListSipAuthRegistrationsCredentialListMappingPathParams;

  @SpeakeasyMetadata()
  queryParams: ListSipAuthRegistrationsCredentialListMappingQueryParams;

  @SpeakeasyMetadata()
  security: ListSipAuthRegistrationsCredentialListMappingSecurity;
}


export class ListSipAuthRegistrationsCredentialListMappingResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  listSipAuthRegistrationsCredentialListMappingResponse?: ListSipAuthRegistrationsCredentialListMappingListSipAuthRegistrationsCredentialListMappingResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}

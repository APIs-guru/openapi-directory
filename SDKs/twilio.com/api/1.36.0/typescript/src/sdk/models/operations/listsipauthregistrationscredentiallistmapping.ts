import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const LISTSIPAUTHREGISTRATIONSCREDENTIALLISTMAPPING_SERVERS = [
	"https://api.twilio.com",
];



export class ListSipAuthRegistrationsCredentialListMappingPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=AccountSid" })
  accountSid: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=DomainSid" })
  domainSid: string;
}


export class ListSipAuthRegistrationsCredentialListMappingQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListSipAuthRegistrationsCredentialListMappingSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListSipAuthRegistrationsCredentialListMappingRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: ListSipAuthRegistrationsCredentialListMappingPathParams;

  @Metadata()
  queryParams: ListSipAuthRegistrationsCredentialListMappingQueryParams;

  @Metadata()
  security: ListSipAuthRegistrationsCredentialListMappingSecurity;
}


export class ListSipAuthRegistrationsCredentialListMappingListSipAuthRegistrationsCredentialListMappingResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=contents", elemType: shared.ApiV2010AccountSipSipDomainSipAuthSipAuthRegistrationsSipAuthRegistrationsCredentialListMapping })
  contents?: shared.ApiV2010AccountSipSipDomainSipAuthSipAuthRegistrationsSipAuthRegistrationsCredentialListMapping[];

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


export class ListSipAuthRegistrationsCredentialListMappingResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listSipAuthRegistrationsCredentialListMappingResponse?: ListSipAuthRegistrationsCredentialListMappingListSipAuthRegistrationsCredentialListMappingResponse;

  @Metadata()
  statusCode: number;
}

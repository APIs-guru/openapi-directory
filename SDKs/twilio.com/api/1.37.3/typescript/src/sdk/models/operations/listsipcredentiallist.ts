import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const ListSipCredentialListServerList = [
	"https://api.twilio.com",
] as const;


export class ListSipCredentialListPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=AccountSid" })
  accountSid: string;
}


export class ListSipCredentialListQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListSipCredentialListSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListSipCredentialListListSipCredentialListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=credential_lists", elemType: shared.ApiV2010AccountSipSipCredentialList })
  credentialLists?: shared.ApiV2010AccountSipSipCredentialList[];

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


export class ListSipCredentialListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: ListSipCredentialListPathParams;

  @SpeakeasyMetadata()
  queryParams: ListSipCredentialListQueryParams;

  @SpeakeasyMetadata()
  security: ListSipCredentialListSecurity;
}


export class ListSipCredentialListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  listSipCredentialListResponse?: ListSipCredentialListListSipCredentialListResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}

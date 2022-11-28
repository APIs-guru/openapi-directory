import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const ListCredentialListServerList = [
	"https://trunking.twilio.com",
] as const;


export class ListCredentialListPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=TrunkSid" })
  trunkSid: string;
}


export class ListCredentialListQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListCredentialListSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListCredentialListListCredentialListResponseMeta extends SpeakeasyBase {
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


export class ListCredentialListListCredentialListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=credential_lists", elemType: shared.TrunkingV1TrunkCredentialList })
  credentialLists?: shared.TrunkingV1TrunkCredentialList[];

  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta?: ListCredentialListListCredentialListResponseMeta;
}


export class ListCredentialListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: ListCredentialListPathParams;

  @SpeakeasyMetadata()
  queryParams: ListCredentialListQueryParams;

  @SpeakeasyMetadata()
  security: ListCredentialListSecurity;
}


export class ListCredentialListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  listCredentialListResponse?: ListCredentialListListCredentialListResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}

import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const ListCredentialAwsServerList = [
	"https://accounts.twilio.com",
] as const;


export class ListCredentialAwsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListCredentialAwsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListCredentialAwsListCredentialAwsResponseMeta extends SpeakeasyBase {
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


export class ListCredentialAwsListCredentialAwsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=credentials", elemType: shared.AccountsV1CredentialCredentialAws })
  credentials?: shared.AccountsV1CredentialCredentialAws[];

  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta?: ListCredentialAwsListCredentialAwsResponseMeta;
}


export class ListCredentialAwsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  queryParams: ListCredentialAwsQueryParams;

  @SpeakeasyMetadata()
  security: ListCredentialAwsSecurity;
}


export class ListCredentialAwsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  listCredentialAwsResponse?: ListCredentialAwsListCredentialAwsResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}

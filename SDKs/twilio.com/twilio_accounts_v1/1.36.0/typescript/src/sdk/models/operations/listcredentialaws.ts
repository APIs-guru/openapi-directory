import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const LISTCREDENTIALAWS_SERVERS = [
	"https://accounts.twilio.com",
];



export class ListCredentialAwsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListCredentialAwsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListCredentialAwsRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  queryParams: ListCredentialAwsQueryParams;

  @Metadata()
  security: ListCredentialAwsSecurity;
}


export class ListCredentialAwsListCredentialAwsResponseMeta extends SpeakeasyBase {
  @Metadata({ data: "json, name=first_page_url" })
  firstPageUrl?: string;

  @Metadata({ data: "json, name=key" })
  key?: string;

  @Metadata({ data: "json, name=next_page_url" })
  nextPageUrl?: string;

  @Metadata({ data: "json, name=page" })
  page?: number;

  @Metadata({ data: "json, name=page_size" })
  pageSize?: number;

  @Metadata({ data: "json, name=previous_page_url" })
  previousPageUrl?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;
}


export class ListCredentialAwsListCredentialAwsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=credentials", elemType: shared.AccountsV1CredentialCredentialAws })
  credentials?: shared.AccountsV1CredentialCredentialAws[];

  @Metadata({ data: "json, name=meta" })
  meta?: ListCredentialAwsListCredentialAwsResponseMeta;
}


export class ListCredentialAwsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listCredentialAwsResponse?: ListCredentialAwsListCredentialAwsResponse;

  @Metadata()
  statusCode: number;
}

import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const LISTCREDENTIAL_SERVERS = [
	"https://notify.twilio.com",
];



export class ListCredentialQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListCredentialSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListCredentialRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  queryParams: ListCredentialQueryParams;

  @Metadata()
  security: ListCredentialSecurity;
}


export class ListCredentialListCredentialResponseMeta extends SpeakeasyBase {
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


export class ListCredentialListCredentialResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=credentials", elemType: shared.NotifyV1Credential })
  credentials?: shared.NotifyV1Credential[];

  @Metadata({ data: "json, name=meta" })
  meta?: ListCredentialListCredentialResponseMeta;
}


export class ListCredentialResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listCredentialResponse?: ListCredentialListCredentialResponse;

  @Metadata()
  statusCode: number;
}

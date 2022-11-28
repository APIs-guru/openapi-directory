import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const ListCredentialServerList = [
	"https://conversations.twilio.com",
] as const;


export class ListCredentialQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListCredentialSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListCredentialListCredentialResponseMeta extends SpeakeasyBase {
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


export class ListCredentialListCredentialResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=credentials", elemType: shared.ConversationsV1Credential })
  credentials?: shared.ConversationsV1Credential[];

  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta?: ListCredentialListCredentialResponseMeta;
}


export class ListCredentialRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  queryParams: ListCredentialQueryParams;

  @SpeakeasyMetadata()
  security: ListCredentialSecurity;
}


export class ListCredentialResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  listCredentialResponse?: ListCredentialListCredentialResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}

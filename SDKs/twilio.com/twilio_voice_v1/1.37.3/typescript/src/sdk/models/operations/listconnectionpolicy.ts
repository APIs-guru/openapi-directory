import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const ListConnectionPolicyServerList = [
	"https://voice.twilio.com",
] as const;


export class ListConnectionPolicyQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListConnectionPolicySecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListConnectionPolicyListConnectionPolicyResponseMeta extends SpeakeasyBase {
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


export class ListConnectionPolicyListConnectionPolicyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=connection_policies", elemType: shared.VoiceV1ConnectionPolicy })
  connectionPolicies?: shared.VoiceV1ConnectionPolicy[];

  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta?: ListConnectionPolicyListConnectionPolicyResponseMeta;
}


export class ListConnectionPolicyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  queryParams: ListConnectionPolicyQueryParams;

  @SpeakeasyMetadata()
  security: ListConnectionPolicySecurity;
}


export class ListConnectionPolicyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  listConnectionPolicyResponse?: ListConnectionPolicyListConnectionPolicyResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}

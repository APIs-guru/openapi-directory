import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const LISTCONNECTIONPOLICY_SERVERS = [
	"https://voice.twilio.com",
];



export class ListConnectionPolicyQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListConnectionPolicySecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListConnectionPolicyRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  queryParams: ListConnectionPolicyQueryParams;

  @Metadata()
  security: ListConnectionPolicySecurity;
}


export class ListConnectionPolicyListConnectionPolicyResponseMeta extends SpeakeasyBase {
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


export class ListConnectionPolicyListConnectionPolicyResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=connection_policies", elemType: shared.VoiceV1ConnectionPolicy })
  connectionPolicies?: shared.VoiceV1ConnectionPolicy[];

  @Metadata({ data: "json, name=meta" })
  meta?: ListConnectionPolicyListConnectionPolicyResponseMeta;
}


export class ListConnectionPolicyResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listConnectionPolicyResponse?: ListConnectionPolicyListConnectionPolicyResponse;

  @Metadata()
  statusCode: number;
}

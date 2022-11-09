import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const LISTCONNECTIONPOLICYTARGET_SERVERS = [
	"https://voice.twilio.com",
];



export class ListConnectionPolicyTargetPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=ConnectionPolicySid" })
  connectionPolicySid: string;
}


export class ListConnectionPolicyTargetQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListConnectionPolicyTargetSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListConnectionPolicyTargetRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: ListConnectionPolicyTargetPathParams;

  @Metadata()
  queryParams: ListConnectionPolicyTargetQueryParams;

  @Metadata()
  security: ListConnectionPolicyTargetSecurity;
}


export class ListConnectionPolicyTargetListConnectionPolicyTargetResponseMeta extends SpeakeasyBase {
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


export class ListConnectionPolicyTargetListConnectionPolicyTargetResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=meta" })
  meta?: ListConnectionPolicyTargetListConnectionPolicyTargetResponseMeta;

  @Metadata({ data: "json, name=targets", elemType: shared.VoiceV1ConnectionPolicyConnectionPolicyTarget })
  targets?: shared.VoiceV1ConnectionPolicyConnectionPolicyTarget[];
}


export class ListConnectionPolicyTargetResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listConnectionPolicyTargetResponse?: ListConnectionPolicyTargetListConnectionPolicyTargetResponse;

  @Metadata()
  statusCode: number;
}

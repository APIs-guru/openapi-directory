import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const ListConnectionPolicyTargetServerList = [
	"https://voice.twilio.com",
] as const;


export class ListConnectionPolicyTargetPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ConnectionPolicySid" })
  connectionPolicySid: string;
}


export class ListConnectionPolicyTargetQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListConnectionPolicyTargetSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListConnectionPolicyTargetListConnectionPolicyTargetResponseMeta extends SpeakeasyBase {
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


export class ListConnectionPolicyTargetListConnectionPolicyTargetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta?: ListConnectionPolicyTargetListConnectionPolicyTargetResponseMeta;

  @SpeakeasyMetadata({ data: "json, name=targets", elemType: shared.VoiceV1ConnectionPolicyConnectionPolicyTarget })
  targets?: shared.VoiceV1ConnectionPolicyConnectionPolicyTarget[];
}


export class ListConnectionPolicyTargetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: ListConnectionPolicyTargetPathParams;

  @SpeakeasyMetadata()
  queryParams: ListConnectionPolicyTargetQueryParams;

  @SpeakeasyMetadata()
  security: ListConnectionPolicyTargetSecurity;
}


export class ListConnectionPolicyTargetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  listConnectionPolicyTargetResponse?: ListConnectionPolicyTargetListConnectionPolicyTargetResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}

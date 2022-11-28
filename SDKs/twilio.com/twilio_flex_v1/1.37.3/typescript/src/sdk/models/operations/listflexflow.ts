import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const ListFlexFlowServerList = [
	"https://flex-api.twilio.com",
] as const;


export class ListFlexFlowQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=FriendlyName" })
  friendlyName?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListFlexFlowSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListFlexFlowListFlexFlowResponseMeta extends SpeakeasyBase {
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


export class ListFlexFlowListFlexFlowResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=flex_flows", elemType: shared.FlexV1FlexFlow })
  flexFlows?: shared.FlexV1FlexFlow[];

  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta?: ListFlexFlowListFlexFlowResponseMeta;
}


export class ListFlexFlowRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  queryParams: ListFlexFlowQueryParams;

  @SpeakeasyMetadata()
  security: ListFlexFlowSecurity;
}


export class ListFlexFlowResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  listFlexFlowResponse?: ListFlexFlowListFlexFlowResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}

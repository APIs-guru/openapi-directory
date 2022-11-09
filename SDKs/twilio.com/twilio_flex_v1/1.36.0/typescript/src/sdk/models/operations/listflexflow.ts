import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const LISTFLEXFLOW_SERVERS = [
	"https://flex-api.twilio.com",
];



export class ListFlexFlowQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=FriendlyName" })
  friendlyName?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListFlexFlowSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListFlexFlowRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  queryParams: ListFlexFlowQueryParams;

  @Metadata()
  security: ListFlexFlowSecurity;
}


export class ListFlexFlowListFlexFlowResponseMeta extends SpeakeasyBase {
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


export class ListFlexFlowListFlexFlowResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=flex_flows", elemType: shared.FlexV1FlexFlow })
  flexFlows?: shared.FlexV1FlexFlow[];

  @Metadata({ data: "json, name=meta" })
  meta?: ListFlexFlowListFlexFlowResponseMeta;
}


export class ListFlexFlowResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listFlexFlowResponse?: ListFlexFlowListFlexFlowResponse;

  @Metadata()
  statusCode: number;
}

import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const LISTFLOW_SERVERS = [
	"https://studio.twilio.com",
];



export class ListFlowQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListFlowSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListFlowRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  queryParams: ListFlowQueryParams;

  @Metadata()
  security: ListFlowSecurity;
}


export class ListFlowListFlowResponseMeta extends SpeakeasyBase {
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


export class ListFlowListFlowResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=flows", elemType: shared.StudioV2Flow })
  flows?: shared.StudioV2Flow[];

  @Metadata({ data: "json, name=meta" })
  meta?: ListFlowListFlowResponseMeta;
}


export class ListFlowResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listFlowResponse?: ListFlowListFlowResponse;

  @Metadata()
  statusCode: number;
}

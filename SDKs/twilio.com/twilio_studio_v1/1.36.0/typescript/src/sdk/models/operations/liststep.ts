import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const LISTSTEP_SERVERS = [
	"https://studio.twilio.com",
];



export class ListStepPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=EngagementSid" })
  engagementSid: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=FlowSid" })
  flowSid: string;
}


export class ListStepQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListStepSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListStepRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: ListStepPathParams;

  @Metadata()
  queryParams: ListStepQueryParams;

  @Metadata()
  security: ListStepSecurity;
}


export class ListStepListStepResponseMeta extends SpeakeasyBase {
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


export class ListStepListStepResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=meta" })
  meta?: ListStepListStepResponseMeta;

  @Metadata({ data: "json, name=steps", elemType: shared.StudioV1FlowEngagementStep })
  steps?: shared.StudioV1FlowEngagementStep[];
}


export class ListStepResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listStepResponse?: ListStepListStepResponse;

  @Metadata()
  statusCode: number;
}

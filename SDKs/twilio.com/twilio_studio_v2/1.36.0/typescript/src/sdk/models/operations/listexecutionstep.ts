import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const LISTEXECUTIONSTEP_SERVERS = [
	"https://studio.twilio.com",
];



export class ListExecutionStepPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=ExecutionSid" })
  executionSid: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=FlowSid" })
  flowSid: string;
}


export class ListExecutionStepQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListExecutionStepSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListExecutionStepRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: ListExecutionStepPathParams;

  @Metadata()
  queryParams: ListExecutionStepQueryParams;

  @Metadata()
  security: ListExecutionStepSecurity;
}


export class ListExecutionStepListExecutionStepResponseMeta extends SpeakeasyBase {
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


export class ListExecutionStepListExecutionStepResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=meta" })
  meta?: ListExecutionStepListExecutionStepResponseMeta;

  @Metadata({ data: "json, name=steps", elemType: shared.StudioV2FlowExecutionExecutionStep })
  steps?: shared.StudioV2FlowExecutionExecutionStep[];
}


export class ListExecutionStepResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listExecutionStepResponse?: ListExecutionStepListExecutionStepResponse;

  @Metadata()
  statusCode: number;
}

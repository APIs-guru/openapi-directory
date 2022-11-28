import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const ListExecutionStepServerList = [
	"https://studio.twilio.com",
] as const;


export class ListExecutionStepPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ExecutionSid" })
  executionSid: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=FlowSid" })
  flowSid: string;
}


export class ListExecutionStepQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListExecutionStepSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListExecutionStepListExecutionStepResponseMeta extends SpeakeasyBase {
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


export class ListExecutionStepListExecutionStepResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta?: ListExecutionStepListExecutionStepResponseMeta;

  @SpeakeasyMetadata({ data: "json, name=steps", elemType: shared.StudioV1FlowExecutionExecutionStep })
  steps?: shared.StudioV1FlowExecutionExecutionStep[];
}


export class ListExecutionStepRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: ListExecutionStepPathParams;

  @SpeakeasyMetadata()
  queryParams: ListExecutionStepQueryParams;

  @SpeakeasyMetadata()
  security: ListExecutionStepSecurity;
}


export class ListExecutionStepResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  listExecutionStepResponse?: ListExecutionStepListExecutionStepResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}

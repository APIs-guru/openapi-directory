import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const LISTEXECUTION_SERVERS = [
	"https://studio.twilio.com",
];



export class ListExecutionPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=FlowSid" })
  flowSid: string;
}


export class ListExecutionQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=DateCreatedFrom" })
  dateCreatedFrom?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=DateCreatedTo" })
  dateCreatedTo?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListExecutionSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListExecutionRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: ListExecutionPathParams;

  @Metadata()
  queryParams: ListExecutionQueryParams;

  @Metadata()
  security: ListExecutionSecurity;
}


export class ListExecutionListExecutionResponseMeta extends SpeakeasyBase {
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


export class ListExecutionListExecutionResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=executions", elemType: shared.StudioV1FlowExecution })
  executions?: shared.StudioV1FlowExecution[];

  @Metadata({ data: "json, name=meta" })
  meta?: ListExecutionListExecutionResponseMeta;
}


export class ListExecutionResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listExecutionResponse?: ListExecutionListExecutionResponse;

  @Metadata()
  statusCode: number;
}

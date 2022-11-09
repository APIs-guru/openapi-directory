import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const LISTSAMPLE_SERVERS = [
	"https://autopilot.twilio.com",
];



export class ListSamplePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=AssistantSid" })
  assistantSid: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=TaskSid" })
  taskSid: string;
}


export class ListSampleQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Language" })
  language?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListSampleSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListSampleRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: ListSamplePathParams;

  @Metadata()
  queryParams: ListSampleQueryParams;

  @Metadata()
  security: ListSampleSecurity;
}


export class ListSampleListSampleResponseMeta extends SpeakeasyBase {
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


export class ListSampleListSampleResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=meta" })
  meta?: ListSampleListSampleResponseMeta;

  @Metadata({ data: "json, name=samples", elemType: shared.AutopilotV1AssistantTaskSample })
  samples?: shared.AutopilotV1AssistantTaskSample[];
}


export class ListSampleResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listSampleResponse?: ListSampleListSampleResponse;

  @Metadata()
  statusCode: number;
}

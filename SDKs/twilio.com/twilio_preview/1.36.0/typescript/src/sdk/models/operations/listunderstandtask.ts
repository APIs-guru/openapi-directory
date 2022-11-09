import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const LISTUNDERSTANDTASK_SERVERS = [
	"https://preview.twilio.com",
];



export class ListUnderstandTaskPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=AssistantSid" })
  assistantSid: string;
}


export class ListUnderstandTaskQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListUnderstandTaskSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListUnderstandTaskRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: ListUnderstandTaskPathParams;

  @Metadata()
  queryParams: ListUnderstandTaskQueryParams;

  @Metadata()
  security: ListUnderstandTaskSecurity;
}


export class ListUnderstandTaskListUnderstandTaskResponseMeta extends SpeakeasyBase {
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


export class ListUnderstandTaskListUnderstandTaskResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=meta" })
  meta?: ListUnderstandTaskListUnderstandTaskResponseMeta;

  @Metadata({ data: "json, name=tasks", elemType: shared.PreviewUnderstandAssistantTask })
  tasks?: shared.PreviewUnderstandAssistantTask[];
}


export class ListUnderstandTaskResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listUnderstandTaskResponse?: ListUnderstandTaskListUnderstandTaskResponse;

  @Metadata()
  statusCode: number;
}

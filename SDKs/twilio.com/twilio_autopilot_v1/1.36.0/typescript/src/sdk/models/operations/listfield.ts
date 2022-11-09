import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const LISTFIELD_SERVERS = [
	"https://autopilot.twilio.com",
];



export class ListFieldPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=AssistantSid" })
  assistantSid: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=TaskSid" })
  taskSid: string;
}


export class ListFieldQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListFieldSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListFieldRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: ListFieldPathParams;

  @Metadata()
  queryParams: ListFieldQueryParams;

  @Metadata()
  security: ListFieldSecurity;
}


export class ListFieldListFieldResponseMeta extends SpeakeasyBase {
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


export class ListFieldListFieldResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=fields", elemType: shared.AutopilotV1AssistantTaskField })
  fields?: shared.AutopilotV1AssistantTaskField[];

  @Metadata({ data: "json, name=meta" })
  meta?: ListFieldListFieldResponseMeta;
}


export class ListFieldResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listFieldResponse?: ListFieldListFieldResponse;

  @Metadata()
  statusCode: number;
}

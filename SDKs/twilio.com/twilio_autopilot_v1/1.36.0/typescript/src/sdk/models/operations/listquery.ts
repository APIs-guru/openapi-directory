import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const LISTQUERY_SERVERS = [
	"https://autopilot.twilio.com",
];



export class ListQueryPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=AssistantSid" })
  assistantSid: string;
}


export class ListQueryQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=DialogueSid" })
  dialogueSid?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Language" })
  language?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=ModelBuild" })
  modelBuild?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Status" })
  status?: string;
}


export class ListQuerySecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListQueryRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: ListQueryPathParams;

  @Metadata()
  queryParams: ListQueryQueryParams;

  @Metadata()
  security: ListQuerySecurity;
}


export class ListQueryListQueryResponseMeta extends SpeakeasyBase {
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


export class ListQueryListQueryResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=meta" })
  meta?: ListQueryListQueryResponseMeta;

  @Metadata({ data: "json, name=queries", elemType: shared.AutopilotV1AssistantQuery })
  queries?: shared.AutopilotV1AssistantQuery[];
}


export class ListQueryResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listQueryResponse?: ListQueryListQueryResponse;

  @Metadata()
  statusCode: number;
}

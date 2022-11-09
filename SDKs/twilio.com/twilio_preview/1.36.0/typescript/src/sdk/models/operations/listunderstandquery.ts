import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const LISTUNDERSTANDQUERY_SERVERS = [
	"https://preview.twilio.com",
];



export class ListUnderstandQueryPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=AssistantSid" })
  assistantSid: string;
}


export class ListUnderstandQueryQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Language" })
  language?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=ModelBuild" })
  modelBuild?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Status" })
  status?: string;
}


export class ListUnderstandQuerySecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListUnderstandQueryRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: ListUnderstandQueryPathParams;

  @Metadata()
  queryParams: ListUnderstandQueryQueryParams;

  @Metadata()
  security: ListUnderstandQuerySecurity;
}


export class ListUnderstandQueryListUnderstandQueryResponseMeta extends SpeakeasyBase {
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


export class ListUnderstandQueryListUnderstandQueryResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=meta" })
  meta?: ListUnderstandQueryListUnderstandQueryResponseMeta;

  @Metadata({ data: "json, name=queries", elemType: shared.PreviewUnderstandAssistantQuery })
  queries?: shared.PreviewUnderstandAssistantQuery[];
}


export class ListUnderstandQueryResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listUnderstandQueryResponse?: ListUnderstandQueryListUnderstandQueryResponse;

  @Metadata()
  statusCode: number;
}

import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const LISTUNDERSTANDSAMPLE_SERVERS = [
	"https://preview.twilio.com",
];



export class ListUnderstandSamplePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=AssistantSid" })
  assistantSid: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=TaskSid" })
  taskSid: string;
}


export class ListUnderstandSampleQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Language" })
  language?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListUnderstandSampleSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListUnderstandSampleRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: ListUnderstandSamplePathParams;

  @Metadata()
  queryParams: ListUnderstandSampleQueryParams;

  @Metadata()
  security: ListUnderstandSampleSecurity;
}


export class ListUnderstandSampleListUnderstandSampleResponseMeta extends SpeakeasyBase {
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


export class ListUnderstandSampleListUnderstandSampleResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=meta" })
  meta?: ListUnderstandSampleListUnderstandSampleResponseMeta;

  @Metadata({ data: "json, name=samples", elemType: shared.PreviewUnderstandAssistantTaskSample })
  samples?: shared.PreviewUnderstandAssistantTaskSample[];
}


export class ListUnderstandSampleResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listUnderstandSampleResponse?: ListUnderstandSampleListUnderstandSampleResponse;

  @Metadata()
  statusCode: number;
}

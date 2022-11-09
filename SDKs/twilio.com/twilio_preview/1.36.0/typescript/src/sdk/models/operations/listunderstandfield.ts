import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const LISTUNDERSTANDFIELD_SERVERS = [
	"https://preview.twilio.com",
];



export class ListUnderstandFieldPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=AssistantSid" })
  assistantSid: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=TaskSid" })
  taskSid: string;
}


export class ListUnderstandFieldQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListUnderstandFieldSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListUnderstandFieldRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: ListUnderstandFieldPathParams;

  @Metadata()
  queryParams: ListUnderstandFieldQueryParams;

  @Metadata()
  security: ListUnderstandFieldSecurity;
}


export class ListUnderstandFieldListUnderstandFieldResponseMeta extends SpeakeasyBase {
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


export class ListUnderstandFieldListUnderstandFieldResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=fields", elemType: shared.PreviewUnderstandAssistantTaskField })
  fields?: shared.PreviewUnderstandAssistantTaskField[];

  @Metadata({ data: "json, name=meta" })
  meta?: ListUnderstandFieldListUnderstandFieldResponseMeta;
}


export class ListUnderstandFieldResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listUnderstandFieldResponse?: ListUnderstandFieldListUnderstandFieldResponse;

  @Metadata()
  statusCode: number;
}

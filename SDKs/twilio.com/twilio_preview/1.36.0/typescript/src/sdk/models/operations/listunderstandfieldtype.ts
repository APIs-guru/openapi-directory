import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const LISTUNDERSTANDFIELDTYPE_SERVERS = [
	"https://preview.twilio.com",
];



export class ListUnderstandFieldTypePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=AssistantSid" })
  assistantSid: string;
}


export class ListUnderstandFieldTypeQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListUnderstandFieldTypeSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListUnderstandFieldTypeRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: ListUnderstandFieldTypePathParams;

  @Metadata()
  queryParams: ListUnderstandFieldTypeQueryParams;

  @Metadata()
  security: ListUnderstandFieldTypeSecurity;
}


export class ListUnderstandFieldTypeListUnderstandFieldTypeResponseMeta extends SpeakeasyBase {
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


export class ListUnderstandFieldTypeListUnderstandFieldTypeResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=field_types", elemType: shared.PreviewUnderstandAssistantFieldType })
  fieldTypes?: shared.PreviewUnderstandAssistantFieldType[];

  @Metadata({ data: "json, name=meta" })
  meta?: ListUnderstandFieldTypeListUnderstandFieldTypeResponseMeta;
}


export class ListUnderstandFieldTypeResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listUnderstandFieldTypeResponse?: ListUnderstandFieldTypeListUnderstandFieldTypeResponse;

  @Metadata()
  statusCode: number;
}

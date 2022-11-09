import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const LISTUNDERSTANDFIELDVALUE_SERVERS = [
	"https://preview.twilio.com",
];



export class ListUnderstandFieldValuePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=AssistantSid" })
  assistantSid: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=FieldTypeSid" })
  fieldTypeSid: string;
}


export class ListUnderstandFieldValueQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Language" })
  language?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListUnderstandFieldValueSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListUnderstandFieldValueRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: ListUnderstandFieldValuePathParams;

  @Metadata()
  queryParams: ListUnderstandFieldValueQueryParams;

  @Metadata()
  security: ListUnderstandFieldValueSecurity;
}


export class ListUnderstandFieldValueListUnderstandFieldValueResponseMeta extends SpeakeasyBase {
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


export class ListUnderstandFieldValueListUnderstandFieldValueResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=field_values", elemType: shared.PreviewUnderstandAssistantFieldTypeFieldValue })
  fieldValues?: shared.PreviewUnderstandAssistantFieldTypeFieldValue[];

  @Metadata({ data: "json, name=meta" })
  meta?: ListUnderstandFieldValueListUnderstandFieldValueResponseMeta;
}


export class ListUnderstandFieldValueResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listUnderstandFieldValueResponse?: ListUnderstandFieldValueListUnderstandFieldValueResponse;

  @Metadata()
  statusCode: number;
}

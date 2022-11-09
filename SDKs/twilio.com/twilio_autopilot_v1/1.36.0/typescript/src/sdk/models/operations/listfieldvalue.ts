import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const LISTFIELDVALUE_SERVERS = [
	"https://autopilot.twilio.com",
];



export class ListFieldValuePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=AssistantSid" })
  assistantSid: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=FieldTypeSid" })
  fieldTypeSid: string;
}


export class ListFieldValueQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Language" })
  language?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListFieldValueSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListFieldValueRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: ListFieldValuePathParams;

  @Metadata()
  queryParams: ListFieldValueQueryParams;

  @Metadata()
  security: ListFieldValueSecurity;
}


export class ListFieldValueListFieldValueResponseMeta extends SpeakeasyBase {
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


export class ListFieldValueListFieldValueResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=field_values", elemType: shared.AutopilotV1AssistantFieldTypeFieldValue })
  fieldValues?: shared.AutopilotV1AssistantFieldTypeFieldValue[];

  @Metadata({ data: "json, name=meta" })
  meta?: ListFieldValueListFieldValueResponseMeta;
}


export class ListFieldValueResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listFieldValueResponse?: ListFieldValueListFieldValueResponse;

  @Metadata()
  statusCode: number;
}

import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const LISTFIELDTYPE_SERVERS = [
	"https://autopilot.twilio.com",
];



export class ListFieldTypePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=AssistantSid" })
  assistantSid: string;
}


export class ListFieldTypeQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListFieldTypeSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListFieldTypeRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: ListFieldTypePathParams;

  @Metadata()
  queryParams: ListFieldTypeQueryParams;

  @Metadata()
  security: ListFieldTypeSecurity;
}


export class ListFieldTypeListFieldTypeResponseMeta extends SpeakeasyBase {
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


export class ListFieldTypeListFieldTypeResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=field_types", elemType: shared.AutopilotV1AssistantFieldType })
  fieldTypes?: shared.AutopilotV1AssistantFieldType[];

  @Metadata({ data: "json, name=meta" })
  meta?: ListFieldTypeListFieldTypeResponseMeta;
}


export class ListFieldTypeResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listFieldTypeResponse?: ListFieldTypeListFieldTypeResponse;

  @Metadata()
  statusCode: number;
}

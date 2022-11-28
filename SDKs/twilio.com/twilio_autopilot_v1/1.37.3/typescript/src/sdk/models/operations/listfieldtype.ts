import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const ListFieldTypeServerList = [
	"https://autopilot.twilio.com",
] as const;


export class ListFieldTypePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=AssistantSid" })
  assistantSid: string;
}


export class ListFieldTypeQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListFieldTypeSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListFieldTypeListFieldTypeResponseMeta extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=first_page_url" })
  firstPageUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=key" })
  key?: string;

  @SpeakeasyMetadata({ data: "json, name=next_page_url" })
  nextPageUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "json, name=page_size" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "json, name=previous_page_url" })
  previousPageUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}


export class ListFieldTypeListFieldTypeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=field_types", elemType: shared.AutopilotV1AssistantFieldType })
  fieldTypes?: shared.AutopilotV1AssistantFieldType[];

  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta?: ListFieldTypeListFieldTypeResponseMeta;
}


export class ListFieldTypeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: ListFieldTypePathParams;

  @SpeakeasyMetadata()
  queryParams: ListFieldTypeQueryParams;

  @SpeakeasyMetadata()
  security: ListFieldTypeSecurity;
}


export class ListFieldTypeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  listFieldTypeResponse?: ListFieldTypeListFieldTypeResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}

import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const ListFieldValueServerList = [
	"https://autopilot.twilio.com",
] as const;


export class ListFieldValuePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=AssistantSid" })
  assistantSid: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=FieldTypeSid" })
  fieldTypeSid: string;
}


export class ListFieldValueQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Language" })
  language?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListFieldValueSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListFieldValueListFieldValueResponseMeta extends SpeakeasyBase {
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


export class ListFieldValueListFieldValueResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=field_values", elemType: shared.AutopilotV1AssistantFieldTypeFieldValue })
  fieldValues?: shared.AutopilotV1AssistantFieldTypeFieldValue[];

  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta?: ListFieldValueListFieldValueResponseMeta;
}


export class ListFieldValueRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: ListFieldValuePathParams;

  @SpeakeasyMetadata()
  queryParams: ListFieldValueQueryParams;

  @SpeakeasyMetadata()
  security: ListFieldValueSecurity;
}


export class ListFieldValueResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  listFieldValueResponse?: ListFieldValueListFieldValueResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}

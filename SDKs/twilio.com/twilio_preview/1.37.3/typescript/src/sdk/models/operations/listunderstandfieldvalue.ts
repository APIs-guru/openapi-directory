import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const ListUnderstandFieldValueServerList = [
	"https://preview.twilio.com",
] as const;


export class ListUnderstandFieldValuePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=AssistantSid" })
  assistantSid: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=FieldTypeSid" })
  fieldTypeSid: string;
}


export class ListUnderstandFieldValueQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Language" })
  language?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListUnderstandFieldValueSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListUnderstandFieldValueListUnderstandFieldValueResponseMeta extends SpeakeasyBase {
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


export class ListUnderstandFieldValueListUnderstandFieldValueResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=field_values", elemType: shared.PreviewUnderstandAssistantFieldTypeFieldValue })
  fieldValues?: shared.PreviewUnderstandAssistantFieldTypeFieldValue[];

  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta?: ListUnderstandFieldValueListUnderstandFieldValueResponseMeta;
}


export class ListUnderstandFieldValueRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: ListUnderstandFieldValuePathParams;

  @SpeakeasyMetadata()
  queryParams: ListUnderstandFieldValueQueryParams;

  @SpeakeasyMetadata()
  security: ListUnderstandFieldValueSecurity;
}


export class ListUnderstandFieldValueResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  listUnderstandFieldValueResponse?: ListUnderstandFieldValueListUnderstandFieldValueResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}

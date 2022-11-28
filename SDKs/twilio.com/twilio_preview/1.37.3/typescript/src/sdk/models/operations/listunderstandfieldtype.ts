import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const ListUnderstandFieldTypeServerList = [
	"https://preview.twilio.com",
] as const;


export class ListUnderstandFieldTypePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=AssistantSid" })
  assistantSid: string;
}


export class ListUnderstandFieldTypeQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListUnderstandFieldTypeSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListUnderstandFieldTypeListUnderstandFieldTypeResponseMeta extends SpeakeasyBase {
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


export class ListUnderstandFieldTypeListUnderstandFieldTypeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=field_types", elemType: shared.PreviewUnderstandAssistantFieldType })
  fieldTypes?: shared.PreviewUnderstandAssistantFieldType[];

  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta?: ListUnderstandFieldTypeListUnderstandFieldTypeResponseMeta;
}


export class ListUnderstandFieldTypeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: ListUnderstandFieldTypePathParams;

  @SpeakeasyMetadata()
  queryParams: ListUnderstandFieldTypeQueryParams;

  @SpeakeasyMetadata()
  security: ListUnderstandFieldTypeSecurity;
}


export class ListUnderstandFieldTypeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  listUnderstandFieldTypeResponse?: ListUnderstandFieldTypeListUnderstandFieldTypeResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}

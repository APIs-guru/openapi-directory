import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const ListUnderstandFieldServerList = [
	"https://preview.twilio.com",
] as const;


export class ListUnderstandFieldPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=AssistantSid" })
  assistantSid: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=TaskSid" })
  taskSid: string;
}


export class ListUnderstandFieldQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListUnderstandFieldSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListUnderstandFieldListUnderstandFieldResponseMeta extends SpeakeasyBase {
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


export class ListUnderstandFieldListUnderstandFieldResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=fields", elemType: shared.PreviewUnderstandAssistantTaskField })
  fields?: shared.PreviewUnderstandAssistantTaskField[];

  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta?: ListUnderstandFieldListUnderstandFieldResponseMeta;
}


export class ListUnderstandFieldRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: ListUnderstandFieldPathParams;

  @SpeakeasyMetadata()
  queryParams: ListUnderstandFieldQueryParams;

  @SpeakeasyMetadata()
  security: ListUnderstandFieldSecurity;
}


export class ListUnderstandFieldResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  listUnderstandFieldResponse?: ListUnderstandFieldListUnderstandFieldResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}

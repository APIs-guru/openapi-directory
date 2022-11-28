import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const ListUnderstandAssistantServerList = [
	"https://preview.twilio.com",
] as const;


export class ListUnderstandAssistantQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListUnderstandAssistantSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListUnderstandAssistantListUnderstandAssistantResponseMeta extends SpeakeasyBase {
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


export class ListUnderstandAssistantListUnderstandAssistantResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=assistants", elemType: shared.PreviewUnderstandAssistant })
  assistants?: shared.PreviewUnderstandAssistant[];

  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta?: ListUnderstandAssistantListUnderstandAssistantResponseMeta;
}


export class ListUnderstandAssistantRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  queryParams: ListUnderstandAssistantQueryParams;

  @SpeakeasyMetadata()
  security: ListUnderstandAssistantSecurity;
}


export class ListUnderstandAssistantResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  listUnderstandAssistantResponse?: ListUnderstandAssistantListUnderstandAssistantResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}

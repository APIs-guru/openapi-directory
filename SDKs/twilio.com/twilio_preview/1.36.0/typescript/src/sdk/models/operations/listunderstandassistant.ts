import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const LISTUNDERSTANDASSISTANT_SERVERS = [
	"https://preview.twilio.com",
];



export class ListUnderstandAssistantQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListUnderstandAssistantSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListUnderstandAssistantRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  queryParams: ListUnderstandAssistantQueryParams;

  @Metadata()
  security: ListUnderstandAssistantSecurity;
}


export class ListUnderstandAssistantListUnderstandAssistantResponseMeta extends SpeakeasyBase {
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


export class ListUnderstandAssistantListUnderstandAssistantResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=assistants", elemType: shared.PreviewUnderstandAssistant })
  assistants?: shared.PreviewUnderstandAssistant[];

  @Metadata({ data: "json, name=meta" })
  meta?: ListUnderstandAssistantListUnderstandAssistantResponseMeta;
}


export class ListUnderstandAssistantResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listUnderstandAssistantResponse?: ListUnderstandAssistantListUnderstandAssistantResponse;

  @Metadata()
  statusCode: number;
}

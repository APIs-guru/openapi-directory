import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const LISTASSISTANT_SERVERS = [
	"https://autopilot.twilio.com",
];



export class ListAssistantQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListAssistantSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListAssistantRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  queryParams: ListAssistantQueryParams;

  @Metadata()
  security: ListAssistantSecurity;
}


export class ListAssistantListAssistantResponseMeta extends SpeakeasyBase {
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


export class ListAssistantListAssistantResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=assistants", elemType: shared.AutopilotV1Assistant })
  assistants?: shared.AutopilotV1Assistant[];

  @Metadata({ data: "json, name=meta" })
  meta?: ListAssistantListAssistantResponseMeta;
}


export class ListAssistantResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listAssistantResponse?: ListAssistantListAssistantResponse;

  @Metadata()
  statusCode: number;
}

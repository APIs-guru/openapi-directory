import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const ListAssistantServerList = [
	"https://autopilot.twilio.com",
] as const;


export class ListAssistantQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListAssistantSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListAssistantListAssistantResponseMeta extends SpeakeasyBase {
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


export class ListAssistantListAssistantResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=assistants", elemType: shared.AutopilotV1Assistant })
  assistants?: shared.AutopilotV1Assistant[];

  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta?: ListAssistantListAssistantResponseMeta;
}


export class ListAssistantRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  queryParams: ListAssistantQueryParams;

  @SpeakeasyMetadata()
  security: ListAssistantSecurity;
}


export class ListAssistantResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  listAssistantResponse?: ListAssistantListAssistantResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}

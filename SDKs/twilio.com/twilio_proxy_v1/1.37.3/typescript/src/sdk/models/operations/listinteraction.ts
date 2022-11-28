import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const ListInteractionServerList = [
	"https://proxy.twilio.com",
] as const;


export class ListInteractionPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" })
  serviceSid: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=SessionSid" })
  sessionSid: string;
}


export class ListInteractionQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListInteractionSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListInteractionListInteractionResponseMeta extends SpeakeasyBase {
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


export class ListInteractionListInteractionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=interactions", elemType: shared.ProxyV1ServiceSessionInteraction })
  interactions?: shared.ProxyV1ServiceSessionInteraction[];

  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta?: ListInteractionListInteractionResponseMeta;
}


export class ListInteractionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: ListInteractionPathParams;

  @SpeakeasyMetadata()
  queryParams: ListInteractionQueryParams;

  @SpeakeasyMetadata()
  security: ListInteractionSecurity;
}


export class ListInteractionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  listInteractionResponse?: ListInteractionListInteractionResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}

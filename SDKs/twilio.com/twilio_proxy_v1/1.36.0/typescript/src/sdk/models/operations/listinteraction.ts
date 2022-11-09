import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const LISTINTERACTION_SERVERS = [
	"https://proxy.twilio.com",
];



export class ListInteractionPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" })
  serviceSid: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=SessionSid" })
  sessionSid: string;
}


export class ListInteractionQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListInteractionSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListInteractionRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: ListInteractionPathParams;

  @Metadata()
  queryParams: ListInteractionQueryParams;

  @Metadata()
  security: ListInteractionSecurity;
}


export class ListInteractionListInteractionResponseMeta extends SpeakeasyBase {
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


export class ListInteractionListInteractionResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=interactions", elemType: shared.ProxyV1ServiceSessionInteraction })
  interactions?: shared.ProxyV1ServiceSessionInteraction[];

  @Metadata({ data: "json, name=meta" })
  meta?: ListInteractionListInteractionResponseMeta;
}


export class ListInteractionResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listInteractionResponse?: ListInteractionListInteractionResponse;

  @Metadata()
  statusCode: number;
}

import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const LISTMESSAGEINTERACTION_SERVERS = [
	"https://proxy.twilio.com",
];



export class ListMessageInteractionPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=ParticipantSid" })
  participantSid: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" })
  serviceSid: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=SessionSid" })
  sessionSid: string;
}


export class ListMessageInteractionQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListMessageInteractionSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListMessageInteractionRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: ListMessageInteractionPathParams;

  @Metadata()
  queryParams: ListMessageInteractionQueryParams;

  @Metadata()
  security: ListMessageInteractionSecurity;
}


export class ListMessageInteractionListMessageInteractionResponseMeta extends SpeakeasyBase {
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


export class ListMessageInteractionListMessageInteractionResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=interactions", elemType: shared.ProxyV1ServiceSessionParticipantMessageInteraction })
  interactions?: shared.ProxyV1ServiceSessionParticipantMessageInteraction[];

  @Metadata({ data: "json, name=meta" })
  meta?: ListMessageInteractionListMessageInteractionResponseMeta;
}


export class ListMessageInteractionResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listMessageInteractionResponse?: ListMessageInteractionListMessageInteractionResponse;

  @Metadata()
  statusCode: number;
}

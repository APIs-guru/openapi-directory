import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const LISTPARTICIPANT_SERVERS = [
	"https://proxy.twilio.com",
];



export class ListParticipantPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" })
  serviceSid: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=SessionSid" })
  sessionSid: string;
}


export class ListParticipantQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;
}


export class ListParticipantSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListParticipantRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: ListParticipantPathParams;

  @Metadata()
  queryParams: ListParticipantQueryParams;

  @Metadata()
  security: ListParticipantSecurity;
}


export class ListParticipantListParticipantResponseMeta extends SpeakeasyBase {
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


export class ListParticipantListParticipantResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=meta" })
  meta?: ListParticipantListParticipantResponseMeta;

  @Metadata({ data: "json, name=participants", elemType: shared.ProxyV1ServiceSessionParticipant })
  participants?: shared.ProxyV1ServiceSessionParticipant[];
}


export class ListParticipantResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listParticipantResponse?: ListParticipantListParticipantResponse;

  @Metadata()
  statusCode: number;
}

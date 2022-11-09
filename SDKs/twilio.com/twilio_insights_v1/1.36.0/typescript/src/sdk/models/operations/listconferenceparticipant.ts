import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const LISTCONFERENCEPARTICIPANT_SERVERS = [
	"https://insights.twilio.com",
];



export class ListConferenceParticipantPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=ConferenceSid" })
  conferenceSid: string;
}


export class ListConferenceParticipantQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Events" })
  events?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Label" })
  label?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=ParticipantSid" })
  participantSid?: string;
}


export class ListConferenceParticipantSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListConferenceParticipantRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: ListConferenceParticipantPathParams;

  @Metadata()
  queryParams: ListConferenceParticipantQueryParams;

  @Metadata()
  security: ListConferenceParticipantSecurity;
}


export class ListConferenceParticipantListConferenceParticipantResponseMeta extends SpeakeasyBase {
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


export class ListConferenceParticipantListConferenceParticipantResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=meta" })
  meta?: ListConferenceParticipantListConferenceParticipantResponseMeta;

  @Metadata({ data: "json, name=participants", elemType: shared.InsightsV1ConferenceConferenceParticipant })
  participants?: shared.InsightsV1ConferenceConferenceParticipant[];
}


export class ListConferenceParticipantResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listConferenceParticipantResponse?: ListConferenceParticipantListConferenceParticipantResponse;

  @Metadata()
  statusCode: number;
}

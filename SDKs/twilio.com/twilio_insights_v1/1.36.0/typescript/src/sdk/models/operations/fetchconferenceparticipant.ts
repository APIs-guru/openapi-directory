import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const FETCHCONFERENCEPARTICIPANT_SERVERS = [
	"https://insights.twilio.com",
];



export class FetchConferenceParticipantPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=ConferenceSid" })
  conferenceSid: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=ParticipantSid" })
  participantSid: string;
}


export class FetchConferenceParticipantQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Events" })
  events?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Metrics" })
  metrics?: string;
}


export class FetchConferenceParticipantSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class FetchConferenceParticipantRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: FetchConferenceParticipantPathParams;

  @Metadata()
  queryParams: FetchConferenceParticipantQueryParams;

  @Metadata()
  security: FetchConferenceParticipantSecurity;
}


export class FetchConferenceParticipantResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  insightsV1ConferenceConferenceParticipant?: shared.InsightsV1ConferenceConferenceParticipant;
}

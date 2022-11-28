import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const FetchConferenceParticipantServerList = [
	"https://insights.twilio.com",
] as const;


export class FetchConferenceParticipantPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ConferenceSid" })
  conferenceSid: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ParticipantSid" })
  participantSid: string;
}


export class FetchConferenceParticipantQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Events" })
  events?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Metrics" })
  metrics?: string;
}


export class FetchConferenceParticipantSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class FetchConferenceParticipantRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: FetchConferenceParticipantPathParams;

  @SpeakeasyMetadata()
  queryParams: FetchConferenceParticipantQueryParams;

  @SpeakeasyMetadata()
  security: FetchConferenceParticipantSecurity;
}


export class FetchConferenceParticipantResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  insightsV1ConferenceConferenceParticipant?: shared.InsightsV1ConferenceConferenceParticipant;
}

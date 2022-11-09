import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const FETCHVIDEOPARTICIPANTSUMMARY_SERVERS = [
	"https://insights.twilio.com",
];



export class FetchVideoParticipantSummaryPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=ParticipantSid" })
  participantSid: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=RoomSid" })
  roomSid: string;
}


export class FetchVideoParticipantSummarySecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class FetchVideoParticipantSummaryRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: FetchVideoParticipantSummaryPathParams;

  @Metadata()
  security: FetchVideoParticipantSummarySecurity;
}


export class FetchVideoParticipantSummaryResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  insightsV1VideoRoomSummaryVideoParticipantSummary?: shared.InsightsV1VideoRoomSummaryVideoParticipantSummary;
}

import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const FETCHROOMPARTICIPANTSUBSCRIBERULE_SERVERS = [
	"https://video.twilio.com",
];



export class FetchRoomParticipantSubscribeRulePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=ParticipantSid" })
  participantSid: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=RoomSid" })
  roomSid: string;
}


export class FetchRoomParticipantSubscribeRuleSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class FetchRoomParticipantSubscribeRuleRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: FetchRoomParticipantSubscribeRulePathParams;

  @Metadata()
  security: FetchRoomParticipantSubscribeRuleSecurity;
}


export class FetchRoomParticipantSubscribeRuleResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  videoV1RoomRoomParticipantRoomParticipantSubscribeRule?: shared.VideoV1RoomRoomParticipantRoomParticipantSubscribeRule;
}

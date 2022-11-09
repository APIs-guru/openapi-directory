import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const UPDATEROOMPARTICIPANTSUBSCRIBERULE_SERVERS = [
	"https://video.twilio.com",
];



export class UpdateRoomParticipantSubscribeRulePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=ParticipantSid" })
  participantSid: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=RoomSid" })
  roomSid: string;
}


export class UpdateRoomParticipantSubscribeRuleUpdateRoomParticipantSubscribeRuleRequest extends SpeakeasyBase {
  @Metadata({ data: "form, name=Rules;" })
  rules?: any;
}


export class UpdateRoomParticipantSubscribeRuleSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class UpdateRoomParticipantSubscribeRuleRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: UpdateRoomParticipantSubscribeRulePathParams;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: UpdateRoomParticipantSubscribeRuleUpdateRoomParticipantSubscribeRuleRequest;

  @Metadata()
  security: UpdateRoomParticipantSubscribeRuleSecurity;
}


export class UpdateRoomParticipantSubscribeRuleResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  videoV1RoomRoomParticipantRoomParticipantSubscribeRule?: shared.VideoV1RoomRoomParticipantRoomParticipantSubscribeRule;
}

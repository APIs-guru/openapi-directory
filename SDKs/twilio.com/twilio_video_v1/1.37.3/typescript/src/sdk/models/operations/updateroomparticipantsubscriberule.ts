import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const UpdateRoomParticipantSubscribeRuleServerList = [
	"https://video.twilio.com",
] as const;


export class UpdateRoomParticipantSubscribeRulePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ParticipantSid" })
  participantSid: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=RoomSid" })
  roomSid: string;
}


export class UpdateRoomParticipantSubscribeRuleUpdateRoomParticipantSubscribeRuleRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=Rules;" })
  rules?: any;
}


export class UpdateRoomParticipantSubscribeRuleSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class UpdateRoomParticipantSubscribeRuleRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: UpdateRoomParticipantSubscribeRulePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: UpdateRoomParticipantSubscribeRuleUpdateRoomParticipantSubscribeRuleRequest;

  @SpeakeasyMetadata()
  security: UpdateRoomParticipantSubscribeRuleSecurity;
}


export class UpdateRoomParticipantSubscribeRuleResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  videoV1RoomRoomParticipantRoomParticipantSubscribeRule?: shared.VideoV1RoomRoomParticipantRoomParticipantSubscribeRule;
}

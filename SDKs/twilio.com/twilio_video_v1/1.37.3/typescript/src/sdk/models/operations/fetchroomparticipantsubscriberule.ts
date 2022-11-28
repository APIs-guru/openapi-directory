import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const FetchRoomParticipantSubscribeRuleServerList = [
	"https://video.twilio.com",
] as const;


export class FetchRoomParticipantSubscribeRulePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ParticipantSid" })
  participantSid: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=RoomSid" })
  roomSid: string;
}


export class FetchRoomParticipantSubscribeRuleSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class FetchRoomParticipantSubscribeRuleRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: FetchRoomParticipantSubscribeRulePathParams;

  @SpeakeasyMetadata()
  security: FetchRoomParticipantSubscribeRuleSecurity;
}


export class FetchRoomParticipantSubscribeRuleResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  videoV1RoomRoomParticipantRoomParticipantSubscribeRule?: shared.VideoV1RoomRoomParticipantRoomParticipantSubscribeRule;
}

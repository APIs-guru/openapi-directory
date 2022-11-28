import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class VideoV1RoomRoomParticipantRoomParticipantSubscribeRuleRules extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=all" })
  all?: boolean;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=priority" })
  priority?: string;

  @SpeakeasyMetadata({ data: "json, name=publisher" })
  publisher?: string;

  @SpeakeasyMetadata({ data: "json, name=track" })
  track?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}


export class VideoV1RoomRoomParticipantRoomParticipantSubscribeRule extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=date_created" })
  dateCreated?: Date;

  @SpeakeasyMetadata({ data: "json, name=date_updated" })
  dateUpdated?: Date;

  @SpeakeasyMetadata({ data: "json, name=participant_sid" })
  participantSid?: string;

  @SpeakeasyMetadata({ data: "json, name=room_sid" })
  roomSid?: string;

  @SpeakeasyMetadata({ data: "json, name=rules", elemType: VideoV1RoomRoomParticipantRoomParticipantSubscribeRuleRules })
  rules?: VideoV1RoomRoomParticipantRoomParticipantSubscribeRuleRules[];
}

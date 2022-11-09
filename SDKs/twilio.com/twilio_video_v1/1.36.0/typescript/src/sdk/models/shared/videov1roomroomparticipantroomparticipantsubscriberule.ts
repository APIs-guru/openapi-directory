import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class VideoV1RoomRoomParticipantRoomParticipantSubscribeRuleRules extends SpeakeasyBase {
  @Metadata({ data: "json, name=all" })
  all?: boolean;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=priority" })
  priority?: string;

  @Metadata({ data: "json, name=publisher" })
  publisher?: string;

  @Metadata({ data: "json, name=track" })
  track?: string;

  @Metadata({ data: "json, name=type" })
  type?: string;
}


export class VideoV1RoomRoomParticipantRoomParticipantSubscribeRule extends SpeakeasyBase {
  @Metadata({ data: "json, name=date_created" })
  dateCreated?: Date;

  @Metadata({ data: "json, name=date_updated" })
  dateUpdated?: Date;

  @Metadata({ data: "json, name=participant_sid" })
  participantSid?: string;

  @Metadata({ data: "json, name=room_sid" })
  roomSid?: string;

  @Metadata({ data: "json, name=rules", elemType: shared.VideoV1RoomRoomParticipantRoomParticipantSubscribeRuleRules })
  rules?: VideoV1RoomRoomParticipantRoomParticipantSubscribeRuleRules[];
}

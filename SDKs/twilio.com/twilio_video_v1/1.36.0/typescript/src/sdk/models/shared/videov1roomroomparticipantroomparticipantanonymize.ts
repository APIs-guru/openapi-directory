import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { RoomParticipantAnonymizeEnumStatusEnum } from "./roomparticipantanonymizeenumstatusenum";


export class VideoV1RoomRoomParticipantRoomParticipantAnonymize extends SpeakeasyBase {
  @Metadata({ data: "json, name=account_sid" })
  accountSid?: string;

  @Metadata({ data: "json, name=date_created" })
  dateCreated?: Date;

  @Metadata({ data: "json, name=date_updated" })
  dateUpdated?: Date;

  @Metadata({ data: "json, name=duration" })
  duration?: number;

  @Metadata({ data: "json, name=end_time" })
  endTime?: Date;

  @Metadata({ data: "json, name=identity" })
  identity?: string;

  @Metadata({ data: "json, name=room_sid" })
  roomSid?: string;

  @Metadata({ data: "json, name=sid" })
  sid?: string;

  @Metadata({ data: "json, name=start_time" })
  startTime?: Date;

  @Metadata({ data: "json, name=status" })
  status?: RoomParticipantAnonymizeEnumStatusEnum;

  @Metadata({ data: "json, name=url" })
  url?: string;
}

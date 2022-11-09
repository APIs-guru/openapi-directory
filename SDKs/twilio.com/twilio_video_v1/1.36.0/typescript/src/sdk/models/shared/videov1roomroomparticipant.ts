import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { RoomParticipantEnumStatusEnum } from "./roomparticipantenumstatusenum";


export class VideoV1RoomRoomParticipant extends SpeakeasyBase {
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

  @Metadata({ data: "json, name=links" })
  links?: Map<string, any>;

  @Metadata({ data: "json, name=room_sid" })
  roomSid?: string;

  @Metadata({ data: "json, name=sid" })
  sid?: string;

  @Metadata({ data: "json, name=start_time" })
  startTime?: Date;

  @Metadata({ data: "json, name=status" })
  status?: RoomParticipantEnumStatusEnum;

  @Metadata({ data: "json, name=url" })
  url?: string;
}

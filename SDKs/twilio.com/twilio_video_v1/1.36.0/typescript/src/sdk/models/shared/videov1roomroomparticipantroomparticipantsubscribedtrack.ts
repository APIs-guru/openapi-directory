import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { RoomParticipantSubscribedTrackEnumKindEnum } from "./roomparticipantsubscribedtrackenumkindenum";


export class VideoV1RoomRoomParticipantRoomParticipantSubscribedTrack extends SpeakeasyBase {
  @Metadata({ data: "json, name=date_created" })
  dateCreated?: Date;

  @Metadata({ data: "json, name=date_updated" })
  dateUpdated?: Date;

  @Metadata({ data: "json, name=enabled" })
  enabled?: boolean;

  @Metadata({ data: "json, name=kind" })
  kind?: RoomParticipantSubscribedTrackEnumKindEnum;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=participant_sid" })
  participantSid?: string;

  @Metadata({ data: "json, name=publisher_sid" })
  publisherSid?: string;

  @Metadata({ data: "json, name=room_sid" })
  roomSid?: string;

  @Metadata({ data: "json, name=sid" })
  sid?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;
}

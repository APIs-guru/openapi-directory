import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RoomParticipantSubscribedTrackEnumKindEnum } from "./roomparticipantsubscribedtrackenumkindenum";



export class VideoV1RoomRoomParticipantRoomParticipantSubscribedTrack extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=date_created" })
  dateCreated?: Date;

  @SpeakeasyMetadata({ data: "json, name=date_updated" })
  dateUpdated?: Date;

  @SpeakeasyMetadata({ data: "json, name=enabled" })
  enabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: RoomParticipantSubscribedTrackEnumKindEnum;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=participant_sid" })
  participantSid?: string;

  @SpeakeasyMetadata({ data: "json, name=publisher_sid" })
  publisherSid?: string;

  @SpeakeasyMetadata({ data: "json, name=room_sid" })
  roomSid?: string;

  @SpeakeasyMetadata({ data: "json, name=sid" })
  sid?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}

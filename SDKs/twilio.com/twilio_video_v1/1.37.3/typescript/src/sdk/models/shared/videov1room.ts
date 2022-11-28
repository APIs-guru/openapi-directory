import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RoomEnumRoomStatusEnum } from "./roomenumroomstatusenum";
import { RoomEnumRoomTypeEnum } from "./roomenumroomtypeenum";
import { RoomEnumVideoCodecEnum } from "./roomenumvideocodecenum";


export enum VideoV1RoomStatusCallbackMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}


export class VideoV1Room extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=account_sid" })
  accountSid?: string;

  @SpeakeasyMetadata({ data: "json, name=audio_only" })
  audioOnly?: boolean;

  @SpeakeasyMetadata({ data: "json, name=date_created" })
  dateCreated?: Date;

  @SpeakeasyMetadata({ data: "json, name=date_updated" })
  dateUpdated?: Date;

  @SpeakeasyMetadata({ data: "json, name=duration" })
  duration?: number;

  @SpeakeasyMetadata({ data: "json, name=empty_room_timeout" })
  emptyRoomTimeout?: number;

  @SpeakeasyMetadata({ data: "json, name=enable_turn" })
  enableTurn?: boolean;

  @SpeakeasyMetadata({ data: "json, name=end_time" })
  endTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=large_room" })
  largeRoom?: boolean;

  @SpeakeasyMetadata({ data: "json, name=links" })
  links?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=max_concurrent_published_tracks" })
  maxConcurrentPublishedTracks?: number;

  @SpeakeasyMetadata({ data: "json, name=max_participant_duration" })
  maxParticipantDuration?: number;

  @SpeakeasyMetadata({ data: "json, name=max_participants" })
  maxParticipants?: number;

  @SpeakeasyMetadata({ data: "json, name=media_region" })
  mediaRegion?: string;

  @SpeakeasyMetadata({ data: "json, name=record_participants_on_connect" })
  recordParticipantsOnConnect?: boolean;

  @SpeakeasyMetadata({ data: "json, name=sid" })
  sid?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: RoomEnumRoomStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=status_callback" })
  statusCallback?: string;

  @SpeakeasyMetadata({ data: "json, name=status_callback_method" })
  statusCallbackMethod?: VideoV1RoomStatusCallbackMethodEnum;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: RoomEnumRoomTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=unique_name" })
  uniqueName?: string;

  @SpeakeasyMetadata({ data: "json, name=unused_room_timeout" })
  unusedRoomTimeout?: number;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;

  @SpeakeasyMetadata({ data: "json, name=video_codecs" })
  videoCodecs?: RoomEnumVideoCodecEnum[];
}

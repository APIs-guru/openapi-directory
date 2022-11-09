import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { RoomEnumRoomStatusEnum } from "./roomenumroomstatusenum";
import { RoomEnumRoomTypeEnum } from "./roomenumroomtypeenum";
import { RoomEnumVideoCodecEnum } from "./roomenumvideocodecenum";

export enum VideoV1RoomStatusCallbackMethodEnum {
    Head = "HEAD"
,    Get = "GET"
,    Post = "POST"
,    Patch = "PATCH"
,    Put = "PUT"
,    Delete = "DELETE"
}


export class VideoV1Room extends SpeakeasyBase {
  @Metadata({ data: "json, name=account_sid" })
  accountSid?: string;

  @Metadata({ data: "json, name=audio_only" })
  audioOnly?: boolean;

  @Metadata({ data: "json, name=date_created" })
  dateCreated?: Date;

  @Metadata({ data: "json, name=date_updated" })
  dateUpdated?: Date;

  @Metadata({ data: "json, name=duration" })
  duration?: number;

  @Metadata({ data: "json, name=empty_room_timeout" })
  emptyRoomTimeout?: number;

  @Metadata({ data: "json, name=enable_turn" })
  enableTurn?: boolean;

  @Metadata({ data: "json, name=end_time" })
  endTime?: Date;

  @Metadata({ data: "json, name=large_room" })
  largeRoom?: boolean;

  @Metadata({ data: "json, name=links" })
  links?: Map<string, any>;

  @Metadata({ data: "json, name=max_concurrent_published_tracks" })
  maxConcurrentPublishedTracks?: number;

  @Metadata({ data: "json, name=max_participant_duration" })
  maxParticipantDuration?: number;

  @Metadata({ data: "json, name=max_participants" })
  maxParticipants?: number;

  @Metadata({ data: "json, name=media_region" })
  mediaRegion?: string;

  @Metadata({ data: "json, name=record_participants_on_connect" })
  recordParticipantsOnConnect?: boolean;

  @Metadata({ data: "json, name=sid" })
  sid?: string;

  @Metadata({ data: "json, name=status" })
  status?: RoomEnumRoomStatusEnum;

  @Metadata({ data: "json, name=status_callback" })
  statusCallback?: string;

  @Metadata({ data: "json, name=status_callback_method" })
  statusCallbackMethod?: VideoV1RoomStatusCallbackMethodEnum;

  @Metadata({ data: "json, name=type" })
  type?: RoomEnumRoomTypeEnum;

  @Metadata({ data: "json, name=unique_name" })
  uniqueName?: string;

  @Metadata({ data: "json, name=unused_room_timeout" })
  unusedRoomTimeout?: number;

  @Metadata({ data: "json, name=url" })
  url?: string;

  @Metadata({ data: "json, name=video_codecs" })
  videoCodecs?: RoomEnumVideoCodecEnum[];
}

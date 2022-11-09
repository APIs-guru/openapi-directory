import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { RoomRecordingEnumCodecEnum } from "./roomrecordingenumcodecenum";
import { RoomRecordingEnumFormatEnum } from "./roomrecordingenumformatenum";
import { RoomRecordingEnumStatusEnum } from "./roomrecordingenumstatusenum";
import { RoomRecordingEnumTypeEnum } from "./roomrecordingenumtypeenum";


export class VideoV1RoomRoomRecording extends SpeakeasyBase {
  @Metadata({ data: "json, name=account_sid" })
  accountSid?: string;

  @Metadata({ data: "json, name=codec" })
  codec?: RoomRecordingEnumCodecEnum;

  @Metadata({ data: "json, name=container_format" })
  containerFormat?: RoomRecordingEnumFormatEnum;

  @Metadata({ data: "json, name=date_created" })
  dateCreated?: Date;

  @Metadata({ data: "json, name=duration" })
  duration?: number;

  @Metadata({ data: "json, name=grouping_sids" })
  groupingSids?: any;

  @Metadata({ data: "json, name=links" })
  links?: Map<string, any>;

  @Metadata({ data: "json, name=media_external_location" })
  mediaExternalLocation?: string;

  @Metadata({ data: "json, name=offset" })
  offset?: number;

  @Metadata({ data: "json, name=room_sid" })
  roomSid?: string;

  @Metadata({ data: "json, name=sid" })
  sid?: string;

  @Metadata({ data: "json, name=size" })
  size?: number;

  @Metadata({ data: "json, name=source_sid" })
  sourceSid?: string;

  @Metadata({ data: "json, name=status" })
  status?: RoomRecordingEnumStatusEnum;

  @Metadata({ data: "json, name=track_name" })
  trackName?: string;

  @Metadata({ data: "json, name=type" })
  type?: RoomRecordingEnumTypeEnum;

  @Metadata({ data: "json, name=url" })
  url?: string;
}

import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RoomRecordingEnumCodecEnum } from "./roomrecordingenumcodecenum";
import { RoomRecordingEnumFormatEnum } from "./roomrecordingenumformatenum";
import { RoomRecordingEnumStatusEnum } from "./roomrecordingenumstatusenum";
import { RoomRecordingEnumTypeEnum } from "./roomrecordingenumtypeenum";



export class VideoV1RoomRoomRecording extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=account_sid" })
  accountSid?: string;

  @SpeakeasyMetadata({ data: "json, name=codec" })
  codec?: RoomRecordingEnumCodecEnum;

  @SpeakeasyMetadata({ data: "json, name=container_format" })
  containerFormat?: RoomRecordingEnumFormatEnum;

  @SpeakeasyMetadata({ data: "json, name=date_created" })
  dateCreated?: Date;

  @SpeakeasyMetadata({ data: "json, name=duration" })
  duration?: number;

  @SpeakeasyMetadata({ data: "json, name=grouping_sids" })
  groupingSids?: any;

  @SpeakeasyMetadata({ data: "json, name=links" })
  links?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=media_external_location" })
  mediaExternalLocation?: string;

  @SpeakeasyMetadata({ data: "json, name=offset" })
  offset?: number;

  @SpeakeasyMetadata({ data: "json, name=room_sid" })
  roomSid?: string;

  @SpeakeasyMetadata({ data: "json, name=sid" })
  sid?: string;

  @SpeakeasyMetadata({ data: "json, name=size" })
  size?: number;

  @SpeakeasyMetadata({ data: "json, name=source_sid" })
  sourceSid?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: RoomRecordingEnumStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=track_name" })
  trackName?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: RoomRecordingEnumTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}

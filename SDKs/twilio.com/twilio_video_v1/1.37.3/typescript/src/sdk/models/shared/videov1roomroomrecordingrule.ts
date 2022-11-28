import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class VideoV1RoomRoomRecordingRuleRules extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=all" })
  all?: boolean;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=publisher" })
  publisher?: string;

  @SpeakeasyMetadata({ data: "json, name=track" })
  track?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}


export class VideoV1RoomRoomRecordingRule extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=date_created" })
  dateCreated?: Date;

  @SpeakeasyMetadata({ data: "json, name=date_updated" })
  dateUpdated?: Date;

  @SpeakeasyMetadata({ data: "json, name=room_sid" })
  roomSid?: string;

  @SpeakeasyMetadata({ data: "json, name=rules", elemType: VideoV1RoomRoomRecordingRuleRules })
  rules?: VideoV1RoomRoomRecordingRuleRules[];
}

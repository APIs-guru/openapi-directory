import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class VideoV1RoomRoomRecordingRuleRules extends SpeakeasyBase {
  @Metadata({ data: "json, name=all" })
  all?: boolean;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=publisher" })
  publisher?: string;

  @Metadata({ data: "json, name=track" })
  track?: string;

  @Metadata({ data: "json, name=type" })
  type?: string;
}


export class VideoV1RoomRoomRecordingRule extends SpeakeasyBase {
  @Metadata({ data: "json, name=date_created" })
  dateCreated?: Date;

  @Metadata({ data: "json, name=date_updated" })
  dateUpdated?: Date;

  @Metadata({ data: "json, name=room_sid" })
  roomSid?: string;

  @Metadata({ data: "json, name=rules", elemType: shared.VideoV1RoomRoomRecordingRuleRules })
  rules?: VideoV1RoomRoomRecordingRuleRules[];
}

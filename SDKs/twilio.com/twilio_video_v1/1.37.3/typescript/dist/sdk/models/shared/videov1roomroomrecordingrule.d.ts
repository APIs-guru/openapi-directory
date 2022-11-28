import { SpeakeasyBase } from "../../../internal/utils";
export declare class VideoV1RoomRoomRecordingRuleRules extends SpeakeasyBase {
    all?: boolean;
    kind?: string;
    publisher?: string;
    track?: string;
    type?: string;
}
export declare class VideoV1RoomRoomRecordingRule extends SpeakeasyBase {
    dateCreated?: Date;
    dateUpdated?: Date;
    roomSid?: string;
    rules?: VideoV1RoomRoomRecordingRuleRules[];
}

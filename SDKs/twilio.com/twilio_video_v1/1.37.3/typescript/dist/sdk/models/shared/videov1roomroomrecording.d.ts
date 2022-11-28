import { SpeakeasyBase } from "../../../internal/utils";
import { RoomRecordingEnumCodecEnum } from "./roomrecordingenumcodecenum";
import { RoomRecordingEnumFormatEnum } from "./roomrecordingenumformatenum";
import { RoomRecordingEnumStatusEnum } from "./roomrecordingenumstatusenum";
import { RoomRecordingEnumTypeEnum } from "./roomrecordingenumtypeenum";
export declare class VideoV1RoomRoomRecording extends SpeakeasyBase {
    accountSid?: string;
    codec?: RoomRecordingEnumCodecEnum;
    containerFormat?: RoomRecordingEnumFormatEnum;
    dateCreated?: Date;
    duration?: number;
    groupingSids?: any;
    links?: Map<string, any>;
    mediaExternalLocation?: string;
    offset?: number;
    roomSid?: string;
    sid?: string;
    size?: number;
    sourceSid?: string;
    status?: RoomRecordingEnumStatusEnum;
    trackName?: string;
    type?: RoomRecordingEnumTypeEnum;
    url?: string;
}

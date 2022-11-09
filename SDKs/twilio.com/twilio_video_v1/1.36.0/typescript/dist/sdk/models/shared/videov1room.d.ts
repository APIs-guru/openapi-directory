import { SpeakeasyBase } from "../../../internal/utils/utils";
import { RoomEnumRoomStatusEnum } from "./roomenumroomstatusenum";
import { RoomEnumRoomTypeEnum } from "./roomenumroomtypeenum";
import { RoomEnumVideoCodecEnum } from "./roomenumvideocodecenum";
export declare enum VideoV1RoomStatusCallbackMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}
export declare class VideoV1Room extends SpeakeasyBase {
    accountSid?: string;
    audioOnly?: boolean;
    dateCreated?: Date;
    dateUpdated?: Date;
    duration?: number;
    emptyRoomTimeout?: number;
    enableTurn?: boolean;
    endTime?: Date;
    largeRoom?: boolean;
    links?: Map<string, any>;
    maxConcurrentPublishedTracks?: number;
    maxParticipantDuration?: number;
    maxParticipants?: number;
    mediaRegion?: string;
    recordParticipantsOnConnect?: boolean;
    sid?: string;
    status?: RoomEnumRoomStatusEnum;
    statusCallback?: string;
    statusCallbackMethod?: VideoV1RoomStatusCallbackMethodEnum;
    type?: RoomEnumRoomTypeEnum;
    uniqueName?: string;
    unusedRoomTimeout?: number;
    url?: string;
    videoCodecs?: RoomEnumVideoCodecEnum[];
}

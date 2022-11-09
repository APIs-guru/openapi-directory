import { SpeakeasyBase } from "../../../internal/utils/utils";
import { RoomParticipantEnumStatusEnum } from "./roomparticipantenumstatusenum";
export declare class VideoV1RoomRoomParticipant extends SpeakeasyBase {
    accountSid?: string;
    dateCreated?: Date;
    dateUpdated?: Date;
    duration?: number;
    endTime?: Date;
    identity?: string;
    links?: Map<string, any>;
    roomSid?: string;
    sid?: string;
    startTime?: Date;
    status?: RoomParticipantEnumStatusEnum;
    url?: string;
}

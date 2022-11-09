import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class VideoV1RoomRoomParticipantRoomParticipantSubscribeRuleRules extends SpeakeasyBase {
    all?: boolean;
    kind?: string;
    priority?: string;
    publisher?: string;
    track?: string;
    type?: string;
}
export declare class VideoV1RoomRoomParticipantRoomParticipantSubscribeRule extends SpeakeasyBase {
    dateCreated?: Date;
    dateUpdated?: Date;
    participantSid?: string;
    roomSid?: string;
    rules?: VideoV1RoomRoomParticipantRoomParticipantSubscribeRuleRules[];
}

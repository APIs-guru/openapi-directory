import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum EventDirectionEnum {
    Inbound = "INBOUND",
    Outbound = "OUTBOUND"
}
export declare enum EventStateEnum {
    Initializing = "INITIALIZING",
    Ringing = "RINGING",
    Active = "ACTIVE",
    Held = "HELD",
    RemoteHeld = "REMOTE_HELD",
    Detached = "DETACHED",
    Rejected = "REJECTED",
    Cancelled = "CANCELLED",
    Answered = "ANSWERED",
    Missed = "MISSED"
}
export declare enum EventTypeEnum {
    Call = "CALL"
}
export declare class Event extends SpeakeasyBase {
    accountId: number;
    answerTime?: Date;
    callerId?: string;
    direction: EventDirectionEnum;
    duration?: number;
    endTime?: Date;
    externalId?: string;
    id: number;
    phoneNumber: string;
    smsData?: string;
    startTime: Date;
    state: EventStateEnum;
    type: EventTypeEnum;
    uciId: number;
    userId: number;
}

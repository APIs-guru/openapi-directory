import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum CallDirectionEnum {
    Inbound = "INBOUND",
    Outbound = "OUTBOUND"
}
export declare enum CallStateEnum {
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
export declare enum CallTypeEnum {
    Call = "CALL"
}
export declare class Call extends SpeakeasyBase {
    accountId: number;
    answerTime?: Date;
    callerId?: string;
    direction: CallDirectionEnum;
    duration: number;
    endTime?: Date;
    externalId?: string;
    id: number;
    phoneNumber: string;
    startTime: Date;
    state: CallStateEnum;
    type: CallTypeEnum;
    uciId: number;
    userId: number;
}

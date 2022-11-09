import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum CallDirectionEnum {
    Inbound = "INBOUND"
,    Outbound = "OUTBOUND"
}

export enum CallStateEnum {
    Initializing = "INITIALIZING"
,    Ringing = "RINGING"
,    Active = "ACTIVE"
,    Held = "HELD"
,    RemoteHeld = "REMOTE_HELD"
,    Detached = "DETACHED"
,    Rejected = "REJECTED"
,    Cancelled = "CANCELLED"
,    Answered = "ANSWERED"
,    Missed = "MISSED"
}

export enum CallTypeEnum {
    Call = "CALL"
}


export class Call extends SpeakeasyBase {
  @Metadata({ data: "json, name=accountId" })
  accountId: number;

  @Metadata({ data: "json, name=answerTime" })
  answerTime?: Date;

  @Metadata({ data: "json, name=callerId" })
  callerId?: string;

  @Metadata({ data: "json, name=direction" })
  direction: CallDirectionEnum;

  @Metadata({ data: "json, name=duration" })
  duration: number;

  @Metadata({ data: "json, name=endTime" })
  endTime?: Date;

  @Metadata({ data: "json, name=externalId" })
  externalId?: string;

  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=phoneNumber" })
  phoneNumber: string;

  @Metadata({ data: "json, name=startTime" })
  startTime: Date;

  @Metadata({ data: "json, name=state" })
  state: CallStateEnum;

  @Metadata({ data: "json, name=type" })
  type: CallTypeEnum;

  @Metadata({ data: "json, name=uciId" })
  uciId: number;

  @Metadata({ data: "json, name=userId" })
  userId: number;
}

import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum EventDirectionEnum {
    Inbound = "INBOUND"
,    Outbound = "OUTBOUND"
}

export enum EventStateEnum {
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

export enum EventTypeEnum {
    Call = "CALL"
}


export class Event extends SpeakeasyBase {
  @Metadata({ data: "json, name=accountId" })
  accountId: number;

  @Metadata({ data: "json, name=answerTime" })
  answerTime?: Date;

  @Metadata({ data: "json, name=callerId" })
  callerId?: string;

  @Metadata({ data: "json, name=direction" })
  direction: EventDirectionEnum;

  @Metadata({ data: "json, name=duration" })
  duration?: number;

  @Metadata({ data: "json, name=endTime" })
  endTime?: Date;

  @Metadata({ data: "json, name=externalId" })
  externalId?: string;

  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=phoneNumber" })
  phoneNumber: string;

  @Metadata({ data: "json, name=smsData" })
  smsData?: string;

  @Metadata({ data: "json, name=startTime" })
  startTime: Date;

  @Metadata({ data: "json, name=state" })
  state: EventStateEnum;

  @Metadata({ data: "json, name=type" })
  type: EventTypeEnum;

  @Metadata({ data: "json, name=uciId" })
  uciId: number;

  @Metadata({ data: "json, name=userId" })
  userId: number;
}

import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum EventDirectionEnum {
    Inbound = "INBOUND",
    Outbound = "OUTBOUND"
}

export enum EventStateEnum {
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

export enum EventTypeEnum {
    Call = "CALL"
}


export class Event extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountId" })
  accountId: number;

  @SpeakeasyMetadata({ data: "json, name=answerTime" })
  answerTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=callerId" })
  callerId?: string;

  @SpeakeasyMetadata({ data: "json, name=direction" })
  direction: EventDirectionEnum;

  @SpeakeasyMetadata({ data: "json, name=duration" })
  duration?: number;

  @SpeakeasyMetadata({ data: "json, name=endTime" })
  endTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=externalId" })
  externalId?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=phoneNumber" })
  phoneNumber: string;

  @SpeakeasyMetadata({ data: "json, name=smsData" })
  smsData?: string;

  @SpeakeasyMetadata({ data: "json, name=startTime" })
  startTime: Date;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state: EventStateEnum;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: EventTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=uciId" })
  uciId: number;

  @SpeakeasyMetadata({ data: "json, name=userId" })
  userId: number;
}

import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum CallDirectionEnum {
    Inbound = "INBOUND",
    Outbound = "OUTBOUND"
}

export enum CallStateEnum {
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

export enum CallTypeEnum {
    Call = "CALL"
}


export class Call extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountId" })
  accountId: number;

  @SpeakeasyMetadata({ data: "json, name=answerTime" })
  answerTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=callerId" })
  callerId?: string;

  @SpeakeasyMetadata({ data: "json, name=direction" })
  direction: CallDirectionEnum;

  @SpeakeasyMetadata({ data: "json, name=duration" })
  duration: number;

  @SpeakeasyMetadata({ data: "json, name=endTime" })
  endTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=externalId" })
  externalId?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=phoneNumber" })
  phoneNumber: string;

  @SpeakeasyMetadata({ data: "json, name=startTime" })
  startTime: Date;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state: CallStateEnum;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: CallTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=uciId" })
  uciId: number;

  @SpeakeasyMetadata({ data: "json, name=userId" })
  userId: number;
}

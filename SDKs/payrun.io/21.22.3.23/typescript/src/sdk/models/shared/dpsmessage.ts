import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum DpsMessageDpsMessageMessageStatusEnum {
    Retrieved = "Retrieved",
    Applied = "Applied",
    Unresolved = "Unresolved",
    Ignored = "Ignored",
    Information = "Information"
}


export class DpsMessageDpsMessage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=FormType" })
  formType?: string;

  @SpeakeasyMetadata({ data: "json, name=IssueDate" })
  issueDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=LastUpdated" })
  lastUpdated?: Date;

  @SpeakeasyMetadata({ data: "json, name=Message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=MessageStatus" })
  messageStatus?: DpsMessageDpsMessageMessageStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=MessageType" })
  messageType?: string;

  @SpeakeasyMetadata({ data: "json, name=ProcessingResult" })
  processingResult?: string;

  @SpeakeasyMetadata({ data: "json, name=RetrieveDate" })
  retrieveDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=SequenceNumber" })
  sequenceNumber?: number;
}


export class DpsMessage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DpsMessage" })
  dpsMessage?: DpsMessageDpsMessage;
}

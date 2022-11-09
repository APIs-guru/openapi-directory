import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum DpsMessageDpsMessageMessageStatusEnum {
    Retrieved = "Retrieved"
,    Applied = "Applied"
,    Unresolved = "Unresolved"
,    Ignored = "Ignored"
,    Information = "Information"
}


export class DpsMessageDpsMessage extends SpeakeasyBase {
  @Metadata({ data: "json, name=FormType" })
  formType?: string;

  @Metadata({ data: "json, name=IssueDate" })
  issueDate?: Date;

  @Metadata({ data: "json, name=LastUpdated" })
  lastUpdated?: Date;

  @Metadata({ data: "json, name=Message" })
  message?: string;

  @Metadata({ data: "json, name=MessageStatus" })
  messageStatus?: DpsMessageDpsMessageMessageStatusEnum;

  @Metadata({ data: "json, name=MessageType" })
  messageType?: string;

  @Metadata({ data: "json, name=ProcessingResult" })
  processingResult?: string;

  @Metadata({ data: "json, name=RetrieveDate" })
  retrieveDate?: Date;

  @Metadata({ data: "json, name=SequenceNumber" })
  sequenceNumber?: number;
}


export class DpsMessage extends SpeakeasyBase {
  @Metadata({ data: "json, name=DpsMessage" })
  dpsMessage?: DpsMessageDpsMessage;
}

import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { UserForApiContract } from "./userforapicontract";
import { UserForApiContract } from "./userforapicontract";

export enum UserMessageContractInboxEnum {
    Nothing = "Nothing"
,    Received = "Received"
,    Sent = "Sent"
,    Notifications = "Notifications"
}


export class UserMessageContract extends SpeakeasyBase {
  @Metadata({ data: "json, name=body" })
  body?: string;

  @Metadata({ data: "json, name=createdFormatted" })
  createdFormatted?: string;

  @Metadata({ data: "json, name=highPriority" })
  highPriority?: boolean;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=inbox" })
  inbox?: UserMessageContractInboxEnum;

  @Metadata({ data: "json, name=read" })
  read?: boolean;

  @Metadata({ data: "json, name=receiver" })
  receiver?: UserForApiContract;

  @Metadata({ data: "json, name=sender" })
  sender?: UserForApiContract;

  @Metadata({ data: "json, name=subject" })
  subject?: string;
}

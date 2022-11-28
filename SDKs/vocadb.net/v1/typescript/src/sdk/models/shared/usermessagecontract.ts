import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { UserForApiContract } from "./userforapicontract";


export enum UserMessageContractInboxEnum {
    Nothing = "Nothing",
    Received = "Received",
    Sent = "Sent",
    Notifications = "Notifications"
}


export class UserMessageContract extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=body" })
  body?: string;

  @SpeakeasyMetadata({ data: "json, name=createdFormatted" })
  createdFormatted?: string;

  @SpeakeasyMetadata({ data: "json, name=highPriority" })
  highPriority?: boolean;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=inbox" })
  inbox?: UserMessageContractInboxEnum;

  @SpeakeasyMetadata({ data: "json, name=read" })
  read?: boolean;

  @SpeakeasyMetadata({ data: "json, name=receiver" })
  receiver?: UserForApiContract;

  @SpeakeasyMetadata({ data: "json, name=sender" })
  sender?: UserForApiContract;

  @SpeakeasyMetadata({ data: "json, name=subject" })
  subject?: string;
}

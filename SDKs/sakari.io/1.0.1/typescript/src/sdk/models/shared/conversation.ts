import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ContactIdentifiers } from "./contactidentifiers";
import { Updated } from "./updated";
import { Message } from "./message";
import { PhoneNumber } from "./phonenumber";



export class Conversation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=closed" })
  closed?: boolean;

  @SpeakeasyMetadata({ data: "json, name=contact" })
  contact?: ContactIdentifiers;

  @SpeakeasyMetadata({ data: "json, name=created" })
  created?: Updated;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=lastMessage" })
  lastMessage?: Message;

  @SpeakeasyMetadata({ data: "json, name=phoneNumber" })
  phoneNumber?: PhoneNumber;

  @SpeakeasyMetadata({ data: "json, name=unread" })
  unread?: string[];

  @SpeakeasyMetadata({ data: "json, name=updated" })
  updated?: Updated;
}

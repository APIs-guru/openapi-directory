import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ContactIdentifiers } from "./contactidentifiers";
import { Updated } from "./updated";
import { Message } from "./message";
import { PhoneNumber } from "./phonenumber";
import { Updated } from "./updated";


export class Conversation extends SpeakeasyBase {
  @Metadata({ data: "json, name=closed" })
  closed?: boolean;

  @Metadata({ data: "json, name=contact" })
  contact?: ContactIdentifiers;

  @Metadata({ data: "json, name=created" })
  created?: Updated;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=lastMessage" })
  lastMessage?: Message;

  @Metadata({ data: "json, name=phoneNumber" })
  phoneNumber?: PhoneNumber;

  @Metadata({ data: "json, name=unread" })
  unread?: string[];

  @Metadata({ data: "json, name=updated" })
  updated?: Updated;
}

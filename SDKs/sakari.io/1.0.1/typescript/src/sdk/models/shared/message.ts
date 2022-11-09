import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ContactIdentifiers } from "./contactidentifiers";
import { Updated } from "./updated";
import { Error } from "./error";
import { Updated } from "./updated";


export class MessageConversation extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: string;
}


export class MessageMedia extends SpeakeasyBase {
  @Metadata({ data: "json, name=filename" })
  filename?: string;

  @Metadata({ data: "json, name=type" })
  type?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;
}


export class Message extends SpeakeasyBase {
  @Metadata({ data: "json, name=contact" })
  contact?: ContactIdentifiers;

  @Metadata({ data: "json, name=conversation" })
  conversation?: MessageConversation;

  @Metadata({ data: "json, name=created" })
  created?: Updated;

  @Metadata({ data: "json, name=error" })
  error?: Error;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=media", elemType: shared.MessageMedia })
  media?: MessageMedia[];

  @Metadata({ data: "json, name=message" })
  message?: string;

  @Metadata({ data: "json, name=outgoing" })
  outgoing?: boolean;

  @Metadata({ data: "json, name=phoneNumber" })
  phoneNumber?: string;

  @Metadata({ data: "json, name=price" })
  price?: number;

  @Metadata({ data: "json, name=read" })
  read?: boolean;

  @Metadata({ data: "json, name=segments" })
  segments?: number;

  @Metadata({ data: "json, name=status" })
  status?: string;

  @Metadata({ data: "json, name=template" })
  template?: string;

  @Metadata({ data: "json, name=updated" })
  updated?: Updated;
}

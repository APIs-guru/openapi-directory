import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ContactIdentifiers } from "./contactidentifiers";
import { Updated } from "./updated";
import { Error } from "./error";



export class MessageConversation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;
}


export class MessageMedia extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=filename" })
  filename?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}


export class Message extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=contact" })
  contact?: ContactIdentifiers;

  @SpeakeasyMetadata({ data: "json, name=conversation" })
  conversation?: MessageConversation;

  @SpeakeasyMetadata({ data: "json, name=created" })
  created?: Updated;

  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Error;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=media", elemType: MessageMedia })
  media?: MessageMedia[];

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=outgoing" })
  outgoing?: boolean;

  @SpeakeasyMetadata({ data: "json, name=phoneNumber" })
  phoneNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=price" })
  price?: number;

  @SpeakeasyMetadata({ data: "json, name=read" })
  read?: boolean;

  @SpeakeasyMetadata({ data: "json, name=segments" })
  segments?: number;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;

  @SpeakeasyMetadata({ data: "json, name=template" })
  template?: string;

  @SpeakeasyMetadata({ data: "json, name=updated" })
  updated?: Updated;
}

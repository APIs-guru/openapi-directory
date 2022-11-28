import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ContactRequest } from "./contactrequest";



export class SendMessagesRequestFilters extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attributes" })
  attributes?: Map<string, any>[];

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: string[];
}


export class SendMessagesRequestMedia extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}

export enum SendMessagesRequestTypeEnum {
    Sms = "SMS",
    Mms = "MMS"
}


export class SendMessagesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=contacts", elemType: ContactRequest })
  contacts?: ContactRequest[];

  @SpeakeasyMetadata({ data: "json, name=conversationStrategy" })
  conversationStrategy?: string;

  @SpeakeasyMetadata({ data: "json, name=conversations" })
  conversations?: string[];

  @SpeakeasyMetadata({ data: "json, name=filters" })
  filters?: SendMessagesRequestFilters;

  @SpeakeasyMetadata({ data: "json, name=media", elemType: SendMessagesRequestMedia })
  media?: SendMessagesRequestMedia[];

  @SpeakeasyMetadata({ data: "json, name=template" })
  template?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: SendMessagesRequestTypeEnum;
}

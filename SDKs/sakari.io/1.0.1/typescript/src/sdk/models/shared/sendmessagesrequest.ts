import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ContactRequest } from "./contactrequest";


export class SendMessagesRequestFilters extends SpeakeasyBase {
  @Metadata({ data: "json, name=attributes" })
  attributes?: Map<string, any>[];

  @Metadata({ data: "json, name=tags" })
  tags?: string[];
}


export class SendMessagesRequestMedia extends SpeakeasyBase {
  @Metadata({ data: "json, name=url" })
  url?: string;
}

export enum SendMessagesRequestTypeEnum {
    Sms = "SMS"
,    Mms = "MMS"
}


export class SendMessagesRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=contacts", elemType: shared.ContactRequest })
  contacts?: ContactRequest[];

  @Metadata({ data: "json, name=conversationStrategy" })
  conversationStrategy?: string;

  @Metadata({ data: "json, name=conversations" })
  conversations?: string[];

  @Metadata({ data: "json, name=filters" })
  filters?: SendMessagesRequestFilters;

  @Metadata({ data: "json, name=media", elemType: shared.SendMessagesRequestMedia })
  media?: SendMessagesRequestMedia[];

  @Metadata({ data: "json, name=template" })
  template?: string;

  @Metadata({ data: "json, name=type" })
  type?: SendMessagesRequestTypeEnum;
}

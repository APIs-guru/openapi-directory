import { SpeakeasyBase } from "../../../internal/utils";
import { ContactRequest } from "./contactrequest";
export declare class SendMessagesRequestFilters extends SpeakeasyBase {
    attributes?: Map<string, any>[];
    tags?: string[];
}
export declare class SendMessagesRequestMedia extends SpeakeasyBase {
    url?: string;
}
export declare enum SendMessagesRequestTypeEnum {
    Sms = "SMS",
    Mms = "MMS"
}
export declare class SendMessagesRequest extends SpeakeasyBase {
    contacts?: ContactRequest[];
    conversationStrategy?: string;
    conversations?: string[];
    filters?: SendMessagesRequestFilters;
    media?: SendMessagesRequestMedia[];
    template?: string;
    type?: SendMessagesRequestTypeEnum;
}

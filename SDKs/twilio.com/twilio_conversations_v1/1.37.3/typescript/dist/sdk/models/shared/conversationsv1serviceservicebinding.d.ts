import { SpeakeasyBase } from "../../../internal/utils";
import { ServiceBindingEnumBindingTypeEnum } from "./servicebindingenumbindingtypeenum";
export declare class ConversationsV1ServiceServiceBinding extends SpeakeasyBase {
    accountSid?: string;
    bindingType?: ServiceBindingEnumBindingTypeEnum;
    chatServiceSid?: string;
    credentialSid?: string;
    dateCreated?: Date;
    dateUpdated?: Date;
    endpoint?: string;
    identity?: string;
    messageTypes?: string[];
    sid?: string;
    url?: string;
}

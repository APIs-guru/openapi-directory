import { SpeakeasyBase } from "../../../internal/utils";
import { BindingEnumBindingTypeEnum } from "./bindingenumbindingtypeenum";
export declare class ChatV2ServiceBinding extends SpeakeasyBase {
    accountSid?: string;
    bindingType?: BindingEnumBindingTypeEnum;
    credentialSid?: string;
    dateCreated?: Date;
    dateUpdated?: Date;
    endpoint?: string;
    identity?: string;
    links?: Map<string, any>;
    messageTypes?: string[];
    serviceSid?: string;
    sid?: string;
    url?: string;
}

import { SpeakeasyBase } from "../../../internal/utils";
import { UserBindingEnumBindingTypeEnum } from "./userbindingenumbindingtypeenum";
export declare class ChatV2ServiceUserUserBinding extends SpeakeasyBase {
    accountSid?: string;
    bindingType?: UserBindingEnumBindingTypeEnum;
    credentialSid?: string;
    dateCreated?: Date;
    dateUpdated?: Date;
    endpoint?: string;
    identity?: string;
    messageTypes?: string[];
    serviceSid?: string;
    sid?: string;
    url?: string;
    userSid?: string;
}

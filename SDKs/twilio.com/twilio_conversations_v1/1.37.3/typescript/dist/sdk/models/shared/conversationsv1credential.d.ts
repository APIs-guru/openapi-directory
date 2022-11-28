import { SpeakeasyBase } from "../../../internal/utils";
import { CredentialEnumPushTypeEnum } from "./credentialenumpushtypeenum";
export declare class ConversationsV1Credential extends SpeakeasyBase {
    accountSid?: string;
    dateCreated?: Date;
    dateUpdated?: Date;
    friendlyName?: string;
    sandbox?: string;
    sid?: string;
    type?: CredentialEnumPushTypeEnum;
    url?: string;
}

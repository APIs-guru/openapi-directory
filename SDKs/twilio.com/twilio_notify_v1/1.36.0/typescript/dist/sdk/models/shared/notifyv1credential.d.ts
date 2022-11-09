import { SpeakeasyBase } from "../../../internal/utils/utils";
import { CredentialEnumPushServiceEnum } from "./credentialenumpushserviceenum";
export declare class NotifyV1Credential extends SpeakeasyBase {
    accountSid?: string;
    dateCreated?: Date;
    dateUpdated?: Date;
    friendlyName?: string;
    sandbox?: string;
    sid?: string;
    type?: CredentialEnumPushServiceEnum;
    url?: string;
}

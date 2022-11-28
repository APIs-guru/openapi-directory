import { SpeakeasyBase } from "../../../internal/utils";
import { VerificationEnumChannelEnum } from "./verificationenumchannelenum";
export declare class VerifyV2ServiceVerification extends SpeakeasyBase {
    accountSid?: string;
    amount?: string;
    channel?: VerificationEnumChannelEnum;
    dateCreated?: Date;
    dateUpdated?: Date;
    lookup?: any;
    payee?: string;
    sendCodeAttempts?: any[];
    serviceSid?: string;
    sid?: string;
    sna?: any;
    status?: string;
    to?: string;
    url?: string;
    valid?: boolean;
}

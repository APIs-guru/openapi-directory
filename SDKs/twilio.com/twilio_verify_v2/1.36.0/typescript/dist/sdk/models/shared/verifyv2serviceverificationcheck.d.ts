import { SpeakeasyBase } from "../../../internal/utils/utils";
import { VerificationCheckEnumChannelEnum } from "./verificationcheckenumchannelenum";
export declare class VerifyV2ServiceVerificationCheck extends SpeakeasyBase {
    accountSid?: string;
    amount?: string;
    channel?: VerificationCheckEnumChannelEnum;
    dateCreated?: Date;
    dateUpdated?: Date;
    payee?: string;
    serviceSid?: string;
    sid?: string;
    snaAttemptsErrorCodes?: any[];
    status?: string;
    to?: string;
    valid?: boolean;
}

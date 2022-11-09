import { SpeakeasyBase } from "../../../internal/utils/utils";
import { VerificationAttemptEnumChannelsEnum } from "./verificationattemptenumchannelsenum";
import { VerificationAttemptEnumConversionStatusEnum } from "./verificationattemptenumconversionstatusenum";
export declare class VerifyV2VerificationAttempt extends SpeakeasyBase {
    accountSid?: string;
    channel?: VerificationAttemptEnumChannelsEnum;
    channelData?: any;
    conversionStatus?: VerificationAttemptEnumConversionStatusEnum;
    dateCreated?: Date;
    dateUpdated?: Date;
    price?: any;
    serviceSid?: string;
    sid?: string;
    url?: string;
    verificationSid?: string;
}

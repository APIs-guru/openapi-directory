import { SpeakeasyBase } from "../../../internal/utils/utils";
import { HostedNumberOrderEnumStatusEnum } from "./hostednumberorderenumstatusenum";
import { HostedNumberOrderEnumVerificationTypeEnum } from "./hostednumberorderenumverificationtypeenum";
/**
 * A mapping of phone number capabilities.
**/
export declare class PreviewHostedNumbersHostedNumberOrderCapabilities extends SpeakeasyBase {
    fax?: boolean;
    mms?: boolean;
    sms?: boolean;
    voice?: boolean;
}
export declare class PreviewHostedNumbersHostedNumberOrder extends SpeakeasyBase {
    accountSid?: string;
    addressSid?: string;
    callDelay?: number;
    capabilities?: PreviewHostedNumbersHostedNumberOrderCapabilities;
    ccEmails?: string[];
    dateCreated?: Date;
    dateUpdated?: Date;
    email?: string;
    extension?: string;
    failureReason?: string;
    friendlyName?: string;
    incomingPhoneNumberSid?: string;
    phoneNumber?: string;
    sid?: string;
    signingDocumentSid?: string;
    status?: HostedNumberOrderEnumStatusEnum;
    uniqueName?: string;
    url?: string;
    verificationAttempts?: number;
    verificationCallSids?: string[];
    verificationCode?: string;
    verificationDocumentSid?: string;
    verificationType?: HostedNumberOrderEnumVerificationTypeEnum;
}

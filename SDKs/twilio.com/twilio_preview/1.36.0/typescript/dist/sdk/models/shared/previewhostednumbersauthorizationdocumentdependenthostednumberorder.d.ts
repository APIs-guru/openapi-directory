import { SpeakeasyBase } from "../../../internal/utils/utils";
import { DependentHostedNumberOrderEnumStatusEnum } from "./dependenthostednumberorderenumstatusenum";
import { DependentHostedNumberOrderEnumVerificationTypeEnum } from "./dependenthostednumberorderenumverificationtypeenum";
/**
 * A mapping of phone number capabilities.
**/
export declare class PreviewHostedNumbersAuthorizationDocumentDependentHostedNumberOrderCapabilities extends SpeakeasyBase {
    fax?: boolean;
    mms?: boolean;
    sms?: boolean;
    voice?: boolean;
}
export declare class PreviewHostedNumbersAuthorizationDocumentDependentHostedNumberOrder extends SpeakeasyBase {
    accountSid?: string;
    addressSid?: string;
    callDelay?: number;
    capabilities?: PreviewHostedNumbersAuthorizationDocumentDependentHostedNumberOrderCapabilities;
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
    status?: DependentHostedNumberOrderEnumStatusEnum;
    uniqueName?: string;
    verificationAttempts?: number;
    verificationCallSids?: string[];
    verificationCode?: string;
    verificationDocumentSid?: string;
    verificationType?: DependentHostedNumberOrderEnumVerificationTypeEnum;
}

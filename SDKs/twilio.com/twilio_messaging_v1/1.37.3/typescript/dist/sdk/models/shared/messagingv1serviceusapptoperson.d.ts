import { SpeakeasyBase } from "../../../internal/utils";
export declare class MessagingV1ServiceUsAppToPerson extends SpeakeasyBase {
    accountSid?: string;
    brandRegistrationSid?: string;
    campaignId?: string;
    campaignStatus?: string;
    dateCreated?: Date;
    dateUpdated?: Date;
    description?: string;
    hasEmbeddedLinks?: boolean;
    hasEmbeddedPhone?: boolean;
    helpKeywords?: string[];
    helpMessage?: string;
    isExternallyRegistered?: boolean;
    messageFlow?: string;
    messageSamples?: string[];
    messagingServiceSid?: string;
    mock?: boolean;
    optInKeywords?: string[];
    optInMessage?: string;
    optOutKeywords?: string[];
    optOutMessage?: string;
    rateLimits?: any;
    sid?: string;
    url?: string;
    usAppToPersonUsecase?: string;
}

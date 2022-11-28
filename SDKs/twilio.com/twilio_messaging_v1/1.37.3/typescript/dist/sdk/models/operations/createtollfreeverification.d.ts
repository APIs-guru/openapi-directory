import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const CreateTollfreeVerificationServerList: readonly ["https://messaging.twilio.com"];
export declare class CreateTollfreeVerificationCreateTollfreeVerificationRequest extends SpeakeasyBase {
    additionalInformation?: string;
    businessCity?: string;
    businessContactEmail?: string;
    businessContactFirstName?: string;
    businessContactLastName?: string;
    businessContactPhone?: string;
    businessCountry?: string;
    businessName: string;
    businessPostalCode?: string;
    businessStateProvinceRegion?: string;
    businessStreetAddress?: string;
    businessStreetAddress2?: string;
    businessWebsite: string;
    customerProfileSid?: string;
    messageVolume: string;
    notificationEmail: string;
    optInImageUrls: string[];
    optInType: shared.TollfreeVerificationEnumOptInTypeEnum;
    productionMessageSample: string;
    tollfreePhoneNumberSid: string;
    useCaseCategories: string[];
    useCaseSummary: string;
}
export declare class CreateTollfreeVerificationSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class CreateTollfreeVerificationRequest extends SpeakeasyBase {
    serverUrl?: string;
    request?: CreateTollfreeVerificationCreateTollfreeVerificationRequest;
    security: CreateTollfreeVerificationSecurity;
}
export declare class CreateTollfreeVerificationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    messagingV1TollfreeVerification?: shared.MessagingV1TollfreeVerification;
}

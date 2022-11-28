import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const CreateUsAppToPersonServerList: readonly ["https://messaging.twilio.com"];
export declare class CreateUsAppToPersonPathParams extends SpeakeasyBase {
    messagingServiceSid: string;
}
export declare class CreateUsAppToPersonCreateUsAppToPersonRequest extends SpeakeasyBase {
    brandRegistrationSid: string;
    description: string;
    hasEmbeddedLinks: boolean;
    hasEmbeddedPhone: boolean;
    helpKeywords?: string[];
    helpMessage?: string;
    messageFlow?: string;
    messageSamples: string[];
    optInKeywords?: string[];
    optInMessage?: string;
    optOutKeywords?: string[];
    optOutMessage?: string;
    usAppToPersonUsecase: string;
}
export declare class CreateUsAppToPersonSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class CreateUsAppToPersonRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: CreateUsAppToPersonPathParams;
    request?: CreateUsAppToPersonCreateUsAppToPersonRequest;
    security: CreateUsAppToPersonSecurity;
}
export declare class CreateUsAppToPersonResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    messagingV1ServiceUsAppToPerson?: shared.MessagingV1ServiceUsAppToPerson;
}

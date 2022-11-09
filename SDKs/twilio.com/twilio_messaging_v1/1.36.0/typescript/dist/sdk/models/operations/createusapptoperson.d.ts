import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const CREATEUSAPPTOPERSON_SERVERS: string[];
export declare class CreateUsAppToPersonPathParams extends SpeakeasyBase {
    messagingServiceSid: string;
}
export declare class CreateUsAppToPersonCreateUsAppToPersonRequest extends SpeakeasyBase {
    brandRegistrationSid: string;
    description: string;
    hasEmbeddedLinks: boolean;
    hasEmbeddedPhone: boolean;
    messageSamples: string[];
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

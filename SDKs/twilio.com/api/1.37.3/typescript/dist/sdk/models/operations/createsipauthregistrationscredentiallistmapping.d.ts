import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const CreateSipAuthRegistrationsCredentialListMappingServerList: readonly ["https://api.twilio.com"];
export declare class CreateSipAuthRegistrationsCredentialListMappingPathParams extends SpeakeasyBase {
    accountSid: string;
    domainSid: string;
}
export declare class CreateSipAuthRegistrationsCredentialListMappingCreateSipAuthRegistrationsCredentialListMappingRequest extends SpeakeasyBase {
    credentialListSid: string;
}
export declare class CreateSipAuthRegistrationsCredentialListMappingSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class CreateSipAuthRegistrationsCredentialListMappingRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: CreateSipAuthRegistrationsCredentialListMappingPathParams;
    request?: CreateSipAuthRegistrationsCredentialListMappingCreateSipAuthRegistrationsCredentialListMappingRequest;
    security: CreateSipAuthRegistrationsCredentialListMappingSecurity;
}
export declare class CreateSipAuthRegistrationsCredentialListMappingResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    apiV2010AccountSipSipDomainSipAuthSipAuthRegistrationsSipAuthRegistrationsCredentialListMapping?: shared.ApiV2010AccountSipSipDomainSipAuthSipAuthRegistrationsSipAuthRegistrationsCredentialListMapping;
}

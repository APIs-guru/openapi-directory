import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const FETCHSIPAUTHREGISTRATIONSCREDENTIALLISTMAPPING_SERVERS: string[];
export declare class FetchSipAuthRegistrationsCredentialListMappingPathParams extends SpeakeasyBase {
    accountSid: string;
    domainSid: string;
    sid: string;
}
export declare class FetchSipAuthRegistrationsCredentialListMappingSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchSipAuthRegistrationsCredentialListMappingRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: FetchSipAuthRegistrationsCredentialListMappingPathParams;
    security: FetchSipAuthRegistrationsCredentialListMappingSecurity;
}
export declare class FetchSipAuthRegistrationsCredentialListMappingResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    apiV2010AccountSipSipDomainSipAuthSipAuthRegistrationsSipAuthRegistrationsCredentialListMapping?: shared.ApiV2010AccountSipSipDomainSipAuthSipAuthRegistrationsSipAuthRegistrationsCredentialListMapping;
}

import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const CREATESIPAUTHCALLSCREDENTIALLISTMAPPING_SERVERS: string[];
export declare class CreateSipAuthCallsCredentialListMappingPathParams extends SpeakeasyBase {
    accountSid: string;
    domainSid: string;
}
export declare class CreateSipAuthCallsCredentialListMappingCreateSipAuthCallsCredentialListMappingRequest extends SpeakeasyBase {
    credentialListSid: string;
}
export declare class CreateSipAuthCallsCredentialListMappingSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class CreateSipAuthCallsCredentialListMappingRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: CreateSipAuthCallsCredentialListMappingPathParams;
    request?: CreateSipAuthCallsCredentialListMappingCreateSipAuthCallsCredentialListMappingRequest;
    security: CreateSipAuthCallsCredentialListMappingSecurity;
}
export declare class CreateSipAuthCallsCredentialListMappingResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    apiV2010AccountSipSipDomainSipAuthSipAuthCallsSipAuthCallsCredentialListMapping?: shared.ApiV2010AccountSipSipDomainSipAuthSipAuthCallsSipAuthCallsCredentialListMapping;
}

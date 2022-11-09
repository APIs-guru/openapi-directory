import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const FETCHSIPAUTHCALLSCREDENTIALLISTMAPPING_SERVERS: string[];
export declare class FetchSipAuthCallsCredentialListMappingPathParams extends SpeakeasyBase {
    accountSid: string;
    domainSid: string;
    sid: string;
}
export declare class FetchSipAuthCallsCredentialListMappingSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchSipAuthCallsCredentialListMappingRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: FetchSipAuthCallsCredentialListMappingPathParams;
    security: FetchSipAuthCallsCredentialListMappingSecurity;
}
export declare class FetchSipAuthCallsCredentialListMappingResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    apiV2010AccountSipSipDomainSipAuthSipAuthCallsSipAuthCallsCredentialListMapping?: shared.ApiV2010AccountSipSipDomainSipAuthSipAuthCallsSipAuthCallsCredentialListMapping;
}

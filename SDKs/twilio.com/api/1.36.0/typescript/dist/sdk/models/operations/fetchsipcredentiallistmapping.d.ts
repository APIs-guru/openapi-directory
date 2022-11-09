import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const FETCHSIPCREDENTIALLISTMAPPING_SERVERS: string[];
export declare class FetchSipCredentialListMappingPathParams extends SpeakeasyBase {
    accountSid: string;
    domainSid: string;
    sid: string;
}
export declare class FetchSipCredentialListMappingSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchSipCredentialListMappingRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: FetchSipCredentialListMappingPathParams;
    security: FetchSipCredentialListMappingSecurity;
}
export declare class FetchSipCredentialListMappingResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    apiV2010AccountSipSipDomainSipCredentialListMapping?: shared.ApiV2010AccountSipSipDomainSipCredentialListMapping;
}

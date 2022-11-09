import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const FETCHSIPAUTHCALLSIPACCESSCONTROLLISTMAPPING_SERVERS: string[];
export declare class FetchSipAuthCallsIpAccessControlListMappingPathParams extends SpeakeasyBase {
    accountSid: string;
    domainSid: string;
    sid: string;
}
export declare class FetchSipAuthCallsIpAccessControlListMappingSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchSipAuthCallsIpAccessControlListMappingRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: FetchSipAuthCallsIpAccessControlListMappingPathParams;
    security: FetchSipAuthCallsIpAccessControlListMappingSecurity;
}
export declare class FetchSipAuthCallsIpAccessControlListMappingResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    apiV2010AccountSipSipDomainSipAuthSipAuthCallsSipAuthCallsIpAccessControlListMapping?: shared.ApiV2010AccountSipSipDomainSipAuthSipAuthCallsSipAuthCallsIpAccessControlListMapping;
}

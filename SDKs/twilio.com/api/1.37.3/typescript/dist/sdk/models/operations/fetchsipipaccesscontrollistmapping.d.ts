import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const FetchSipIpAccessControlListMappingServerList: readonly ["https://api.twilio.com"];
export declare class FetchSipIpAccessControlListMappingPathParams extends SpeakeasyBase {
    accountSid: string;
    domainSid: string;
    sid: string;
}
export declare class FetchSipIpAccessControlListMappingSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchSipIpAccessControlListMappingRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: FetchSipIpAccessControlListMappingPathParams;
    security: FetchSipIpAccessControlListMappingSecurity;
}
export declare class FetchSipIpAccessControlListMappingResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    apiV2010AccountSipSipDomainSipIpAccessControlListMapping?: shared.ApiV2010AccountSipSipDomainSipIpAccessControlListMapping;
}

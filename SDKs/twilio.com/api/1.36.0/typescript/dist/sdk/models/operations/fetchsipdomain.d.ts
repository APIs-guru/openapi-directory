import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const FETCHSIPDOMAIN_SERVERS: string[];
export declare class FetchSipDomainPathParams extends SpeakeasyBase {
    accountSid: string;
    sid: string;
}
export declare class FetchSipDomainSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchSipDomainRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: FetchSipDomainPathParams;
    security: FetchSipDomainSecurity;
}
export declare class FetchSipDomainResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    apiV2010AccountSipSipDomain?: shared.ApiV2010AccountSipSipDomain;
}

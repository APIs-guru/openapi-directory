import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const FETCHSIPDOMAIN_SERVERS: string[];
export declare class FetchSipDomainPathParams extends SpeakeasyBase {
    sipDomain: string;
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
    routesV2SipDomain?: shared.RoutesV2SipDomain;
}

import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const FetchSipDomainServerList: readonly ["https://api.twilio.com"];
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

import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const FetchSipCredentialListServerList: readonly ["https://api.twilio.com"];
export declare class FetchSipCredentialListPathParams extends SpeakeasyBase {
    accountSid: string;
    sid: string;
}
export declare class FetchSipCredentialListSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchSipCredentialListRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: FetchSipCredentialListPathParams;
    security: FetchSipCredentialListSecurity;
}
export declare class FetchSipCredentialListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    apiV2010AccountSipSipCredentialList?: shared.ApiV2010AccountSipSipCredentialList;
}

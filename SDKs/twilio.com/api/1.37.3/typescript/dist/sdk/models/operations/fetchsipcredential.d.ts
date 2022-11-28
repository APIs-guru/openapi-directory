import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const FetchSipCredentialServerList: readonly ["https://api.twilio.com"];
export declare class FetchSipCredentialPathParams extends SpeakeasyBase {
    accountSid: string;
    credentialListSid: string;
    sid: string;
}
export declare class FetchSipCredentialSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchSipCredentialRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: FetchSipCredentialPathParams;
    security: FetchSipCredentialSecurity;
}
export declare class FetchSipCredentialResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    apiV2010AccountSipSipCredentialListSipCredential?: shared.ApiV2010AccountSipSipCredentialListSipCredential;
}

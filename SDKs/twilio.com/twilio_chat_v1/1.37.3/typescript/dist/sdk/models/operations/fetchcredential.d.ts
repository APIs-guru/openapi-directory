import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const FetchCredentialServerList: readonly ["https://chat.twilio.com"];
export declare class FetchCredentialPathParams extends SpeakeasyBase {
    sid: string;
}
export declare class FetchCredentialSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchCredentialRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: FetchCredentialPathParams;
    security: FetchCredentialSecurity;
}
export declare class FetchCredentialResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    chatV1Credential?: shared.ChatV1Credential;
}

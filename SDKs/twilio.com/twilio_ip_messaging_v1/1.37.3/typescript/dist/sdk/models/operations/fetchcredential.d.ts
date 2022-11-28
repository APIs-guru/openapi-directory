import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const FetchCredentialServerList: readonly ["https://ip-messaging.twilio.com"];
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
    ipMessagingV1Credential?: shared.IpMessagingV1Credential;
}

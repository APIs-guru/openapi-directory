import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const FetchSafelistServerList: readonly ["https://verify.twilio.com"];
export declare class FetchSafelistPathParams extends SpeakeasyBase {
    phoneNumber: string;
}
export declare class FetchSafelistSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchSafelistRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: FetchSafelistPathParams;
    security: FetchSafelistSecurity;
}
export declare class FetchSafelistResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    verifyV2Safelist?: shared.VerifyV2Safelist;
}

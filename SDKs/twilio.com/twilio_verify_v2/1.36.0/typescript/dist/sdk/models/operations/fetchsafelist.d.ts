import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const FETCHSAFELIST_SERVERS: string[];
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

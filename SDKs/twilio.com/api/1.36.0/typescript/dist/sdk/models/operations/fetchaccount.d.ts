import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const FETCHACCOUNT_SERVERS: string[];
export declare class FetchAccountPathParams extends SpeakeasyBase {
    sid: string;
}
export declare class FetchAccountSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchAccountRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: FetchAccountPathParams;
    security: FetchAccountSecurity;
}
export declare class FetchAccountResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    apiV2010Account?: shared.ApiV2010Account;
}

import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const FetchBalanceServerList: readonly ["https://api.twilio.com"];
export declare class FetchBalancePathParams extends SpeakeasyBase {
    accountSid: string;
}
export declare class FetchBalanceSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchBalanceRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: FetchBalancePathParams;
    security: FetchBalanceSecurity;
}
export declare class FetchBalanceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    apiV2010AccountBalance?: shared.ApiV2010AccountBalance;
}

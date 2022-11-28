import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const FetchConnectAppServerList: readonly ["https://api.twilio.com"];
export declare class FetchConnectAppPathParams extends SpeakeasyBase {
    accountSid: string;
    sid: string;
}
export declare class FetchConnectAppSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchConnectAppRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: FetchConnectAppPathParams;
    security: FetchConnectAppSecurity;
}
export declare class FetchConnectAppResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    apiV2010AccountConnectApp?: shared.ApiV2010AccountConnectApp;
}

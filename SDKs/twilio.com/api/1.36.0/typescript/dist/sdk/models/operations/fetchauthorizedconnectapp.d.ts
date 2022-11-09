import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const FETCHAUTHORIZEDCONNECTAPP_SERVERS: string[];
export declare class FetchAuthorizedConnectAppPathParams extends SpeakeasyBase {
    accountSid: string;
    connectAppSid: string;
}
export declare class FetchAuthorizedConnectAppSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchAuthorizedConnectAppRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: FetchAuthorizedConnectAppPathParams;
    security: FetchAuthorizedConnectAppSecurity;
}
export declare class FetchAuthorizedConnectAppResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    apiV2010AccountAuthorizedConnectApp?: shared.ApiV2010AccountAuthorizedConnectApp;
}

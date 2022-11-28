import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const FetchAlertServerList: readonly ["https://monitor.twilio.com"];
export declare class FetchAlertPathParams extends SpeakeasyBase {
    sid: string;
}
export declare class FetchAlertSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchAlertRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: FetchAlertPathParams;
    security: FetchAlertSecurity;
}
export declare class FetchAlertResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    monitorV1AlertInstance?: shared.MonitorV1AlertInstance;
}

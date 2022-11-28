import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const FetchEventServerList: readonly ["https://monitor.twilio.com"];
export declare class FetchEventPathParams extends SpeakeasyBase {
    sid: string;
}
export declare class FetchEventSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchEventRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: FetchEventPathParams;
    security: FetchEventSecurity;
}
export declare class FetchEventResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    monitorV1Event?: shared.MonitorV1Event;
}

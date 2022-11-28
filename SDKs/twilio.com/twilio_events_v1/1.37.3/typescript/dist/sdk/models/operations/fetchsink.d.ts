import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const FetchSinkServerList: readonly ["https://events.twilio.com"];
export declare class FetchSinkPathParams extends SpeakeasyBase {
    sid: string;
}
export declare class FetchSinkSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchSinkRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: FetchSinkPathParams;
    security: FetchSinkSecurity;
}
export declare class FetchSinkResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    eventsV1Sink?: shared.EventsV1Sink;
}

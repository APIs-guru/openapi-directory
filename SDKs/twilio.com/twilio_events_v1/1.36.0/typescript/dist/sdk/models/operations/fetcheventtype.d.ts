import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const FETCHEVENTTYPE_SERVERS: string[];
export declare class FetchEventTypePathParams extends SpeakeasyBase {
    type: string;
}
export declare class FetchEventTypeSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchEventTypeRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: FetchEventTypePathParams;
    security: FetchEventTypeSecurity;
}
export declare class FetchEventTypeResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    eventsV1EventType?: shared.EventsV1EventType;
}

import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum GetCallsCountDirectionEnum {
    Inbound = "INBOUND",
    Outbound = "OUTBOUND"
}
export declare enum GetCallsCountStatesEnum {
    Initializing = "INITIALIZING",
    Ringing = "RINGING",
    Active = "ACTIVE",
    Held = "HELD",
    RemoteHeld = "REMOTE_HELD"
}
export declare class GetCallsCountQueryParams extends SpeakeasyBase {
    direction?: GetCallsCountDirectionEnum;
    fromDate?: number;
    states?: GetCallsCountStatesEnum;
    toDate?: number;
}
export declare class GetCallsCountRequest extends SpeakeasyBase {
    queryParams: GetCallsCountQueryParams;
}
export declare class GetCallsCountResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    eventsCount?: shared.EventsCount;
    statusCode: number;
}

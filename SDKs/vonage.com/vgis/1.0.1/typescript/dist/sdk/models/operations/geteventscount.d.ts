import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetEventsCountDirectionEnum {
    Inbound = "INBOUND",
    Outbound = "OUTBOUND"
}
export declare enum GetEventsCountStatesEnum {
    Initializing = "INITIALIZING",
    Ringing = "RINGING",
    Active = "ACTIVE",
    Held = "HELD",
    RemoteHeld = "REMOTE_HELD"
}
export declare class GetEventsCountQueryParams extends SpeakeasyBase {
    direction?: GetEventsCountDirectionEnum;
    fromDate?: number;
    states?: GetEventsCountStatesEnum;
    toDate?: number;
}
export declare class GetEventsCountRequest extends SpeakeasyBase {
    queryParams: GetEventsCountQueryParams;
}
export declare class GetEventsCountResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    eventsCount?: shared.EventsCount;
    statusCode: number;
}

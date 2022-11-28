import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum ListEventsDirectionEnum {
    Inbound = "INBOUND",
    Outbound = "OUTBOUND"
}
export declare enum ListEventsOrderEnum {
    Desc = "DESC",
    Asc = "ASC"
}
export declare enum ListEventsStatesEnum {
    Initializing = "INITIALIZING",
    Ringing = "RINGING",
    Active = "ACTIVE",
    Held = "HELD",
    RemoteHeld = "REMOTE_HELD",
    Detached = "DETACHED",
    Rejected = "REJECTED",
    Cancelled = "CANCELLED",
    Answered = "ANSWERED",
    Missed = "MISSED"
}
export declare enum ListEventsTypesEnum {
    Call = "CALL"
}
export declare class ListEventsQueryParams extends SpeakeasyBase {
    direction?: ListEventsDirectionEnum;
    fromDate?: number;
    offset?: number;
    order?: ListEventsOrderEnum;
    size?: number;
    sort?: string;
    states?: ListEventsStatesEnum;
    toDate?: number;
    types?: ListEventsTypesEnum;
}
export declare class ListEventsRequest extends SpeakeasyBase {
    queryParams: ListEventsQueryParams;
}
export declare class ListEventsResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    events?: shared.Event[];
    statusCode: number;
}

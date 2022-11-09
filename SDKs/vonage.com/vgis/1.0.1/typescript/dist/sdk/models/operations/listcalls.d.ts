import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum ListCallsDirectionEnum {
    Inbound = "INBOUND",
    Outbound = "OUTBOUND"
}
export declare enum ListCallsOrderEnum {
    Desc = "DESC",
    Asc = "ASC"
}
export declare enum ListCallsStatesEnum {
    Initializing = "INITIALIZING",
    Ringing = "RINGING",
    Active = "ACTIVE",
    Held = "HELD",
    RemoteHeld = "REMOTE_HELD"
}
export declare class ListCallsQueryParams extends SpeakeasyBase {
    direction?: ListCallsDirectionEnum;
    fromDate?: number;
    offset?: number;
    order?: ListCallsOrderEnum;
    size?: number;
    sort?: string;
    states?: ListCallsStatesEnum;
    toDate?: number;
}
export declare class ListCallsRequest extends SpeakeasyBase {
    queryParams: ListCallsQueryParams;
}
export declare class ListCallsResponse extends SpeakeasyBase {
    calls?: shared.Call[];
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
}

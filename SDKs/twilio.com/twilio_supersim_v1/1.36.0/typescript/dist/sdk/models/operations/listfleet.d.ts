import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const LISTFLEET_SERVERS: string[];
export declare class ListFleetQueryParams extends SpeakeasyBase {
    networkAccessProfile?: string;
    pageSize?: number;
}
export declare class ListFleetSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class ListFleetRequest extends SpeakeasyBase {
    serverUrl?: string;
    queryParams: ListFleetQueryParams;
    security: ListFleetSecurity;
}
export declare class ListFleetListFleetResponseMeta extends SpeakeasyBase {
    firstPageUrl?: string;
    key?: string;
    nextPageUrl?: string;
    page?: number;
    pageSize?: number;
    previousPageUrl?: string;
    url?: string;
}
export declare class ListFleetListFleetResponse extends SpeakeasyBase {
    fleets?: shared.SupersimV1Fleet[];
    meta?: ListFleetListFleetResponseMeta;
}
export declare class ListFleetResponse extends SpeakeasyBase {
    contentType: string;
    listFleetResponse?: ListFleetListFleetResponse;
    statusCode: number;
}

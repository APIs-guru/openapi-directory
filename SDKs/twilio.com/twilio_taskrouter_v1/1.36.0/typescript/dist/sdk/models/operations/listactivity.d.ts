import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const LISTACTIVITY_SERVERS: string[];
export declare class ListActivityPathParams extends SpeakeasyBase {
    workspaceSid: string;
}
export declare class ListActivityQueryParams extends SpeakeasyBase {
    available?: string;
    friendlyName?: string;
    pageSize?: number;
}
export declare class ListActivitySecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class ListActivityRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: ListActivityPathParams;
    queryParams: ListActivityQueryParams;
    security: ListActivitySecurity;
}
export declare class ListActivityListActivityResponseMeta extends SpeakeasyBase {
    firstPageUrl?: string;
    key?: string;
    nextPageUrl?: string;
    page?: number;
    pageSize?: number;
    previousPageUrl?: string;
    url?: string;
}
export declare class ListActivityListActivityResponse extends SpeakeasyBase {
    activities?: shared.TaskrouterV1WorkspaceActivity[];
    meta?: ListActivityListActivityResponseMeta;
}
export declare class ListActivityResponse extends SpeakeasyBase {
    contentType: string;
    listActivityResponse?: ListActivityListActivityResponse;
    statusCode: number;
}

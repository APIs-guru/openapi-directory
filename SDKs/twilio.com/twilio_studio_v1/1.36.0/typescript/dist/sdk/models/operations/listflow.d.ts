import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const LISTFLOW_SERVERS: string[];
export declare class ListFlowQueryParams extends SpeakeasyBase {
    pageSize?: number;
}
export declare class ListFlowSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class ListFlowRequest extends SpeakeasyBase {
    serverUrl?: string;
    queryParams: ListFlowQueryParams;
    security: ListFlowSecurity;
}
export declare class ListFlowListFlowResponseMeta extends SpeakeasyBase {
    firstPageUrl?: string;
    key?: string;
    nextPageUrl?: string;
    page?: number;
    pageSize?: number;
    previousPageUrl?: string;
    url?: string;
}
export declare class ListFlowListFlowResponse extends SpeakeasyBase {
    flows?: shared.StudioV1Flow[];
    meta?: ListFlowListFlowResponseMeta;
}
export declare class ListFlowResponse extends SpeakeasyBase {
    contentType: string;
    listFlowResponse?: ListFlowListFlowResponse;
    statusCode: number;
}

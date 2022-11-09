import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const LISTFLOWREVISION_SERVERS: string[];
export declare class ListFlowRevisionPathParams extends SpeakeasyBase {
    sid: string;
}
export declare class ListFlowRevisionQueryParams extends SpeakeasyBase {
    pageSize?: number;
}
export declare class ListFlowRevisionSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class ListFlowRevisionRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: ListFlowRevisionPathParams;
    queryParams: ListFlowRevisionQueryParams;
    security: ListFlowRevisionSecurity;
}
export declare class ListFlowRevisionListFlowRevisionResponseMeta extends SpeakeasyBase {
    firstPageUrl?: string;
    key?: string;
    nextPageUrl?: string;
    page?: number;
    pageSize?: number;
    previousPageUrl?: string;
    url?: string;
}
export declare class ListFlowRevisionListFlowRevisionResponse extends SpeakeasyBase {
    meta?: ListFlowRevisionListFlowRevisionResponseMeta;
    revisions?: shared.StudioV2FlowFlowRevision[];
}
export declare class ListFlowRevisionResponse extends SpeakeasyBase {
    contentType: string;
    listFlowRevisionResponse?: ListFlowRevisionListFlowRevisionResponse;
    statusCode: number;
}

import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const LISTENGAGEMENT_SERVERS: string[];
export declare class ListEngagementPathParams extends SpeakeasyBase {
    flowSid: string;
}
export declare class ListEngagementQueryParams extends SpeakeasyBase {
    pageSize?: number;
}
export declare class ListEngagementSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class ListEngagementRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: ListEngagementPathParams;
    queryParams: ListEngagementQueryParams;
    security: ListEngagementSecurity;
}
export declare class ListEngagementListEngagementResponseMeta extends SpeakeasyBase {
    firstPageUrl?: string;
    key?: string;
    nextPageUrl?: string;
    page?: number;
    pageSize?: number;
    previousPageUrl?: string;
    url?: string;
}
export declare class ListEngagementListEngagementResponse extends SpeakeasyBase {
    engagements?: shared.StudioV1FlowEngagement[];
    meta?: ListEngagementListEngagementResponseMeta;
}
export declare class ListEngagementResponse extends SpeakeasyBase {
    contentType: string;
    listEngagementResponse?: ListEngagementListEngagementResponse;
    statusCode: number;
}

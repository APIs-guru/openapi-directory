import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostEventsPagedQueryParams extends SpeakeasyBase {
    maxResults?: number;
}
export declare class PostEventsPagedRequests extends SpeakeasyBase {
    eventFilter?: shared.EventFilter;
    eventFilter1?: shared.EventFilter;
    eventFilter2?: shared.EventFilter;
    eventFilter3?: shared.EventFilter;
}
export declare class PostEventsPagedRequest extends SpeakeasyBase {
    queryParams: PostEventsPagedQueryParams;
    request?: PostEventsPagedRequests;
}
export declare class PostEventsPagedResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    errorResponseContent?: shared.ErrorResponseContent;
    overviewEventPagedResultsPublic?: shared.OverviewEventPagedResultsPublic;
    statusCode: number;
}

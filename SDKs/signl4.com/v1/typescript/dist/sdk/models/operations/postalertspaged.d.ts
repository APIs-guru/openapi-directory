import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostAlertsPagedQueryParams extends SpeakeasyBase {
    maxResults?: number;
    userId?: string;
}
export declare class PostAlertsPagedRequests extends SpeakeasyBase {
    alertFilterPublic?: shared.AlertFilterPublic;
    alertFilterPublic1?: shared.AlertFilterPublic;
    alertFilterPublic2?: shared.AlertFilterPublic;
    alertFilterPublic3?: shared.AlertFilterPublic;
}
export declare class PostAlertsPagedRequest extends SpeakeasyBase {
    queryParams: PostAlertsPagedQueryParams;
    request?: PostAlertsPagedRequests;
}
export declare class PostAlertsPagedResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    errorResponseContent?: shared.ErrorResponseContent;
    overviewAlertPagedResultsPublic?: shared.OverviewAlertPagedResultsPublic;
    statusCode: number;
}

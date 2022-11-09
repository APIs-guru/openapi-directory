import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare const LISTITEMASSIGNMENT_SERVERS: string[];
export declare class ListItemAssignmentPathParams extends SpeakeasyBase {
    bundleSid: string;
}
export declare class ListItemAssignmentQueryParams extends SpeakeasyBase {
    pageSize?: number;
}
export declare class ListItemAssignmentSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class ListItemAssignmentRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: ListItemAssignmentPathParams;
    queryParams: ListItemAssignmentQueryParams;
    security: ListItemAssignmentSecurity;
}
export declare class ListItemAssignmentListItemAssignmentResponseMeta extends SpeakeasyBase {
    firstPageUrl?: string;
    key?: string;
    nextPageUrl?: string;
    page?: number;
    pageSize?: number;
    previousPageUrl?: string;
    url?: string;
}
export declare class ListItemAssignmentListItemAssignmentResponse extends SpeakeasyBase {
    meta?: ListItemAssignmentListItemAssignmentResponseMeta;
    results?: shared.NumbersV2RegulatoryComplianceBundleItemAssignment[];
}
export declare class ListItemAssignmentResponse extends SpeakeasyBase {
    contentType: string;
    listItemAssignmentResponse?: ListItemAssignmentListItemAssignmentResponse;
    statusCode: number;
}

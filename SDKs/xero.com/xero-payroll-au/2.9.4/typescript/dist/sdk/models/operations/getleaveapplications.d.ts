import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetLeaveApplicationsQueryParams extends SpeakeasyBase {
    order?: string;
    page?: number;
    where?: string;
}
export declare class GetLeaveApplicationsHeaders extends SpeakeasyBase {
    ifModifiedSince?: string;
    xeroTenantId: string;
}
export declare class GetLeaveApplicationsSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class GetLeaveApplicationsRequest extends SpeakeasyBase {
    queryParams: GetLeaveApplicationsQueryParams;
    headers: GetLeaveApplicationsHeaders;
    security: GetLeaveApplicationsSecurity;
}
export declare class GetLeaveApplicationsResponse extends SpeakeasyBase {
    apiException?: shared.ApiException;
    contentType: string;
    leaveApplications?: shared.LeaveApplications;
    statusCode: number;
}

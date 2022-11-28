import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetLeaveApplicationPathParams extends SpeakeasyBase {
    leaveApplicationId: string;
}
export declare class GetLeaveApplicationHeaders extends SpeakeasyBase {
    xeroTenantId: string;
}
export declare class GetLeaveApplicationSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class GetLeaveApplicationRequest extends SpeakeasyBase {
    pathParams: GetLeaveApplicationPathParams;
    headers: GetLeaveApplicationHeaders;
    security: GetLeaveApplicationSecurity;
}
export declare class GetLeaveApplicationResponse extends SpeakeasyBase {
    contentType: string;
    leaveApplications?: shared.LeaveApplications;
    statusCode: number;
}

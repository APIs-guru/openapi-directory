import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateLeaveApplicationPathParams extends SpeakeasyBase {
    leaveApplicationId: string;
}
export declare class UpdateLeaveApplicationHeaders extends SpeakeasyBase {
    xeroTenantId: string;
}
export declare class UpdateLeaveApplicationSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class UpdateLeaveApplicationRequest extends SpeakeasyBase {
    pathParams: UpdateLeaveApplicationPathParams;
    headers: UpdateLeaveApplicationHeaders;
    request: shared.LeaveApplicationInput[];
    security: UpdateLeaveApplicationSecurity;
}
export declare class UpdateLeaveApplicationResponse extends SpeakeasyBase {
    contentType: string;
    leaveApplications?: shared.LeaveApplications;
    statusCode: number;
}

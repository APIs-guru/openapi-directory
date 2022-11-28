import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateLeaveApplicationHeaders extends SpeakeasyBase {
    xeroTenantId: string;
}
export declare class CreateLeaveApplicationSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class CreateLeaveApplicationRequest extends SpeakeasyBase {
    headers: CreateLeaveApplicationHeaders;
    request: shared.LeaveApplicationInput[];
    security: CreateLeaveApplicationSecurity;
}
export declare class CreateLeaveApplicationResponse extends SpeakeasyBase {
    contentType: string;
    leaveApplications?: shared.LeaveApplications;
    statusCode: number;
}

import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class LeaveGroupPathParams extends SpeakeasyBase {
    groupId: number;
    userId: number;
}
export declare class LeaveGroupSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class LeaveGroupRequest extends SpeakeasyBase {
    pathParams: LeaveGroupPathParams;
    security: LeaveGroupSecurity;
}
export declare class LeaveGroupResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    legacyError?: shared.LegacyError;
}

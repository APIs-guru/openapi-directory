import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class LeaveGroupPathParams extends SpeakeasyBase {
    groupId: string;
}
export declare class LeaveGroupRequest extends SpeakeasyBase {
    pathParams: LeaveGroupPathParams;
}
export declare class LeaveGroupResponse extends SpeakeasyBase {
    contentType: string;
    group?: shared.Group;
    statusCode: number;
}

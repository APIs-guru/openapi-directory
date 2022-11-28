import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CheckIfUserJoinedGroupPathParams extends SpeakeasyBase {
    groupId: number;
    userId: number;
}
export declare class CheckIfUserJoinedGroupRequest extends SpeakeasyBase {
    pathParams: CheckIfUserJoinedGroupPathParams;
}
export declare class CheckIfUserJoinedGroupResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    legacyError?: shared.LegacyError;
}

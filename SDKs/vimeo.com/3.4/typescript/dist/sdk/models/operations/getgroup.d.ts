import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetGroupPathParams extends SpeakeasyBase {
    groupId: number;
}
export declare class GetGroupRequest extends SpeakeasyBase {
    pathParams: GetGroupPathParams;
}
export declare class GetGroupResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    group?: shared.Group;
}

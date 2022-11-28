import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateGroupPathParams extends SpeakeasyBase {
    groupId: string;
}
export declare enum UpdateGroup200ApplicationJsonActionEnum {
    UpdateGroup = "updateGroup"
}
export declare class UpdateGroup200ApplicationJsonData extends SpeakeasyBase {
    groups: shared.Group[];
}
export declare enum UpdateGroup200ApplicationJsonResultEnum {
    Success = "success",
    Error = "error"
}
export declare class UpdateGroup200ApplicationJson extends SpeakeasyBase {
    action: UpdateGroup200ApplicationJsonActionEnum;
    data: UpdateGroup200ApplicationJsonData;
    result: UpdateGroup200ApplicationJsonResultEnum;
}
export declare class UpdateGroupRequest extends SpeakeasyBase {
    pathParams: UpdateGroupPathParams;
    request: shared.GroupUpdate;
}
export declare class UpdateGroupResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    updateGroup200ApplicationJsonObject?: UpdateGroup200ApplicationJson;
}

import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteGroupPathParams extends SpeakeasyBase {
    groupId: string;
}
export declare enum DeleteGroup200ApplicationJsonActionEnum {
    DeleteGroup = "deleteGroup"
}
export declare class DeleteGroup200ApplicationJsonData extends SpeakeasyBase {
    groups: shared.Group[];
}
export declare enum DeleteGroup200ApplicationJsonResultEnum {
    Success = "success",
    Error = "error"
}
export declare class DeleteGroup200ApplicationJson extends SpeakeasyBase {
    action: DeleteGroup200ApplicationJsonActionEnum;
    data: DeleteGroup200ApplicationJsonData;
    result: DeleteGroup200ApplicationJsonResultEnum;
}
export declare class DeleteGroupRequest extends SpeakeasyBase {
    pathParams: DeleteGroupPathParams;
}
export declare class DeleteGroupResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    deleteGroup200ApplicationJsonObject?: DeleteGroup200ApplicationJson;
}

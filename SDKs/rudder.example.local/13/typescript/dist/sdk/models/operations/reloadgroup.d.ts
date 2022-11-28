import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ReloadGroupPathParams extends SpeakeasyBase {
    groupId: string;
}
export declare enum ReloadGroup200ApplicationJsonActionEnum {
    ReloadGroup = "reloadGroup"
}
export declare class ReloadGroup200ApplicationJsonData extends SpeakeasyBase {
    groups: shared.Group[];
}
export declare enum ReloadGroup200ApplicationJsonResultEnum {
    Success = "success",
    Error = "error"
}
export declare class ReloadGroup200ApplicationJson extends SpeakeasyBase {
    action: ReloadGroup200ApplicationJsonActionEnum;
    data: ReloadGroup200ApplicationJsonData;
    result: ReloadGroup200ApplicationJsonResultEnum;
}
export declare class ReloadGroupRequest extends SpeakeasyBase {
    pathParams: ReloadGroupPathParams;
}
export declare class ReloadGroupResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    reloadGroup200ApplicationJsonObject?: ReloadGroup200ApplicationJson;
}

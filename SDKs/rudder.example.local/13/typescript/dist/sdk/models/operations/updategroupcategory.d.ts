import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateGroupCategoryPathParams extends SpeakeasyBase {
    groupCategoryId: string;
}
export declare enum UpdateGroupCategory200ApplicationJsonActionEnum {
    UpdateGroupCategory = "UpdateGroupCategory"
}
export declare class UpdateGroupCategory200ApplicationJsonData extends SpeakeasyBase {
    groupCategories: shared.GroupCategory[];
}
export declare enum UpdateGroupCategory200ApplicationJsonResultEnum {
    Success = "success",
    Error = "error"
}
export declare class UpdateGroupCategory200ApplicationJson extends SpeakeasyBase {
    action: UpdateGroupCategory200ApplicationJsonActionEnum;
    data: UpdateGroupCategory200ApplicationJsonData;
    result: UpdateGroupCategory200ApplicationJsonResultEnum;
}
export declare class UpdateGroupCategoryRequest extends SpeakeasyBase {
    pathParams: UpdateGroupCategoryPathParams;
    request: shared.GroupCategoryUpdate;
}
export declare class UpdateGroupCategoryResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    updateGroupCategory200ApplicationJsonObject?: UpdateGroupCategory200ApplicationJson;
}

import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteGroupCategoryPathParams extends SpeakeasyBase {
    groupCategoryId: string;
}
export declare enum DeleteGroupCategory200ApplicationJsonActionEnum {
    DeleteGroupCategory = "DeleteGroupCategory"
}
export declare class DeleteGroupCategory200ApplicationJsonData extends SpeakeasyBase {
    groupCategories: shared.GroupCategory[];
}
export declare enum DeleteGroupCategory200ApplicationJsonResultEnum {
    Success = "success",
    Error = "error"
}
export declare class DeleteGroupCategory200ApplicationJson extends SpeakeasyBase {
    action: DeleteGroupCategory200ApplicationJsonActionEnum;
    data: DeleteGroupCategory200ApplicationJsonData;
    result: DeleteGroupCategory200ApplicationJsonResultEnum;
}
export declare class DeleteGroupCategoryRequest extends SpeakeasyBase {
    pathParams: DeleteGroupCategoryPathParams;
}
export declare class DeleteGroupCategoryResponse extends SpeakeasyBase {
    contentType: string;
    deleteGroupCategory200ApplicationJsonObject?: DeleteGroupCategory200ApplicationJson;
    statusCode: number;
}

import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateGroupCategory200ApplicationJsonActionEnum {
    CreateGroupCategory = "CreateGroupCategory"
}
export declare class CreateGroupCategory200ApplicationJsonData extends SpeakeasyBase {
    groupCategories: shared.GroupCategory[];
}
export declare enum CreateGroupCategory200ApplicationJsonResultEnum {
    Success = "success",
    Error = "error"
}
export declare class CreateGroupCategory200ApplicationJson extends SpeakeasyBase {
    action: CreateGroupCategory200ApplicationJsonActionEnum;
    data: CreateGroupCategory200ApplicationJsonData;
    result: CreateGroupCategory200ApplicationJsonResultEnum;
}
export declare class CreateGroupCategoryRequest extends SpeakeasyBase {
    request: shared.GroupCategory;
}
export declare class CreateGroupCategoryResponse extends SpeakeasyBase {
    contentType: string;
    createGroupCategory200ApplicationJsonObject?: CreateGroupCategory200ApplicationJson;
    statusCode: number;
}

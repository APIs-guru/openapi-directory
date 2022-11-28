import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetGroupCategoryDetailsPathParams extends SpeakeasyBase {
    groupCategoryId: string;
}
export declare enum GetGroupCategoryDetails200ApplicationJsonActionEnum {
    GetGroupCategoryDetails = "GetGroupCategoryDetails"
}
export declare class GetGroupCategoryDetails200ApplicationJsonData extends SpeakeasyBase {
    groupCategories: shared.GroupCategory[];
}
export declare enum GetGroupCategoryDetails200ApplicationJsonResultEnum {
    Success = "success",
    Error = "error"
}
export declare class GetGroupCategoryDetails200ApplicationJson extends SpeakeasyBase {
    action: GetGroupCategoryDetails200ApplicationJsonActionEnum;
    data: GetGroupCategoryDetails200ApplicationJsonData;
    result: GetGroupCategoryDetails200ApplicationJsonResultEnum;
}
export declare class GetGroupCategoryDetailsRequest extends SpeakeasyBase {
    pathParams: GetGroupCategoryDetailsPathParams;
}
export declare class GetGroupCategoryDetailsResponse extends SpeakeasyBase {
    contentType: string;
    getGroupCategoryDetails200ApplicationJsonObject?: GetGroupCategoryDetails200ApplicationJson;
    statusCode: number;
}

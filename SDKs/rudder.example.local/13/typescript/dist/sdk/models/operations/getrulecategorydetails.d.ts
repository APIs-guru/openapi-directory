import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetRuleCategoryDetailsPathParams extends SpeakeasyBase {
    ruleCategoryId: string;
}
export declare enum GetRuleCategoryDetails200ApplicationJsonActionEnum {
    GetRuleCategoryDetails = "GetRuleCategoryDetails"
}
export declare class GetRuleCategoryDetails200ApplicationJsonData extends SpeakeasyBase {
    rulesCategories: shared.RuleCategory[];
}
export declare enum GetRuleCategoryDetails200ApplicationJsonResultEnum {
    Success = "success",
    Error = "error"
}
export declare class GetRuleCategoryDetails200ApplicationJson extends SpeakeasyBase {
    action: GetRuleCategoryDetails200ApplicationJsonActionEnum;
    data: GetRuleCategoryDetails200ApplicationJsonData;
    result: GetRuleCategoryDetails200ApplicationJsonResultEnum;
}
export declare class GetRuleCategoryDetailsRequest extends SpeakeasyBase {
    pathParams: GetRuleCategoryDetailsPathParams;
}
export declare class GetRuleCategoryDetailsResponse extends SpeakeasyBase {
    contentType: string;
    getRuleCategoryDetails200ApplicationJsonObject?: GetRuleCategoryDetails200ApplicationJson;
    statusCode: number;
}

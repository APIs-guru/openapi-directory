import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteRuleCategoryPathParams extends SpeakeasyBase {
    ruleCategoryId: string;
}
export declare enum DeleteRuleCategory200ApplicationJsonActionEnum {
    DeleteRuleCategory = "DeleteRuleCategory"
}
export declare class DeleteRuleCategory200ApplicationJsonData extends SpeakeasyBase {
    groupCategories: shared.RuleCategory[];
}
export declare enum DeleteRuleCategory200ApplicationJsonResultEnum {
    Success = "success",
    Error = "error"
}
export declare class DeleteRuleCategory200ApplicationJson extends SpeakeasyBase {
    action: DeleteRuleCategory200ApplicationJsonActionEnum;
    data: DeleteRuleCategory200ApplicationJsonData;
    result: DeleteRuleCategory200ApplicationJsonResultEnum;
}
export declare class DeleteRuleCategoryRequest extends SpeakeasyBase {
    pathParams: DeleteRuleCategoryPathParams;
}
export declare class DeleteRuleCategoryResponse extends SpeakeasyBase {
    contentType: string;
    deleteRuleCategory200ApplicationJsonObject?: DeleteRuleCategory200ApplicationJson;
    statusCode: number;
}

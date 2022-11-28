import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateRuleCategoryPathParams extends SpeakeasyBase {
    ruleCategoryId: string;
}
export declare enum UpdateRuleCategory200ApplicationJsonActionEnum {
    UpdateRuleCategory = "UpdateRuleCategory"
}
export declare class UpdateRuleCategory200ApplicationJsonData extends SpeakeasyBase {
    ruleCategories: shared.RuleCategory[];
}
export declare enum UpdateRuleCategory200ApplicationJsonResultEnum {
    Success = "success",
    Error = "error"
}
export declare class UpdateRuleCategory200ApplicationJson extends SpeakeasyBase {
    action: UpdateRuleCategory200ApplicationJsonActionEnum;
    data: UpdateRuleCategory200ApplicationJsonData;
    result: UpdateRuleCategory200ApplicationJsonResultEnum;
}
export declare class UpdateRuleCategoryRequest extends SpeakeasyBase {
    pathParams: UpdateRuleCategoryPathParams;
    request: shared.RuleCategoryUpdate;
}
export declare class UpdateRuleCategoryResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    updateRuleCategory200ApplicationJsonObject?: UpdateRuleCategory200ApplicationJson;
}

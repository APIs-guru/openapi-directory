import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateRuleCategory200ApplicationJsonActionEnum {
    CreateRuleCategory = "CreateRuleCategory"
}
export declare class CreateRuleCategory200ApplicationJsonData extends SpeakeasyBase {
    ruleCategories: shared.RuleCategory[];
}
export declare enum CreateRuleCategory200ApplicationJsonResultEnum {
    Success = "success",
    Error = "error"
}
export declare class CreateRuleCategory200ApplicationJson extends SpeakeasyBase {
    action: CreateRuleCategory200ApplicationJsonActionEnum;
    data: CreateRuleCategory200ApplicationJsonData;
    result: CreateRuleCategory200ApplicationJsonResultEnum;
}
export declare class CreateRuleCategoryRequest extends SpeakeasyBase {
    request: shared.RuleCategory;
}
export declare class CreateRuleCategoryResponse extends SpeakeasyBase {
    contentType: string;
    createRuleCategory200ApplicationJsonObject?: CreateRuleCategory200ApplicationJson;
    statusCode: number;
}

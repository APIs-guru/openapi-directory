import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateRulePathParams extends SpeakeasyBase {
    ruleId: string;
}
export declare enum UpdateRule200ApplicationJsonActionEnum {
    UpdateRule = "updateRule"
}
export declare class UpdateRule200ApplicationJsonData extends SpeakeasyBase {
    rules: shared.RuleWithCategory[];
}
export declare enum UpdateRule200ApplicationJsonResultEnum {
    Success = "success",
    Error = "error"
}
export declare class UpdateRule200ApplicationJson extends SpeakeasyBase {
    action: UpdateRule200ApplicationJsonActionEnum;
    data: UpdateRule200ApplicationJsonData;
    result: UpdateRule200ApplicationJsonResultEnum;
}
export declare class UpdateRuleRequest extends SpeakeasyBase {
    pathParams: UpdateRulePathParams;
    request: shared.RuleWithCategory;
}
export declare class UpdateRuleResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    updateRule200ApplicationJsonObject?: UpdateRule200ApplicationJson;
}

import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetRuleTree200ApplicationJsonActionEnum {
    GetRuleTree = "GetRuleTree"
}
export declare class GetRuleTree200ApplicationJsonData extends SpeakeasyBase {
    ruleCategories: Map<string, any>;
}
export declare enum GetRuleTree200ApplicationJsonResultEnum {
    Success = "success",
    Error = "error"
}
export declare class GetRuleTree200ApplicationJson extends SpeakeasyBase {
    action: GetRuleTree200ApplicationJsonActionEnum;
    data: GetRuleTree200ApplicationJsonData;
    result: GetRuleTree200ApplicationJsonResultEnum;
}
export declare class GetRuleTreeResponse extends SpeakeasyBase {
    contentType: string;
    getRuleTree200ApplicationJsonObject?: GetRuleTree200ApplicationJson;
    statusCode: number;
}

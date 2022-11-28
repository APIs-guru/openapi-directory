import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetRuleCompliancePathParams extends SpeakeasyBase {
    ruleId: string;
}
export declare class GetRuleComplianceQueryParams extends SpeakeasyBase {
    level?: number;
}
export declare enum GetRuleCompliance200ApplicationJsonActionEnum {
    GetRuleCompliance = "getRuleCompliance"
}
export declare class GetRuleCompliance200ApplicationJsonDataRulesComplianceDetails extends SpeakeasyBase {
    error?: number;
    noReport?: number;
    successAlreadyOk?: number;
    successNotApplicable?: number;
    successRepaired?: number;
    unexpectedMissingComponent?: number;
    unexpectedUnknownComponent?: number;
}
export declare enum GetRuleCompliance200ApplicationJsonDataRulesModeEnum {
    FullCompliance = "full-compliance",
    ChangesOnly = "changes-only",
    ReportsDisabled = "reports-disabled"
}
export declare class GetRuleCompliance200ApplicationJsonDataRules extends SpeakeasyBase {
    compliance: number;
    complianceDetails: GetRuleCompliance200ApplicationJsonDataRulesComplianceDetails;
    id: string;
    mode: GetRuleCompliance200ApplicationJsonDataRulesModeEnum;
}
export declare class GetRuleCompliance200ApplicationJsonData extends SpeakeasyBase {
    rules: GetRuleCompliance200ApplicationJsonDataRules[];
}
export declare enum GetRuleCompliance200ApplicationJsonResultEnum {
    Success = "success",
    Error = "error"
}
export declare class GetRuleCompliance200ApplicationJson extends SpeakeasyBase {
    action: GetRuleCompliance200ApplicationJsonActionEnum;
    data: GetRuleCompliance200ApplicationJsonData;
    result: GetRuleCompliance200ApplicationJsonResultEnum;
}
export declare class GetRuleComplianceRequest extends SpeakeasyBase {
    pathParams: GetRuleCompliancePathParams;
    queryParams: GetRuleComplianceQueryParams;
}
export declare class GetRuleComplianceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getRuleCompliance200ApplicationJsonObject?: GetRuleCompliance200ApplicationJson;
}

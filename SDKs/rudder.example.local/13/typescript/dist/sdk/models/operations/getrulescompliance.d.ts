import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetRulesComplianceQueryParams extends SpeakeasyBase {
    level?: number;
}
export declare enum GetRulesCompliance200ApplicationJsonActionEnum {
    GetRulesCompliance = "getRulesCompliance"
}
export declare class GetRulesCompliance200ApplicationJsonDataRulesComplianceDetails extends SpeakeasyBase {
    error?: number;
    noReport?: number;
    successAlreadyOk?: number;
    successNotApplicable?: number;
    successRepaired?: number;
    unexpectedMissingComponent?: number;
    unexpectedUnknownComponent?: number;
}
export declare enum GetRulesCompliance200ApplicationJsonDataRulesModeEnum {
    FullCompliance = "full-compliance",
    ChangesOnly = "changes-only",
    ReportsDisabled = "reports-disabled"
}
export declare class GetRulesCompliance200ApplicationJsonDataRules extends SpeakeasyBase {
    compliance: number;
    complianceDetails: GetRulesCompliance200ApplicationJsonDataRulesComplianceDetails;
    id: string;
    mode: GetRulesCompliance200ApplicationJsonDataRulesModeEnum;
}
export declare class GetRulesCompliance200ApplicationJsonData extends SpeakeasyBase {
    rules: GetRulesCompliance200ApplicationJsonDataRules[];
}
export declare enum GetRulesCompliance200ApplicationJsonResultEnum {
    Success = "success",
    Error = "error"
}
export declare class GetRulesCompliance200ApplicationJson extends SpeakeasyBase {
    action: GetRulesCompliance200ApplicationJsonActionEnum;
    data: GetRulesCompliance200ApplicationJsonData;
    result: GetRulesCompliance200ApplicationJsonResultEnum;
}
export declare class GetRulesComplianceRequest extends SpeakeasyBase {
    queryParams: GetRulesComplianceQueryParams;
}
export declare class GetRulesComplianceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getRulesCompliance200ApplicationJsonObject?: GetRulesCompliance200ApplicationJson;
}

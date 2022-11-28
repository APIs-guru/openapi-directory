import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetNodesComplianceQueryParams extends SpeakeasyBase {
    level?: number;
}
export declare enum GetNodesCompliance200ApplicationJsonActionEnum {
    GetNodesCompliance = "getNodesCompliance"
}
export declare class GetNodesCompliance200ApplicationJsonDataNodesComplianceDetails extends SpeakeasyBase {
    error?: number;
    noReport?: number;
    successAlreadyOk?: number;
    successNotApplicable?: number;
    successRepaired?: number;
    unexpectedMissingComponent?: number;
    unexpectedUnknownComponent?: number;
}
export declare enum GetNodesCompliance200ApplicationJsonDataNodesModeEnum {
    FullCompliance = "full-compliance",
    ChangesOnly = "changes-only",
    ReportsDisabled = "reports-disabled"
}
export declare class GetNodesCompliance200ApplicationJsonDataNodes extends SpeakeasyBase {
    compliance: number;
    complianceDetails: GetNodesCompliance200ApplicationJsonDataNodesComplianceDetails;
    id: string;
    mode: GetNodesCompliance200ApplicationJsonDataNodesModeEnum;
}
export declare class GetNodesCompliance200ApplicationJsonData extends SpeakeasyBase {
    nodes: GetNodesCompliance200ApplicationJsonDataNodes[];
}
export declare enum GetNodesCompliance200ApplicationJsonResultEnum {
    Success = "success",
    Error = "error"
}
export declare class GetNodesCompliance200ApplicationJson extends SpeakeasyBase {
    action: GetNodesCompliance200ApplicationJsonActionEnum;
    data: GetNodesCompliance200ApplicationJsonData;
    result: GetNodesCompliance200ApplicationJsonResultEnum;
}
export declare class GetNodesComplianceRequest extends SpeakeasyBase {
    queryParams: GetNodesComplianceQueryParams;
}
export declare class GetNodesComplianceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getNodesCompliance200ApplicationJsonObject?: GetNodesCompliance200ApplicationJson;
}

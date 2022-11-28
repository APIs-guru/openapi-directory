import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetNodeCompliancePathParams extends SpeakeasyBase {
    nodeId: string;
}
export declare class GetNodeComplianceQueryParams extends SpeakeasyBase {
    level?: number;
}
export declare enum GetNodeCompliance200ApplicationJsonActionEnum {
    GetNodeCompliance = "getNodeCompliance"
}
export declare class GetNodeCompliance200ApplicationJsonDataNodesComplianceDetails extends SpeakeasyBase {
    error?: number;
    noReport?: number;
    successAlreadyOk?: number;
    successNotApplicable?: number;
    successRepaired?: number;
    unexpectedMissingComponent?: number;
    unexpectedUnknownComponent?: number;
}
export declare enum GetNodeCompliance200ApplicationJsonDataNodesModeEnum {
    FullCompliance = "full-compliance",
    ChangesOnly = "changes-only",
    ReportsDisabled = "reports-disabled"
}
export declare class GetNodeCompliance200ApplicationJsonDataNodes extends SpeakeasyBase {
    compliance: number;
    complianceDetails: GetNodeCompliance200ApplicationJsonDataNodesComplianceDetails;
    id: string;
    mode: GetNodeCompliance200ApplicationJsonDataNodesModeEnum;
}
export declare class GetNodeCompliance200ApplicationJsonData extends SpeakeasyBase {
    nodes: GetNodeCompliance200ApplicationJsonDataNodes[];
}
export declare enum GetNodeCompliance200ApplicationJsonResultEnum {
    Success = "success",
    Error = "error"
}
export declare class GetNodeCompliance200ApplicationJson extends SpeakeasyBase {
    action: GetNodeCompliance200ApplicationJsonActionEnum;
    data: GetNodeCompliance200ApplicationJsonData;
    result: GetNodeCompliance200ApplicationJsonResultEnum;
}
export declare class GetNodeComplianceRequest extends SpeakeasyBase {
    pathParams: GetNodeCompliancePathParams;
    queryParams: GetNodeComplianceQueryParams;
}
export declare class GetNodeComplianceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getNodeCompliance200ApplicationJsonObject?: GetNodeCompliance200ApplicationJson;
}

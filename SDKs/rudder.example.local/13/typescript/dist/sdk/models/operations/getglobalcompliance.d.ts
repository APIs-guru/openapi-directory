import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetGlobalCompliance200ApplicationJsonActionEnum {
    GetGlobalCompliance = "getGlobalCompliance"
}
export declare class GetGlobalCompliance200ApplicationJsonDataGlobalComplianceComplianceDetails extends SpeakeasyBase {
    error?: number;
    noReport?: number;
    successAlreadyOk?: number;
    successNotApplicable?: number;
    successRepaired?: number;
    unexpectedMissingComponent?: number;
    unexpectedUnknownComponent?: number;
}
export declare class GetGlobalCompliance200ApplicationJsonDataGlobalCompliance extends SpeakeasyBase {
    compliance: number;
    complianceDetails?: GetGlobalCompliance200ApplicationJsonDataGlobalComplianceComplianceDetails;
}
export declare class GetGlobalCompliance200ApplicationJsonData extends SpeakeasyBase {
    globalCompliance: GetGlobalCompliance200ApplicationJsonDataGlobalCompliance;
}
export declare enum GetGlobalCompliance200ApplicationJsonResultEnum {
    Success = "success",
    Error = "error"
}
export declare class GetGlobalCompliance200ApplicationJson extends SpeakeasyBase {
    action: GetGlobalCompliance200ApplicationJsonActionEnum;
    data: GetGlobalCompliance200ApplicationJsonData;
    result: GetGlobalCompliance200ApplicationJsonResultEnum;
}
export declare class GetGlobalComplianceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getGlobalCompliance200ApplicationJsonObject?: GetGlobalCompliance200ApplicationJson;
}

import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetLastCveCheck200ApplicationJsonActionEnum {
    GetLastCveCheck = "getLastCVECheck"
}
export declare class GetLastCveCheck200ApplicationJsonData extends SpeakeasyBase {
    cveChecks: shared.CveCheck[];
}
export declare enum GetLastCveCheck200ApplicationJsonResultEnum {
    Success = "success",
    Error = "error"
}
export declare class GetLastCveCheck200ApplicationJson extends SpeakeasyBase {
    action: GetLastCveCheck200ApplicationJsonActionEnum;
    data: GetLastCveCheck200ApplicationJsonData;
    result: GetLastCveCheck200ApplicationJsonResultEnum;
}
export declare class GetLastCveCheckResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getLastCveCheck200ApplicationJsonObject?: GetLastCveCheck200ApplicationJson;
}

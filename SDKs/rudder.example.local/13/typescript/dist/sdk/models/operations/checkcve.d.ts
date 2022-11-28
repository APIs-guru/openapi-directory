import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CheckCve200ApplicationJsonActionEnum {
    CheckCve = "checkCVE"
}
export declare class CheckCve200ApplicationJsonData extends SpeakeasyBase {
    cveChecks: shared.CveCheck[];
}
export declare enum CheckCve200ApplicationJsonResultEnum {
    Success = "success",
    Error = "error"
}
export declare class CheckCve200ApplicationJson extends SpeakeasyBase {
    action: CheckCve200ApplicationJsonActionEnum;
    data: CheckCve200ApplicationJsonData;
    result: CheckCve200ApplicationJsonResultEnum;
}
export declare class CheckCveResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    checkCve200ApplicationJsonObject?: CheckCve200ApplicationJson;
}

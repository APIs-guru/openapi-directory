import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
/**
 * cveList
**/
export declare class GetCveListRequestBody extends SpeakeasyBase {
    cveIds?: string[];
}
export declare enum GetCveList200ApplicationJsonActionEnum {
    GetCveList = "getCVEList"
}
export declare class GetCveList200ApplicationJsonData extends SpeakeasyBase {
    cvEs: shared.CveDetails[];
}
export declare enum GetCveList200ApplicationJsonResultEnum {
    Success = "success",
    Error = "error"
}
export declare class GetCveList200ApplicationJson extends SpeakeasyBase {
    action: GetCveList200ApplicationJsonActionEnum;
    data: GetCveList200ApplicationJsonData;
    result: GetCveList200ApplicationJsonResultEnum;
}
export declare class GetCveListRequest extends SpeakeasyBase {
    request?: GetCveListRequestBody;
}
export declare class GetCveListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getCveList200ApplicationJsonObject?: GetCveList200ApplicationJson;
}

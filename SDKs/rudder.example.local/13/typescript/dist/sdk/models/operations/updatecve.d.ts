import { SpeakeasyBase } from "../../../internal/utils";
/**
 * CVE update config
**/
export declare class UpdateCveRequestBody extends SpeakeasyBase {
    url?: string;
    years?: string[];
}
export declare enum UpdateCve200ApplicationJsonActionEnum {
    UpdateCve = "updateCVE"
}
export declare class UpdateCve200ApplicationJsonData extends SpeakeasyBase {
    cvEs: number;
}
export declare enum UpdateCve200ApplicationJsonResultEnum {
    Success = "success",
    Error = "error"
}
export declare class UpdateCve200ApplicationJson extends SpeakeasyBase {
    action: UpdateCve200ApplicationJsonActionEnum;
    data: UpdateCve200ApplicationJsonData;
    result: UpdateCve200ApplicationJsonResultEnum;
}
export declare class UpdateCveRequest extends SpeakeasyBase {
    request?: UpdateCveRequestBody;
}
export declare class UpdateCveResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    updateCve200ApplicationJsonObject?: UpdateCve200ApplicationJson;
}

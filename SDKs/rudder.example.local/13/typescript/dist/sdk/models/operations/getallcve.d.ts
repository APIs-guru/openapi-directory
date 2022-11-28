import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetAllCve200ApplicationJsonActionEnum {
    GetAllCve = "getAllCve"
}
export declare class GetAllCve200ApplicationJsonData extends SpeakeasyBase {
    cvEs: shared.CveDetails[];
}
export declare enum GetAllCve200ApplicationJsonResultEnum {
    Success = "success",
    Error = "error"
}
export declare class GetAllCve200ApplicationJson extends SpeakeasyBase {
    action: GetAllCve200ApplicationJsonActionEnum;
    data: GetAllCve200ApplicationJsonData;
    result: GetAllCve200ApplicationJsonResultEnum;
}
export declare class GetAllCveResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getAllCve200ApplicationJsonObject?: GetAllCve200ApplicationJson;
}

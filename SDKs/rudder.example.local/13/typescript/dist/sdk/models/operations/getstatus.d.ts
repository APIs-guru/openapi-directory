import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetStatus200ApplicationJsonActionEnum {
    GetStatus = "getStatus"
}
export declare enum GetStatus200ApplicationJsonDataGlobalEnum {
    Ok = "OK"
}
/**
 * Status of the service
**/
export declare class GetStatus200ApplicationJsonData extends SpeakeasyBase {
    global?: GetStatus200ApplicationJsonDataGlobalEnum;
}
export declare enum GetStatus200ApplicationJsonResultEnum {
    Success = "success",
    Error = "error"
}
export declare class GetStatus200ApplicationJson extends SpeakeasyBase {
    action: GetStatus200ApplicationJsonActionEnum;
    data: GetStatus200ApplicationJsonData;
    result: GetStatus200ApplicationJsonResultEnum;
}
export declare class GetStatusResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getStatus200ApplicationJsonObject?: GetStatus200ApplicationJson;
}

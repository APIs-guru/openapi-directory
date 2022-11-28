import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetSystemInfo200ApplicationJsonActionEnum {
    GetSystemInfo = "getSystemInfo"
}
/**
 * Information about the service
**/
export declare class GetSystemInfo200ApplicationJsonData extends SpeakeasyBase {
    rudder: any;
}
export declare enum GetSystemInfo200ApplicationJsonResultEnum {
    Success = "success",
    Error = "error"
}
export declare class GetSystemInfo200ApplicationJson extends SpeakeasyBase {
    action: GetSystemInfo200ApplicationJsonActionEnum;
    data: GetSystemInfo200ApplicationJsonData;
    result: GetSystemInfo200ApplicationJsonResultEnum;
}
export declare class GetSystemInfoResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getSystemInfo200ApplicationJsonObject?: GetSystemInfo200ApplicationJson;
}

import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetAllSettings200ApplicationJsonActionEnum {
    GetAllSettings = "getAllSettings"
}
/**
 * Information about the setting
**/
export declare class GetAllSettings200ApplicationJsonData extends SpeakeasyBase {
    settings: any;
}
export declare enum GetAllSettings200ApplicationJsonResultEnum {
    Success = "success",
    Error = "error"
}
export declare class GetAllSettings200ApplicationJson extends SpeakeasyBase {
    action: GetAllSettings200ApplicationJsonActionEnum;
    data: GetAllSettings200ApplicationJsonData;
    result: GetAllSettings200ApplicationJsonResultEnum;
}
export declare class GetAllSettingsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getAllSettings200ApplicationJsonObject?: GetAllSettings200ApplicationJson;
}

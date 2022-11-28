import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetSettingPathParams extends SpeakeasyBase {
    settingId: string;
}
export declare enum GetSetting200ApplicationJsonActionEnum {
    GetSetting = "getSetting"
}
/**
 * Information about the setting
**/
export declare class GetSetting200ApplicationJsonData extends SpeakeasyBase {
    settingId?: string;
}
export declare enum GetSetting200ApplicationJsonResultEnum {
    Success = "success",
    Error = "error"
}
export declare class GetSetting200ApplicationJson extends SpeakeasyBase {
    action: GetSetting200ApplicationJsonActionEnum;
    data: GetSetting200ApplicationJsonData;
    id: string;
    result: GetSetting200ApplicationJsonResultEnum;
}
export declare class GetSettingRequest extends SpeakeasyBase {
    pathParams: GetSettingPathParams;
}
export declare class GetSettingResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getSetting200ApplicationJsonObject?: GetSetting200ApplicationJson;
}

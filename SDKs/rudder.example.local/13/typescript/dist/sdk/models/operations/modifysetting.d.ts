import { SpeakeasyBase } from "../../../internal/utils";
export declare class ModifySettingPathParams extends SpeakeasyBase {
    settingId: string;
}
export declare class ModifySettingRequestBody extends SpeakeasyBase {
    value?: string;
}
export declare enum ModifySetting200ApplicationJsonActionEnum {
    ModifySetting = "modifySetting"
}
/**
 * Information about the setting
**/
export declare class ModifySetting200ApplicationJsonData extends SpeakeasyBase {
    settingId?: string;
}
export declare enum ModifySetting200ApplicationJsonResultEnum {
    Success = "success",
    Error = "error"
}
export declare class ModifySetting200ApplicationJson extends SpeakeasyBase {
    action: ModifySetting200ApplicationJsonActionEnum;
    data: ModifySetting200ApplicationJsonData;
    id: string;
    result: ModifySetting200ApplicationJsonResultEnum;
}
export declare class ModifySettingRequest extends SpeakeasyBase {
    pathParams: ModifySettingPathParams;
    request: ModifySettingRequestBody;
}
export declare class ModifySettingResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    modifySetting200ApplicationJsonObject?: ModifySetting200ApplicationJson;
}

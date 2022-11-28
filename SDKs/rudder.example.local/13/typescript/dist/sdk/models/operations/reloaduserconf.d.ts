import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ReloadUserConf200ApplicationJsonActionEnum {
    ReloadUserConf = "reloadUserConf"
}
export declare class ReloadUserConf200ApplicationJsonDataReload extends SpeakeasyBase {
    status: string;
}
export declare class ReloadUserConf200ApplicationJsonData extends SpeakeasyBase {
    reload: ReloadUserConf200ApplicationJsonDataReload;
}
export declare enum ReloadUserConf200ApplicationJsonResultEnum {
    Success = "success",
    Error = "error"
}
export declare class ReloadUserConf200ApplicationJson extends SpeakeasyBase {
    action: ReloadUserConf200ApplicationJsonActionEnum;
    data: ReloadUserConf200ApplicationJsonData;
    result: ReloadUserConf200ApplicationJsonResultEnum;
}
export declare class ReloadUserConfResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    reloadUserConf200ApplicationJsonObject?: ReloadUserConf200ApplicationJson;
}

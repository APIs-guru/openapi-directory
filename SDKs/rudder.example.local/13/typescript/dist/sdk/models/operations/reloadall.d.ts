import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ReloadAll200ApplicationJsonActionEnum {
    ReloadAll = "reloadAll"
}
export declare enum ReloadAll200ApplicationJsonDataGroupsEnum {
    Started = "Started"
}
export declare enum ReloadAll200ApplicationJsonDataTechniquesEnum {
    Started = "Started"
}
export declare class ReloadAll200ApplicationJsonData extends SpeakeasyBase {
    groups: ReloadAll200ApplicationJsonDataGroupsEnum;
    techniques: ReloadAll200ApplicationJsonDataTechniquesEnum;
}
export declare enum ReloadAll200ApplicationJsonResultEnum {
    Success = "success",
    Error = "error"
}
export declare class ReloadAll200ApplicationJson extends SpeakeasyBase {
    action: ReloadAll200ApplicationJsonActionEnum;
    data: ReloadAll200ApplicationJsonData;
    result: ReloadAll200ApplicationJsonResultEnum;
}
export declare class ReloadAllResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    reloadAll200ApplicationJsonObject?: ReloadAll200ApplicationJson;
}

import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ReloadTechniques200ApplicationJsonActionEnum {
    ReloadTechniques = "reloadTechniques"
}
export declare enum ReloadTechniques200ApplicationJsonDataTechniquesEnum {
    Started = "Started"
}
export declare class ReloadTechniques200ApplicationJsonData extends SpeakeasyBase {
    techniques: ReloadTechniques200ApplicationJsonDataTechniquesEnum;
}
export declare enum ReloadTechniques200ApplicationJsonResultEnum {
    Success = "success",
    Error = "error"
}
export declare class ReloadTechniques200ApplicationJson extends SpeakeasyBase {
    action: ReloadTechniques200ApplicationJsonActionEnum;
    data: ReloadTechniques200ApplicationJsonData;
    result: ReloadTechniques200ApplicationJsonResultEnum;
}
export declare class ReloadTechniquesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    reloadTechniques200ApplicationJsonObject?: ReloadTechniques200ApplicationJson;
}

import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ReloadGroups200ApplicationJsonActionEnum {
    ReloadGroups = "reloadGroups"
}
export declare enum ReloadGroups200ApplicationJsonDataGroupsEnum {
    Started = "Started"
}
export declare class ReloadGroups200ApplicationJsonData extends SpeakeasyBase {
    groups: ReloadGroups200ApplicationJsonDataGroupsEnum;
}
export declare enum ReloadGroups200ApplicationJsonResultEnum {
    Success = "success",
    Error = "error"
}
export declare class ReloadGroups200ApplicationJson extends SpeakeasyBase {
    action: ReloadGroups200ApplicationJsonActionEnum;
    data: ReloadGroups200ApplicationJsonData;
    result: ReloadGroups200ApplicationJsonResultEnum;
}
export declare class ReloadGroupsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    reloadGroups200ApplicationJsonObject?: ReloadGroups200ApplicationJson;
}

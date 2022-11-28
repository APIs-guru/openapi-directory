import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ReloadAllDatasourcesAllNodes200ApplicationJsonActionEnum {
    ReloadAllDatasourcesAllNodes = "ReloadAllDatasourcesAllNodes"
}
export declare enum ReloadAllDatasourcesAllNodes200ApplicationJsonResultEnum {
    Success = "success",
    Error = "error"
}
export declare class ReloadAllDatasourcesAllNodes200ApplicationJson extends SpeakeasyBase {
    action: ReloadAllDatasourcesAllNodes200ApplicationJsonActionEnum;
    data: string;
    result: ReloadAllDatasourcesAllNodes200ApplicationJsonResultEnum;
}
export declare class ReloadAllDatasourcesAllNodesResponse extends SpeakeasyBase {
    contentType: string;
    reloadAllDatasourcesAllNodes200ApplicationJsonObject?: ReloadAllDatasourcesAllNodes200ApplicationJson;
    statusCode: number;
}

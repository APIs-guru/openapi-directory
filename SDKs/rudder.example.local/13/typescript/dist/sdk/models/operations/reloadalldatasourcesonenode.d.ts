import { SpeakeasyBase } from "../../../internal/utils";
export declare class ReloadAllDatasourcesOneNodePathParams extends SpeakeasyBase {
    nodeId: string;
}
export declare enum ReloadAllDatasourcesOneNode200ApplicationJsonActionEnum {
    ReloadAllDatasourcesOneNode = "ReloadAllDatasourcesOneNode"
}
export declare enum ReloadAllDatasourcesOneNode200ApplicationJsonResultEnum {
    Success = "success",
    Error = "error"
}
export declare class ReloadAllDatasourcesOneNode200ApplicationJson extends SpeakeasyBase {
    action: ReloadAllDatasourcesOneNode200ApplicationJsonActionEnum;
    data: string;
    result: ReloadAllDatasourcesOneNode200ApplicationJsonResultEnum;
}
export declare class ReloadAllDatasourcesOneNodeRequest extends SpeakeasyBase {
    pathParams: ReloadAllDatasourcesOneNodePathParams;
}
export declare class ReloadAllDatasourcesOneNodeResponse extends SpeakeasyBase {
    contentType: string;
    reloadAllDatasourcesOneNode200ApplicationJsonObject?: ReloadAllDatasourcesOneNode200ApplicationJson;
    statusCode: number;
}

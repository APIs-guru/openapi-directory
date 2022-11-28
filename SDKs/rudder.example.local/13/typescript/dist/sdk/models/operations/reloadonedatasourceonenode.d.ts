import { SpeakeasyBase } from "../../../internal/utils";
export declare class ReloadOneDatasourceOneNodePathParams extends SpeakeasyBase {
    datasourceId: string;
    nodeId: string;
}
export declare enum ReloadOneDatasourceOneNode200ApplicationJsonActionEnum {
    ReloadOneDatasourceOneNode = "ReloadOneDatasourceOneNode"
}
export declare enum ReloadOneDatasourceOneNode200ApplicationJsonResultEnum {
    Success = "success",
    Error = "error"
}
export declare class ReloadOneDatasourceOneNode200ApplicationJson extends SpeakeasyBase {
    action: ReloadOneDatasourceOneNode200ApplicationJsonActionEnum;
    data: string;
    result: ReloadOneDatasourceOneNode200ApplicationJsonResultEnum;
}
export declare class ReloadOneDatasourceOneNodeRequest extends SpeakeasyBase {
    pathParams: ReloadOneDatasourceOneNodePathParams;
}
export declare class ReloadOneDatasourceOneNodeResponse extends SpeakeasyBase {
    contentType: string;
    reloadOneDatasourceOneNode200ApplicationJsonObject?: ReloadOneDatasourceOneNode200ApplicationJson;
    statusCode: number;
}

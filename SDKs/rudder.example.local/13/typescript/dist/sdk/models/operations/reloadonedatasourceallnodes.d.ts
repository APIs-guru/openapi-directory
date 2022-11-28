import { SpeakeasyBase } from "../../../internal/utils";
export declare class ReloadOneDatasourceAllNodesPathParams extends SpeakeasyBase {
    datasourceId: string;
}
export declare enum ReloadOneDatasourceAllNodes200ApplicationJsonActionEnum {
    ReloadOneDatasourceAllNodes = "ReloadOneDatasourceAllNodes"
}
export declare enum ReloadOneDatasourceAllNodes200ApplicationJsonResultEnum {
    Success = "success",
    Error = "error"
}
export declare class ReloadOneDatasourceAllNodes200ApplicationJson extends SpeakeasyBase {
    action: ReloadOneDatasourceAllNodes200ApplicationJsonActionEnum;
    data: string;
    result: ReloadOneDatasourceAllNodes200ApplicationJsonResultEnum;
}
export declare class ReloadOneDatasourceAllNodesRequest extends SpeakeasyBase {
    pathParams: ReloadOneDatasourceAllNodesPathParams;
}
export declare class ReloadOneDatasourceAllNodesResponse extends SpeakeasyBase {
    contentType: string;
    reloadOneDatasourceAllNodes200ApplicationJsonObject?: ReloadOneDatasourceAllNodes200ApplicationJson;
    statusCode: number;
}

import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetDataSourcePathParams extends SpeakeasyBase {
    datasourceId: string;
}
export declare enum GetDataSource200ApplicationJsonActionEnum {
    GetDataSource = "getDataSource"
}
export declare class GetDataSource200ApplicationJsonData extends SpeakeasyBase {
    datasources: shared.Datasource[];
}
export declare enum GetDataSource200ApplicationJsonResultEnum {
    Success = "success",
    Error = "error"
}
export declare class GetDataSource200ApplicationJson extends SpeakeasyBase {
    action: GetDataSource200ApplicationJsonActionEnum;
    data: GetDataSource200ApplicationJsonData;
    result: GetDataSource200ApplicationJsonResultEnum;
}
export declare class GetDataSourceRequest extends SpeakeasyBase {
    pathParams: GetDataSourcePathParams;
}
export declare class GetDataSourceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getDataSource200ApplicationJsonObject?: GetDataSource200ApplicationJson;
}

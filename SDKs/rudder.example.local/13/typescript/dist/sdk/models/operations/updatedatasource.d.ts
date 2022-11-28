import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateDataSourcePathParams extends SpeakeasyBase {
    datasourceId: string;
}
export declare enum UpdateDataSource200ApplicationJsonActionEnum {
    UpdateDataSource = "updateDataSource"
}
export declare class UpdateDataSource200ApplicationJsonData extends SpeakeasyBase {
    datasources: shared.Datasource[];
}
export declare enum UpdateDataSource200ApplicationJsonResultEnum {
    Success = "success",
    Error = "error"
}
export declare class UpdateDataSource200ApplicationJson extends SpeakeasyBase {
    action: UpdateDataSource200ApplicationJsonActionEnum;
    data: UpdateDataSource200ApplicationJsonData;
    result: UpdateDataSource200ApplicationJsonResultEnum;
}
export declare class UpdateDataSourceRequest extends SpeakeasyBase {
    pathParams: UpdateDataSourcePathParams;
    request?: shared.Datasource;
}
export declare class UpdateDataSourceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    updateDataSource200ApplicationJsonObject?: UpdateDataSource200ApplicationJson;
}

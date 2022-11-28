import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteDataSourcePathParams extends SpeakeasyBase {
    datasourceId: string;
}
export declare enum DeleteDataSource200ApplicationJsonActionEnum {
    DeleteDataSource = "deleteDataSource"
}
export declare class DeleteDataSource200ApplicationJsonData extends SpeakeasyBase {
    datasources: shared.Datasource[];
}
export declare enum DeleteDataSource200ApplicationJsonResultEnum {
    Success = "success",
    Error = "error"
}
export declare class DeleteDataSource200ApplicationJson extends SpeakeasyBase {
    action: DeleteDataSource200ApplicationJsonActionEnum;
    data: DeleteDataSource200ApplicationJsonData;
    result: DeleteDataSource200ApplicationJsonResultEnum;
}
export declare class DeleteDataSourceRequest extends SpeakeasyBase {
    pathParams: DeleteDataSourcePathParams;
}
export declare class DeleteDataSourceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    deleteDataSource200ApplicationJsonObject?: DeleteDataSource200ApplicationJson;
}

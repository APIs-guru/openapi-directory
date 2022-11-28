import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateDataSource200ApplicationJsonActionEnum {
    CreateDataSource = "createDataSource"
}
/**
 * Information about the data sources
**/
export declare class CreateDataSource200ApplicationJsonData extends SpeakeasyBase {
    datasources: shared.Datasource[];
}
export declare enum CreateDataSource200ApplicationJsonResultEnum {
    Success = "success",
    Error = "error"
}
export declare class CreateDataSource200ApplicationJson extends SpeakeasyBase {
    action: CreateDataSource200ApplicationJsonActionEnum;
    data: CreateDataSource200ApplicationJsonData;
    result: CreateDataSource200ApplicationJsonResultEnum;
}
export declare class CreateDataSourceRequest extends SpeakeasyBase {
    request?: shared.Datasource;
}
export declare class CreateDataSourceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    createDataSource200ApplicationJsonObject?: CreateDataSource200ApplicationJson;
}

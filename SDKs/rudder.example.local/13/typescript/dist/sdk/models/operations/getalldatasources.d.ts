import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetAllDataSources200ApplicationJsonActionEnum {
    GetAllDataSources = "getAllDataSources"
}
export declare class GetAllDataSources200ApplicationJsonData extends SpeakeasyBase {
    datasources: shared.Datasource[];
}
export declare enum GetAllDataSources200ApplicationJsonResultEnum {
    Success = "success",
    Error = "error"
}
export declare class GetAllDataSources200ApplicationJson extends SpeakeasyBase {
    action: GetAllDataSources200ApplicationJsonActionEnum;
    data: GetAllDataSources200ApplicationJsonData;
    result: GetAllDataSources200ApplicationJsonResultEnum;
}
export declare class GetAllDataSourcesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getAllDataSources200ApplicationJsonObject?: GetAllDataSources200ApplicationJson;
}

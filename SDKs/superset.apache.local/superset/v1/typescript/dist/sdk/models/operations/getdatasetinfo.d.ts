import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetDatasetInfoQueryParams extends SpeakeasyBase {
    q?: shared.GetInfoSchema;
}
export declare class GetDatasetInfoSecurity extends SpeakeasyBase {
    jwt: shared.SchemeJwt;
}
export declare class GetDatasetInfo200ApplicationJsonFiltersColumnName extends SpeakeasyBase {
    name?: string;
    operator?: string;
}
export declare class GetDatasetInfo200ApplicationJsonFilters extends SpeakeasyBase {
    columnName?: GetDatasetInfo200ApplicationJsonFiltersColumnName[];
}
export declare class GetDatasetInfo200ApplicationJson extends SpeakeasyBase {
    addColumns?: Map<string, any>;
    editColumns?: Map<string, any>;
    filters?: GetDatasetInfo200ApplicationJsonFilters;
    permissions?: string[];
}
export declare class GetDatasetInfo400ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class GetDatasetInfo401ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class GetDatasetInfo422ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class GetDatasetInfo500ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class GetDatasetInfoRequest extends SpeakeasyBase {
    queryParams: GetDatasetInfoQueryParams;
    security: GetDatasetInfoSecurity;
}
export declare class GetDatasetInfoResponse extends SpeakeasyBase {
    contentType: string;
    getDatasetInfo200ApplicationJsonObject?: GetDatasetInfo200ApplicationJson;
    getDatasetInfo400ApplicationJsonObject?: GetDatasetInfo400ApplicationJson;
    getDatasetInfo401ApplicationJsonObject?: GetDatasetInfo401ApplicationJson;
    getDatasetInfo422ApplicationJsonObject?: GetDatasetInfo422ApplicationJson;
    getDatasetInfo500ApplicationJsonObject?: GetDatasetInfo500ApplicationJson;
    statusCode: number;
}

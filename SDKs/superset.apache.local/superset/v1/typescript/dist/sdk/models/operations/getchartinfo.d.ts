import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetChartInfoQueryParams extends SpeakeasyBase {
    q?: shared.GetInfoSchema;
}
export declare class GetChartInfoSecurity extends SpeakeasyBase {
    jwt: shared.SchemeJwt;
}
export declare class GetChartInfo200ApplicationJsonFiltersColumnName extends SpeakeasyBase {
    name?: string;
    operator?: string;
}
export declare class GetChartInfo200ApplicationJsonFilters extends SpeakeasyBase {
    columnName?: GetChartInfo200ApplicationJsonFiltersColumnName[];
}
export declare class GetChartInfo200ApplicationJson extends SpeakeasyBase {
    addColumns?: Map<string, any>;
    editColumns?: Map<string, any>;
    filters?: GetChartInfo200ApplicationJsonFilters;
    permissions?: string[];
}
export declare class GetChartInfo400ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class GetChartInfo401ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class GetChartInfo422ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class GetChartInfo500ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class GetChartInfoRequest extends SpeakeasyBase {
    queryParams: GetChartInfoQueryParams;
    security: GetChartInfoSecurity;
}
export declare class GetChartInfoResponse extends SpeakeasyBase {
    contentType: string;
    getChartInfo200ApplicationJsonObject?: GetChartInfo200ApplicationJson;
    getChartInfo400ApplicationJsonObject?: GetChartInfo400ApplicationJson;
    getChartInfo401ApplicationJsonObject?: GetChartInfo401ApplicationJson;
    getChartInfo422ApplicationJsonObject?: GetChartInfo422ApplicationJson;
    getChartInfo500ApplicationJsonObject?: GetChartInfo500ApplicationJson;
    statusCode: number;
}

import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetReportInfoQueryParams extends SpeakeasyBase {
    q?: shared.GetInfoSchema;
}
export declare class GetReportInfoSecurity extends SpeakeasyBase {
    jwt: shared.SchemeJwt;
}
export declare class GetReportInfo200ApplicationJsonFiltersColumnName extends SpeakeasyBase {
    name?: string;
    operator?: string;
}
export declare class GetReportInfo200ApplicationJsonFilters extends SpeakeasyBase {
    columnName?: GetReportInfo200ApplicationJsonFiltersColumnName[];
}
export declare class GetReportInfo200ApplicationJson extends SpeakeasyBase {
    addColumns?: Map<string, any>;
    editColumns?: Map<string, any>;
    filters?: GetReportInfo200ApplicationJsonFilters;
    permissions?: string[];
}
export declare class GetReportInfo400ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class GetReportInfo401ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class GetReportInfo422ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class GetReportInfo500ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class GetReportInfoRequest extends SpeakeasyBase {
    queryParams: GetReportInfoQueryParams;
    security: GetReportInfoSecurity;
}
export declare class GetReportInfoResponse extends SpeakeasyBase {
    contentType: string;
    getReportInfo200ApplicationJsonObject?: GetReportInfo200ApplicationJson;
    getReportInfo400ApplicationJsonObject?: GetReportInfo400ApplicationJson;
    getReportInfo401ApplicationJsonObject?: GetReportInfo401ApplicationJson;
    getReportInfo422ApplicationJsonObject?: GetReportInfo422ApplicationJson;
    getReportInfo500ApplicationJsonObject?: GetReportInfo500ApplicationJson;
    statusCode: number;
}

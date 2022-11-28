import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetDashboardInfoQueryParams extends SpeakeasyBase {
    q?: shared.GetInfoSchema;
}
export declare class GetDashboardInfoSecurity extends SpeakeasyBase {
    jwt: shared.SchemeJwt;
}
export declare class GetDashboardInfo200ApplicationJsonFiltersColumnName extends SpeakeasyBase {
    name?: string;
    operator?: string;
}
export declare class GetDashboardInfo200ApplicationJsonFilters extends SpeakeasyBase {
    columnName?: GetDashboardInfo200ApplicationJsonFiltersColumnName[];
}
export declare class GetDashboardInfo200ApplicationJson extends SpeakeasyBase {
    addColumns?: Map<string, any>;
    editColumns?: Map<string, any>;
    filters?: GetDashboardInfo200ApplicationJsonFilters;
    permissions?: string[];
}
export declare class GetDashboardInfo400ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class GetDashboardInfo401ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class GetDashboardInfo422ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class GetDashboardInfo500ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class GetDashboardInfoRequest extends SpeakeasyBase {
    queryParams: GetDashboardInfoQueryParams;
    security: GetDashboardInfoSecurity;
}
export declare class GetDashboardInfoResponse extends SpeakeasyBase {
    contentType: string;
    getDashboardInfo200ApplicationJsonObject?: GetDashboardInfo200ApplicationJson;
    getDashboardInfo400ApplicationJsonObject?: GetDashboardInfo400ApplicationJson;
    getDashboardInfo401ApplicationJsonObject?: GetDashboardInfo401ApplicationJson;
    getDashboardInfo422ApplicationJsonObject?: GetDashboardInfo422ApplicationJson;
    getDashboardInfo500ApplicationJsonObject?: GetDashboardInfo500ApplicationJson;
    statusCode: number;
}

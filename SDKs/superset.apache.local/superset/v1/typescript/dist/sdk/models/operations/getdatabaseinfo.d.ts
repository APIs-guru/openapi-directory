import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetDatabaseInfoQueryParams extends SpeakeasyBase {
    q?: shared.GetInfoSchema;
}
export declare class GetDatabaseInfoSecurity extends SpeakeasyBase {
    jwt: shared.SchemeJwt;
}
export declare class GetDatabaseInfo200ApplicationJsonFiltersColumnName extends SpeakeasyBase {
    name?: string;
    operator?: string;
}
export declare class GetDatabaseInfo200ApplicationJsonFilters extends SpeakeasyBase {
    columnName?: GetDatabaseInfo200ApplicationJsonFiltersColumnName[];
}
export declare class GetDatabaseInfo200ApplicationJson extends SpeakeasyBase {
    addColumns?: Map<string, any>;
    editColumns?: Map<string, any>;
    filters?: GetDatabaseInfo200ApplicationJsonFilters;
    permissions?: string[];
}
export declare class GetDatabaseInfo400ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class GetDatabaseInfo401ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class GetDatabaseInfo422ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class GetDatabaseInfo500ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class GetDatabaseInfoRequest extends SpeakeasyBase {
    queryParams: GetDatabaseInfoQueryParams;
    security: GetDatabaseInfoSecurity;
}
export declare class GetDatabaseInfoResponse extends SpeakeasyBase {
    contentType: string;
    getDatabaseInfo200ApplicationJsonObject?: GetDatabaseInfo200ApplicationJson;
    getDatabaseInfo400ApplicationJsonObject?: GetDatabaseInfo400ApplicationJson;
    getDatabaseInfo401ApplicationJsonObject?: GetDatabaseInfo401ApplicationJson;
    getDatabaseInfo422ApplicationJsonObject?: GetDatabaseInfo422ApplicationJson;
    getDatabaseInfo500ApplicationJsonObject?: GetDatabaseInfo500ApplicationJson;
    statusCode: number;
}

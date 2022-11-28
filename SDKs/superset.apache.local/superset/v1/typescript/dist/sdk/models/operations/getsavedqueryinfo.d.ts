import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetSavedQueryInfoQueryParams extends SpeakeasyBase {
    q?: shared.GetInfoSchema;
}
export declare class GetSavedQueryInfoSecurity extends SpeakeasyBase {
    jwt: shared.SchemeJwt;
}
export declare class GetSavedQueryInfo200ApplicationJsonFiltersColumnName extends SpeakeasyBase {
    name?: string;
    operator?: string;
}
export declare class GetSavedQueryInfo200ApplicationJsonFilters extends SpeakeasyBase {
    columnName?: GetSavedQueryInfo200ApplicationJsonFiltersColumnName[];
}
export declare class GetSavedQueryInfo200ApplicationJson extends SpeakeasyBase {
    addColumns?: Map<string, any>;
    editColumns?: Map<string, any>;
    filters?: GetSavedQueryInfo200ApplicationJsonFilters;
    permissions?: string[];
}
export declare class GetSavedQueryInfo400ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class GetSavedQueryInfo401ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class GetSavedQueryInfo422ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class GetSavedQueryInfo500ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class GetSavedQueryInfoRequest extends SpeakeasyBase {
    queryParams: GetSavedQueryInfoQueryParams;
    security: GetSavedQueryInfoSecurity;
}
export declare class GetSavedQueryInfoResponse extends SpeakeasyBase {
    contentType: string;
    getSavedQueryInfo200ApplicationJsonObject?: GetSavedQueryInfo200ApplicationJson;
    getSavedQueryInfo400ApplicationJsonObject?: GetSavedQueryInfo400ApplicationJson;
    getSavedQueryInfo401ApplicationJsonObject?: GetSavedQueryInfo401ApplicationJson;
    getSavedQueryInfo422ApplicationJsonObject?: GetSavedQueryInfo422ApplicationJson;
    getSavedQueryInfo500ApplicationJsonObject?: GetSavedQueryInfo500ApplicationJson;
    statusCode: number;
}

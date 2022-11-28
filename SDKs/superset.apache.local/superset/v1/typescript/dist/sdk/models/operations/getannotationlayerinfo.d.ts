import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetAnnotationLayerInfoQueryParams extends SpeakeasyBase {
    q?: shared.GetInfoSchema;
}
export declare class GetAnnotationLayerInfoSecurity extends SpeakeasyBase {
    jwt: shared.SchemeJwt;
}
export declare class GetAnnotationLayerInfo200ApplicationJsonFiltersColumnName extends SpeakeasyBase {
    name?: string;
    operator?: string;
}
export declare class GetAnnotationLayerInfo200ApplicationJsonFilters extends SpeakeasyBase {
    columnName?: GetAnnotationLayerInfo200ApplicationJsonFiltersColumnName[];
}
export declare class GetAnnotationLayerInfo200ApplicationJson extends SpeakeasyBase {
    addColumns?: Map<string, any>;
    editColumns?: Map<string, any>;
    filters?: GetAnnotationLayerInfo200ApplicationJsonFilters;
    permissions?: string[];
}
export declare class GetAnnotationLayerInfo400ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class GetAnnotationLayerInfo401ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class GetAnnotationLayerInfo422ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class GetAnnotationLayerInfo500ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class GetAnnotationLayerInfoRequest extends SpeakeasyBase {
    queryParams: GetAnnotationLayerInfoQueryParams;
    security: GetAnnotationLayerInfoSecurity;
}
export declare class GetAnnotationLayerInfoResponse extends SpeakeasyBase {
    contentType: string;
    getAnnotationLayerInfo200ApplicationJsonObject?: GetAnnotationLayerInfo200ApplicationJson;
    getAnnotationLayerInfo400ApplicationJsonObject?: GetAnnotationLayerInfo400ApplicationJson;
    getAnnotationLayerInfo401ApplicationJsonObject?: GetAnnotationLayerInfo401ApplicationJson;
    getAnnotationLayerInfo422ApplicationJsonObject?: GetAnnotationLayerInfo422ApplicationJson;
    getAnnotationLayerInfo500ApplicationJsonObject?: GetAnnotationLayerInfo500ApplicationJson;
    statusCode: number;
}

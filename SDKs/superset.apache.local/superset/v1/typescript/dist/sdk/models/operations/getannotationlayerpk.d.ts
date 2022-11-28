import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetAnnotationLayerPkPathParams extends SpeakeasyBase {
    pk: number;
}
export declare class GetAnnotationLayerPkQueryParams extends SpeakeasyBase {
    q?: shared.GetItemSchema;
}
export declare class GetAnnotationLayerPkSecurity extends SpeakeasyBase {
    jwt: shared.SchemeJwt;
}
export declare class GetAnnotationLayerPk200ApplicationJsonDescriptionColumns extends SpeakeasyBase {
    columnName?: string;
}
export declare class GetAnnotationLayerPk200ApplicationJsonLabelColumns extends SpeakeasyBase {
    columnName?: string;
}
export declare class GetAnnotationLayerPk200ApplicationJson extends SpeakeasyBase {
    descriptionColumns?: GetAnnotationLayerPk200ApplicationJsonDescriptionColumns;
    id?: string;
    labelColumns?: GetAnnotationLayerPk200ApplicationJsonLabelColumns;
    result?: shared.AnnotationLayerRestApiGet;
    showColumns?: string[];
    showTitle?: string;
}
export declare class GetAnnotationLayerPk400ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class GetAnnotationLayerPk401ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class GetAnnotationLayerPk404ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class GetAnnotationLayerPk422ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class GetAnnotationLayerPk500ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class GetAnnotationLayerPkRequest extends SpeakeasyBase {
    pathParams: GetAnnotationLayerPkPathParams;
    queryParams: GetAnnotationLayerPkQueryParams;
    security: GetAnnotationLayerPkSecurity;
}
export declare class GetAnnotationLayerPkResponse extends SpeakeasyBase {
    contentType: string;
    getAnnotationLayerPk200ApplicationJsonObject?: GetAnnotationLayerPk200ApplicationJson;
    getAnnotationLayerPk400ApplicationJsonObject?: GetAnnotationLayerPk400ApplicationJson;
    getAnnotationLayerPk401ApplicationJsonObject?: GetAnnotationLayerPk401ApplicationJson;
    getAnnotationLayerPk404ApplicationJsonObject?: GetAnnotationLayerPk404ApplicationJson;
    getAnnotationLayerPk422ApplicationJsonObject?: GetAnnotationLayerPk422ApplicationJson;
    getAnnotationLayerPk500ApplicationJsonObject?: GetAnnotationLayerPk500ApplicationJson;
    statusCode: number;
}

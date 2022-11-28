import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetAnnotationLayerQueryParams extends SpeakeasyBase {
    q?: shared.GetListSchema;
}
export declare class GetAnnotationLayerSecurity extends SpeakeasyBase {
    jwt: shared.SchemeJwt;
}
export declare class GetAnnotationLayer200ApplicationJsonDescriptionColumns extends SpeakeasyBase {
    columnName?: string;
}
export declare class GetAnnotationLayer200ApplicationJsonLabelColumns extends SpeakeasyBase {
    columnName?: string;
}
export declare class GetAnnotationLayer200ApplicationJson extends SpeakeasyBase {
    count?: number;
    descriptionColumns?: GetAnnotationLayer200ApplicationJsonDescriptionColumns;
    ids?: string[];
    labelColumns?: GetAnnotationLayer200ApplicationJsonLabelColumns;
    listColumns?: string[];
    listTitle?: string;
    orderColumns?: string[];
    result?: shared.AnnotationLayerRestApiGetList[];
}
export declare class GetAnnotationLayer400ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class GetAnnotationLayer401ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class GetAnnotationLayer422ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class GetAnnotationLayer500ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class GetAnnotationLayerRequest extends SpeakeasyBase {
    queryParams: GetAnnotationLayerQueryParams;
    security: GetAnnotationLayerSecurity;
}
export declare class GetAnnotationLayerResponse extends SpeakeasyBase {
    contentType: string;
    getAnnotationLayer200ApplicationJsonObject?: GetAnnotationLayer200ApplicationJson;
    getAnnotationLayer400ApplicationJsonObject?: GetAnnotationLayer400ApplicationJson;
    getAnnotationLayer401ApplicationJsonObject?: GetAnnotationLayer401ApplicationJson;
    getAnnotationLayer422ApplicationJsonObject?: GetAnnotationLayer422ApplicationJson;
    getAnnotationLayer500ApplicationJsonObject?: GetAnnotationLayer500ApplicationJson;
    statusCode: number;
}

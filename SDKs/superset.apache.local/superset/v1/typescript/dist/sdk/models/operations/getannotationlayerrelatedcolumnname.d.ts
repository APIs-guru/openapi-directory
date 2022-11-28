import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetAnnotationLayerRelatedColumnNamePathParams extends SpeakeasyBase {
    columnName: string;
}
export declare class GetAnnotationLayerRelatedColumnNameQueryParams extends SpeakeasyBase {
    q?: shared.GetRelatedSchema;
}
export declare class GetAnnotationLayerRelatedColumnNameSecurity extends SpeakeasyBase {
    jwt: shared.SchemeJwt;
}
export declare class GetAnnotationLayerRelatedColumnName400ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class GetAnnotationLayerRelatedColumnName401ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class GetAnnotationLayerRelatedColumnName404ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class GetAnnotationLayerRelatedColumnName500ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class GetAnnotationLayerRelatedColumnNameRequest extends SpeakeasyBase {
    pathParams: GetAnnotationLayerRelatedColumnNamePathParams;
    queryParams: GetAnnotationLayerRelatedColumnNameQueryParams;
    security: GetAnnotationLayerRelatedColumnNameSecurity;
}
export declare class GetAnnotationLayerRelatedColumnNameResponse extends SpeakeasyBase {
    contentType: string;
    getAnnotationLayerRelatedColumnName400ApplicationJsonObject?: GetAnnotationLayerRelatedColumnName400ApplicationJson;
    getAnnotationLayerRelatedColumnName401ApplicationJsonObject?: GetAnnotationLayerRelatedColumnName401ApplicationJson;
    getAnnotationLayerRelatedColumnName404ApplicationJsonObject?: GetAnnotationLayerRelatedColumnName404ApplicationJson;
    getAnnotationLayerRelatedColumnName500ApplicationJsonObject?: GetAnnotationLayerRelatedColumnName500ApplicationJson;
    relatedResponseSchema?: shared.RelatedResponseSchema;
    statusCode: number;
}

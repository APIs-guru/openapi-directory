import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetAnnotationLayerPkAnnotationAnnotationIdPathParams extends SpeakeasyBase {
    annotationId: number;
    pk: number;
}
export declare class GetAnnotationLayerPkAnnotationAnnotationIdQueryParams extends SpeakeasyBase {
    q?: shared.GetItemSchema;
}
export declare class GetAnnotationLayerPkAnnotationAnnotationIdSecurity extends SpeakeasyBase {
    jwt: shared.SchemeJwt;
}
export declare class GetAnnotationLayerPkAnnotationAnnotationId200ApplicationJson extends SpeakeasyBase {
    id?: string;
    result?: shared.AnnotationRestApiGet;
}
export declare class GetAnnotationLayerPkAnnotationAnnotationId400ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class GetAnnotationLayerPkAnnotationAnnotationId401ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class GetAnnotationLayerPkAnnotationAnnotationId404ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class GetAnnotationLayerPkAnnotationAnnotationId422ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class GetAnnotationLayerPkAnnotationAnnotationId500ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class GetAnnotationLayerPkAnnotationAnnotationIdRequest extends SpeakeasyBase {
    pathParams: GetAnnotationLayerPkAnnotationAnnotationIdPathParams;
    queryParams: GetAnnotationLayerPkAnnotationAnnotationIdQueryParams;
    security: GetAnnotationLayerPkAnnotationAnnotationIdSecurity;
}
export declare class GetAnnotationLayerPkAnnotationAnnotationIdResponse extends SpeakeasyBase {
    contentType: string;
    getAnnotationLayerPkAnnotationAnnotationId200ApplicationJsonObject?: GetAnnotationLayerPkAnnotationAnnotationId200ApplicationJson;
    getAnnotationLayerPkAnnotationAnnotationId400ApplicationJsonObject?: GetAnnotationLayerPkAnnotationAnnotationId400ApplicationJson;
    getAnnotationLayerPkAnnotationAnnotationId401ApplicationJsonObject?: GetAnnotationLayerPkAnnotationAnnotationId401ApplicationJson;
    getAnnotationLayerPkAnnotationAnnotationId404ApplicationJsonObject?: GetAnnotationLayerPkAnnotationAnnotationId404ApplicationJson;
    getAnnotationLayerPkAnnotationAnnotationId422ApplicationJsonObject?: GetAnnotationLayerPkAnnotationAnnotationId422ApplicationJson;
    getAnnotationLayerPkAnnotationAnnotationId500ApplicationJsonObject?: GetAnnotationLayerPkAnnotationAnnotationId500ApplicationJson;
    statusCode: number;
}

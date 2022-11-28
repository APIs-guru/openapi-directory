import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetAnnotationLayerPkAnnotationPathParams extends SpeakeasyBase {
    pk: number;
}
export declare class GetAnnotationLayerPkAnnotationQueryParams extends SpeakeasyBase {
    q?: shared.GetListSchema;
}
export declare class GetAnnotationLayerPkAnnotationSecurity extends SpeakeasyBase {
    jwt: shared.SchemeJwt;
}
export declare class GetAnnotationLayerPkAnnotation200ApplicationJson extends SpeakeasyBase {
    count?: number;
    ids?: string[];
    result?: shared.AnnotationRestApiGetList[];
}
export declare class GetAnnotationLayerPkAnnotation400ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class GetAnnotationLayerPkAnnotation401ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class GetAnnotationLayerPkAnnotation422ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class GetAnnotationLayerPkAnnotation500ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class GetAnnotationLayerPkAnnotationRequest extends SpeakeasyBase {
    pathParams: GetAnnotationLayerPkAnnotationPathParams;
    queryParams: GetAnnotationLayerPkAnnotationQueryParams;
    security: GetAnnotationLayerPkAnnotationSecurity;
}
export declare class GetAnnotationLayerPkAnnotationResponse extends SpeakeasyBase {
    contentType: string;
    getAnnotationLayerPkAnnotation200ApplicationJsonObject?: GetAnnotationLayerPkAnnotation200ApplicationJson;
    getAnnotationLayerPkAnnotation400ApplicationJsonObject?: GetAnnotationLayerPkAnnotation400ApplicationJson;
    getAnnotationLayerPkAnnotation401ApplicationJsonObject?: GetAnnotationLayerPkAnnotation401ApplicationJson;
    getAnnotationLayerPkAnnotation422ApplicationJsonObject?: GetAnnotationLayerPkAnnotation422ApplicationJson;
    getAnnotationLayerPkAnnotation500ApplicationJsonObject?: GetAnnotationLayerPkAnnotation500ApplicationJson;
    statusCode: number;
}

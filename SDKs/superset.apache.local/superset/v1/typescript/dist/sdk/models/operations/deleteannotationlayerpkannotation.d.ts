import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteAnnotationLayerPkAnnotationPathParams extends SpeakeasyBase {
    pk: number;
}
export declare class DeleteAnnotationLayerPkAnnotationQueryParams extends SpeakeasyBase {
    q?: number[];
}
export declare class DeleteAnnotationLayerPkAnnotationSecurity extends SpeakeasyBase {
    jwt: shared.SchemeJwt;
}
export declare class DeleteAnnotationLayerPkAnnotation200ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class DeleteAnnotationLayerPkAnnotation401ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class DeleteAnnotationLayerPkAnnotation404ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class DeleteAnnotationLayerPkAnnotation422ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class DeleteAnnotationLayerPkAnnotation500ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class DeleteAnnotationLayerPkAnnotationRequest extends SpeakeasyBase {
    pathParams: DeleteAnnotationLayerPkAnnotationPathParams;
    queryParams: DeleteAnnotationLayerPkAnnotationQueryParams;
    security: DeleteAnnotationLayerPkAnnotationSecurity;
}
export declare class DeleteAnnotationLayerPkAnnotationResponse extends SpeakeasyBase {
    contentType: string;
    deleteAnnotationLayerPkAnnotation200ApplicationJsonObject?: DeleteAnnotationLayerPkAnnotation200ApplicationJson;
    deleteAnnotationLayerPkAnnotation401ApplicationJsonObject?: DeleteAnnotationLayerPkAnnotation401ApplicationJson;
    deleteAnnotationLayerPkAnnotation404ApplicationJsonObject?: DeleteAnnotationLayerPkAnnotation404ApplicationJson;
    deleteAnnotationLayerPkAnnotation422ApplicationJsonObject?: DeleteAnnotationLayerPkAnnotation422ApplicationJson;
    deleteAnnotationLayerPkAnnotation500ApplicationJsonObject?: DeleteAnnotationLayerPkAnnotation500ApplicationJson;
    statusCode: number;
}

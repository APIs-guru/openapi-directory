import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutAnnotationLayerPkAnnotationAnnotationIdPathParams extends SpeakeasyBase {
    annotationId: number;
    pk: number;
}
export declare class PutAnnotationLayerPkAnnotationAnnotationIdSecurity extends SpeakeasyBase {
    jwt: shared.SchemeJwt;
}
export declare class PutAnnotationLayerPkAnnotationAnnotationId200ApplicationJson extends SpeakeasyBase {
    id?: number;
    result?: shared.AnnotationRestApiPut;
}
export declare class PutAnnotationLayerPkAnnotationAnnotationId400ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class PutAnnotationLayerPkAnnotationAnnotationId401ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class PutAnnotationLayerPkAnnotationAnnotationId404ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class PutAnnotationLayerPkAnnotationAnnotationId500ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class PutAnnotationLayerPkAnnotationAnnotationIdRequest extends SpeakeasyBase {
    pathParams: PutAnnotationLayerPkAnnotationAnnotationIdPathParams;
    request: shared.AnnotationRestApiPut;
    security: PutAnnotationLayerPkAnnotationAnnotationIdSecurity;
}
export declare class PutAnnotationLayerPkAnnotationAnnotationIdResponse extends SpeakeasyBase {
    contentType: string;
    putAnnotationLayerPkAnnotationAnnotationId200ApplicationJsonObject?: PutAnnotationLayerPkAnnotationAnnotationId200ApplicationJson;
    putAnnotationLayerPkAnnotationAnnotationId400ApplicationJsonObject?: PutAnnotationLayerPkAnnotationAnnotationId400ApplicationJson;
    putAnnotationLayerPkAnnotationAnnotationId401ApplicationJsonObject?: PutAnnotationLayerPkAnnotationAnnotationId401ApplicationJson;
    putAnnotationLayerPkAnnotationAnnotationId404ApplicationJsonObject?: PutAnnotationLayerPkAnnotationAnnotationId404ApplicationJson;
    putAnnotationLayerPkAnnotationAnnotationId500ApplicationJsonObject?: PutAnnotationLayerPkAnnotationAnnotationId500ApplicationJson;
    statusCode: number;
}

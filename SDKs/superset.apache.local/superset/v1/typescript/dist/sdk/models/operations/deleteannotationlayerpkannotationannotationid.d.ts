import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteAnnotationLayerPkAnnotationAnnotationIdPathParams extends SpeakeasyBase {
    annotationId: number;
    pk: number;
}
export declare class DeleteAnnotationLayerPkAnnotationAnnotationIdSecurity extends SpeakeasyBase {
    jwt: shared.SchemeJwt;
}
export declare class DeleteAnnotationLayerPkAnnotationAnnotationId200ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class DeleteAnnotationLayerPkAnnotationAnnotationId404ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class DeleteAnnotationLayerPkAnnotationAnnotationId422ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class DeleteAnnotationLayerPkAnnotationAnnotationId500ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class DeleteAnnotationLayerPkAnnotationAnnotationIdRequest extends SpeakeasyBase {
    pathParams: DeleteAnnotationLayerPkAnnotationAnnotationIdPathParams;
    security: DeleteAnnotationLayerPkAnnotationAnnotationIdSecurity;
}
export declare class DeleteAnnotationLayerPkAnnotationAnnotationIdResponse extends SpeakeasyBase {
    contentType: string;
    deleteAnnotationLayerPkAnnotationAnnotationId200ApplicationJsonObject?: DeleteAnnotationLayerPkAnnotationAnnotationId200ApplicationJson;
    deleteAnnotationLayerPkAnnotationAnnotationId404ApplicationJsonObject?: DeleteAnnotationLayerPkAnnotationAnnotationId404ApplicationJson;
    deleteAnnotationLayerPkAnnotationAnnotationId422ApplicationJsonObject?: DeleteAnnotationLayerPkAnnotationAnnotationId422ApplicationJson;
    deleteAnnotationLayerPkAnnotationAnnotationId500ApplicationJsonObject?: DeleteAnnotationLayerPkAnnotationAnnotationId500ApplicationJson;
    statusCode: number;
}

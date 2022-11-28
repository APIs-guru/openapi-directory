import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutAnnotationLayerPkPathParams extends SpeakeasyBase {
    pk: number;
}
export declare class PutAnnotationLayerPkSecurity extends SpeakeasyBase {
    jwt: shared.SchemeJwt;
}
export declare class PutAnnotationLayerPk200ApplicationJson extends SpeakeasyBase {
    id?: number;
    result?: shared.AnnotationLayerRestApiPut;
}
export declare class PutAnnotationLayerPk400ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class PutAnnotationLayerPk401ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class PutAnnotationLayerPk404ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class PutAnnotationLayerPk500ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class PutAnnotationLayerPkRequest extends SpeakeasyBase {
    pathParams: PutAnnotationLayerPkPathParams;
    request: shared.AnnotationLayerRestApiPut;
    security: PutAnnotationLayerPkSecurity;
}
export declare class PutAnnotationLayerPkResponse extends SpeakeasyBase {
    contentType: string;
    putAnnotationLayerPk200ApplicationJsonObject?: PutAnnotationLayerPk200ApplicationJson;
    putAnnotationLayerPk400ApplicationJsonObject?: PutAnnotationLayerPk400ApplicationJson;
    putAnnotationLayerPk401ApplicationJsonObject?: PutAnnotationLayerPk401ApplicationJson;
    putAnnotationLayerPk404ApplicationJsonObject?: PutAnnotationLayerPk404ApplicationJson;
    putAnnotationLayerPk500ApplicationJsonObject?: PutAnnotationLayerPk500ApplicationJson;
    statusCode: number;
}

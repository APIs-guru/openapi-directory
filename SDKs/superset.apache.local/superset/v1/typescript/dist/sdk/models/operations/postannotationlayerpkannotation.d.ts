import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostAnnotationLayerPkAnnotationPathParams extends SpeakeasyBase {
    pk: number;
}
export declare class PostAnnotationLayerPkAnnotationSecurity extends SpeakeasyBase {
    jwt: shared.SchemeJwt;
}
export declare class PostAnnotationLayerPkAnnotation201ApplicationJson extends SpeakeasyBase {
    id?: number;
    result?: shared.AnnotationRestApiPost;
}
export declare class PostAnnotationLayerPkAnnotation400ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class PostAnnotationLayerPkAnnotation401ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class PostAnnotationLayerPkAnnotation404ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class PostAnnotationLayerPkAnnotation500ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class PostAnnotationLayerPkAnnotationRequest extends SpeakeasyBase {
    pathParams: PostAnnotationLayerPkAnnotationPathParams;
    request: shared.AnnotationRestApiPost;
    security: PostAnnotationLayerPkAnnotationSecurity;
}
export declare class PostAnnotationLayerPkAnnotationResponse extends SpeakeasyBase {
    contentType: string;
    postAnnotationLayerPkAnnotation201ApplicationJsonObject?: PostAnnotationLayerPkAnnotation201ApplicationJson;
    postAnnotationLayerPkAnnotation400ApplicationJsonObject?: PostAnnotationLayerPkAnnotation400ApplicationJson;
    postAnnotationLayerPkAnnotation401ApplicationJsonObject?: PostAnnotationLayerPkAnnotation401ApplicationJson;
    postAnnotationLayerPkAnnotation404ApplicationJsonObject?: PostAnnotationLayerPkAnnotation404ApplicationJson;
    postAnnotationLayerPkAnnotation500ApplicationJsonObject?: PostAnnotationLayerPkAnnotation500ApplicationJson;
    statusCode: number;
}

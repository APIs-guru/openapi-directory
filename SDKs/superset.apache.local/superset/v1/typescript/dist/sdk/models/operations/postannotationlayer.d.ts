import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostAnnotationLayerSecurity extends SpeakeasyBase {
    jwt: shared.SchemeJwt;
}
export declare class PostAnnotationLayer201ApplicationJson extends SpeakeasyBase {
    id?: number;
    result?: shared.AnnotationLayerRestApiPost;
}
export declare class PostAnnotationLayer400ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class PostAnnotationLayer401ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class PostAnnotationLayer404ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class PostAnnotationLayer500ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class PostAnnotationLayerRequest extends SpeakeasyBase {
    request: shared.AnnotationLayerRestApiPost;
    security: PostAnnotationLayerSecurity;
}
export declare class PostAnnotationLayerResponse extends SpeakeasyBase {
    contentType: string;
    postAnnotationLayer201ApplicationJsonObject?: PostAnnotationLayer201ApplicationJson;
    postAnnotationLayer400ApplicationJsonObject?: PostAnnotationLayer400ApplicationJson;
    postAnnotationLayer401ApplicationJsonObject?: PostAnnotationLayer401ApplicationJson;
    postAnnotationLayer404ApplicationJsonObject?: PostAnnotationLayer404ApplicationJson;
    postAnnotationLayer500ApplicationJsonObject?: PostAnnotationLayer500ApplicationJson;
    statusCode: number;
}

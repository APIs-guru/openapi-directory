import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteAnnotationLayerPkPathParams extends SpeakeasyBase {
    pk: number;
}
export declare class DeleteAnnotationLayerPkSecurity extends SpeakeasyBase {
    jwt: shared.SchemeJwt;
}
export declare class DeleteAnnotationLayerPk200ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class DeleteAnnotationLayerPk404ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class DeleteAnnotationLayerPk422ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class DeleteAnnotationLayerPk500ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class DeleteAnnotationLayerPkRequest extends SpeakeasyBase {
    pathParams: DeleteAnnotationLayerPkPathParams;
    security: DeleteAnnotationLayerPkSecurity;
}
export declare class DeleteAnnotationLayerPkResponse extends SpeakeasyBase {
    contentType: string;
    deleteAnnotationLayerPk200ApplicationJsonObject?: DeleteAnnotationLayerPk200ApplicationJson;
    deleteAnnotationLayerPk404ApplicationJsonObject?: DeleteAnnotationLayerPk404ApplicationJson;
    deleteAnnotationLayerPk422ApplicationJsonObject?: DeleteAnnotationLayerPk422ApplicationJson;
    deleteAnnotationLayerPk500ApplicationJsonObject?: DeleteAnnotationLayerPk500ApplicationJson;
    statusCode: number;
}

import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteAnnotationLayerQueryParams extends SpeakeasyBase {
    q?: number[];
}
export declare class DeleteAnnotationLayerSecurity extends SpeakeasyBase {
    jwt: shared.SchemeJwt;
}
export declare class DeleteAnnotationLayer200ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class DeleteAnnotationLayer401ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class DeleteAnnotationLayer404ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class DeleteAnnotationLayer422ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class DeleteAnnotationLayer500ApplicationJson extends SpeakeasyBase {
    message?: string;
}
export declare class DeleteAnnotationLayerRequest extends SpeakeasyBase {
    queryParams: DeleteAnnotationLayerQueryParams;
    security: DeleteAnnotationLayerSecurity;
}
export declare class DeleteAnnotationLayerResponse extends SpeakeasyBase {
    contentType: string;
    deleteAnnotationLayer200ApplicationJsonObject?: DeleteAnnotationLayer200ApplicationJson;
    deleteAnnotationLayer401ApplicationJsonObject?: DeleteAnnotationLayer401ApplicationJson;
    deleteAnnotationLayer404ApplicationJsonObject?: DeleteAnnotationLayer404ApplicationJson;
    deleteAnnotationLayer422ApplicationJsonObject?: DeleteAnnotationLayer422ApplicationJson;
    deleteAnnotationLayer500ApplicationJsonObject?: DeleteAnnotationLayer500ApplicationJson;
    statusCode: number;
}

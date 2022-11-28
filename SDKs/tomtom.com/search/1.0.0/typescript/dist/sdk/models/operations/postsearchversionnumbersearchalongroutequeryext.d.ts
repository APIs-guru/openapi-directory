import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostSearchVersionNumberSearchAlongRouteQueryExtPathParams extends SpeakeasyBase {
    ext: shared.ExtEnum;
    query: string;
    versionNumber: number;
}
export declare class PostSearchVersionNumberSearchAlongRouteQueryExtQueryParams extends SpeakeasyBase {
    limit?: number;
    maxDetourTime: number;
}
export declare class PostSearchVersionNumberSearchAlongRouteQueryExtRequestBodyRoutePoints extends SpeakeasyBase {
    lat?: number;
    lon?: number;
}
export declare class PostSearchVersionNumberSearchAlongRouteQueryExtRequestBodyRoute extends SpeakeasyBase {
    points?: PostSearchVersionNumberSearchAlongRouteQueryExtRequestBodyRoutePoints[];
}
export declare class PostSearchVersionNumberSearchAlongRouteQueryExtRequestBody extends SpeakeasyBase {
    route?: PostSearchVersionNumberSearchAlongRouteQueryExtRequestBodyRoute;
}
export declare class PostSearchVersionNumberSearchAlongRouteQueryExtRequest extends SpeakeasyBase {
    pathParams: PostSearchVersionNumberSearchAlongRouteQueryExtPathParams;
    queryParams: PostSearchVersionNumberSearchAlongRouteQueryExtQueryParams;
    request?: PostSearchVersionNumberSearchAlongRouteQueryExtRequestBody;
}
export declare class PostSearchVersionNumberSearchAlongRouteQueryExtResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}

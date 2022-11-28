import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostSearchVersionNumberGeometrySearchQueryExtPathParams extends SpeakeasyBase {
    ext: shared.ExtEnum;
    query: string;
    versionNumber: number;
}
export declare class PostSearchVersionNumberGeometrySearchQueryExtQueryParams extends SpeakeasyBase {
    extendedPostalCodesFor?: string;
    idxSet?: string;
    language?: string;
    limit?: number;
}
export declare class PostSearchVersionNumberGeometrySearchQueryExtRequestBodyGeometryList extends SpeakeasyBase {
    position?: string;
    radius?: number;
    type?: string;
    vertices?: string[];
}
export declare class PostSearchVersionNumberGeometrySearchQueryExtRequestBody extends SpeakeasyBase {
    geometryList?: PostSearchVersionNumberGeometrySearchQueryExtRequestBodyGeometryList[];
}
export declare class PostSearchVersionNumberGeometrySearchQueryExtRequest extends SpeakeasyBase {
    pathParams: PostSearchVersionNumberGeometrySearchQueryExtPathParams;
    queryParams: PostSearchVersionNumberGeometrySearchQueryExtQueryParams;
    request?: PostSearchVersionNumberGeometrySearchQueryExtRequestBody;
}
export declare class PostSearchVersionNumberGeometrySearchQueryExtResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}

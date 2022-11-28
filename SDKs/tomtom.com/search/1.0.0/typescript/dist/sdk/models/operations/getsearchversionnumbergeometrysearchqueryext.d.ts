import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetSearchVersionNumberGeometrySearchQueryExtPathParams extends SpeakeasyBase {
    ext: shared.ExtEnum;
    query: string;
    versionNumber: number;
}
export declare class GetSearchVersionNumberGeometrySearchQueryExtQueryParams extends SpeakeasyBase {
    extendedPostalCodesFor?: string;
    geometryList?: string;
    idxSet?: string;
    language?: string;
    limit?: number;
}
export declare class GetSearchVersionNumberGeometrySearchQueryExtRequest extends SpeakeasyBase {
    pathParams: GetSearchVersionNumberGeometrySearchQueryExtPathParams;
    queryParams: GetSearchVersionNumberGeometrySearchQueryExtQueryParams;
}
export declare class GetSearchVersionNumberGeometrySearchQueryExtResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}

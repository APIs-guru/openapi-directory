import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetSearchVersionNumberCSCategoryExtPathParams extends SpeakeasyBase {
    category: string;
    ext: shared.ExtEnum;
    versionNumber: number;
}
export declare class GetSearchVersionNumberCSCategoryExtQueryParams extends SpeakeasyBase {
    btmRight?: string;
    countrySet?: string;
    idxSet?: string;
    language?: string;
    lat?: number;
    limit?: number;
    lon?: number;
    ofs?: number;
    radius?: number;
    topLeft?: string;
    typeahead?: boolean;
    view?: shared.ViewEnum;
}
export declare class GetSearchVersionNumberCSCategoryExtRequest extends SpeakeasyBase {
    pathParams: GetSearchVersionNumberCSCategoryExtPathParams;
    queryParams: GetSearchVersionNumberCSCategoryExtQueryParams;
}
export declare class GetSearchVersionNumberCSCategoryExtResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}

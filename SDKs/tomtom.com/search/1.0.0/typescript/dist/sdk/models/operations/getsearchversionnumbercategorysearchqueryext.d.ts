import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetSearchVersionNumberCategorySearchQueryExtPathParams extends SpeakeasyBase {
    ext: shared.ExtEnum;
    query: string;
    versionNumber: number;
}
export declare class GetSearchVersionNumberCategorySearchQueryExtQueryParams extends SpeakeasyBase {
    btmRight?: string;
    countrySet?: string;
    extendedPostalCodesFor?: string;
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
export declare class GetSearchVersionNumberCategorySearchQueryExtRequest extends SpeakeasyBase {
    pathParams: GetSearchVersionNumberCategorySearchQueryExtPathParams;
    queryParams: GetSearchVersionNumberCategorySearchQueryExtQueryParams;
}
export declare class GetSearchVersionNumberCategorySearchQueryExtResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}

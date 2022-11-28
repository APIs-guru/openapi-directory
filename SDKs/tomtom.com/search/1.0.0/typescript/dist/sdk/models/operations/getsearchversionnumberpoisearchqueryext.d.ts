import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetSearchVersionNumberPoiSearchQueryExtPathParams extends SpeakeasyBase {
    ext: shared.ExtEnum;
    query: string;
    versionNumber: number;
}
export declare class GetSearchVersionNumberPoiSearchQueryExtQueryParams extends SpeakeasyBase {
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
export declare class GetSearchVersionNumberPoiSearchQueryExtRequest extends SpeakeasyBase {
    pathParams: GetSearchVersionNumberPoiSearchQueryExtPathParams;
    queryParams: GetSearchVersionNumberPoiSearchQueryExtQueryParams;
}
export declare class GetSearchVersionNumberPoiSearchQueryExtResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}

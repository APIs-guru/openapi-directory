import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetSearchVersionNumberGeocodeQueryExtPathParams extends SpeakeasyBase {
    ext: shared.ExtEnum;
    query: string;
    versionNumber: number;
}
export declare class GetSearchVersionNumberGeocodeQueryExtQueryParams extends SpeakeasyBase {
    btmRight?: string;
    countrySet?: string;
    extendedPostalCodesFor?: string;
    language?: string;
    lat?: number;
    limit?: number;
    lon?: number;
    ofs?: number;
    radius?: number;
    storeResult?: boolean;
    topLeft?: string;
    typeahead?: boolean;
    view?: shared.ViewEnum;
}
export declare class GetSearchVersionNumberGeocodeQueryExtRequest extends SpeakeasyBase {
    pathParams: GetSearchVersionNumberGeocodeQueryExtPathParams;
    queryParams: GetSearchVersionNumberGeocodeQueryExtQueryParams;
}
export declare class GetSearchVersionNumberGeocodeQueryExtResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}

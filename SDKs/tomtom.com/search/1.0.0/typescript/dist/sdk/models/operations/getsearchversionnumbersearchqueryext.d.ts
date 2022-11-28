import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetSearchVersionNumberSearchQueryExtPathParams extends SpeakeasyBase {
    ext: shared.ExtEnum;
    query: string;
    versionNumber: number;
}
export declare class GetSearchVersionNumberSearchQueryExtQueryParams extends SpeakeasyBase {
    btmRight?: string;
    countrySet?: string;
    extendedPostalCodesFor?: string;
    idxSet?: string;
    language?: string;
    lat?: number;
    limit?: number;
    lon?: number;
    maxFuzzyLevel?: number;
    minFuzzyLevel?: number;
    ofs?: number;
    radius?: number;
    topLeft?: string;
    typeahead?: boolean;
    view?: shared.ViewEnum;
}
export declare class GetSearchVersionNumberSearchQueryExtRequest extends SpeakeasyBase {
    pathParams: GetSearchVersionNumberSearchQueryExtPathParams;
    queryParams: GetSearchVersionNumberSearchQueryExtQueryParams;
}
export declare class GetSearchVersionNumberSearchQueryExtResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}

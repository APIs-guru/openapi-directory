import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetSearchVersionNumberNearbySearchExtPathParams extends SpeakeasyBase {
    ext: shared.ExtEnum;
    versionNumber: number;
}
export declare class GetSearchVersionNumberNearbySearchExtQueryParams extends SpeakeasyBase {
    btmRight?: string;
    countrySet?: string;
    extendedPostalCodesFor?: string;
    idxSet?: string;
    language?: string;
    lat: number;
    limit?: number;
    lon: number;
    maxFuzzyLevel?: number;
    minFuzzyLevel?: number;
    ofs?: number;
    radius?: number;
    topLeft?: string;
    view?: shared.ViewEnum;
}
export declare class GetSearchVersionNumberNearbySearchExtRequest extends SpeakeasyBase {
    pathParams: GetSearchVersionNumberNearbySearchExtPathParams;
    queryParams: GetSearchVersionNumberNearbySearchExtQueryParams;
}
export declare class GetSearchVersionNumberNearbySearchExtResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}

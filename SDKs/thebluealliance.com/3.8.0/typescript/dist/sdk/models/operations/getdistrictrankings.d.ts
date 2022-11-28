import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetDistrictRankingsPathParams extends SpeakeasyBase {
    districtKey: string;
}
export declare class GetDistrictRankingsHeaders extends SpeakeasyBase {
    ifModifiedSince?: string;
}
export declare class GetDistrictRankingsSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class GetDistrictRankingsRequest extends SpeakeasyBase {
    pathParams: GetDistrictRankingsPathParams;
    headers: GetDistrictRankingsHeaders;
    security: GetDistrictRankingsSecurity;
}
export declare class GetDistrictRankingsResponse extends SpeakeasyBase {
    contentType: string;
    districtRankings?: shared.DistrictRanking[];
    headers: Map<string, string[]>;
    statusCode: number;
}

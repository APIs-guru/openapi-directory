import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetEventRankingsPathParams extends SpeakeasyBase {
    eventKey: string;
}
export declare class GetEventRankingsHeaders extends SpeakeasyBase {
    ifModifiedSince?: string;
}
export declare class GetEventRankingsSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class GetEventRankingsRequest extends SpeakeasyBase {
    pathParams: GetEventRankingsPathParams;
    headers: GetEventRankingsHeaders;
    security: GetEventRankingsSecurity;
}
export declare class GetEventRankingsResponse extends SpeakeasyBase {
    contentType: string;
    eventRanking?: shared.EventRanking;
    headers: Map<string, string[]>;
    statusCode: number;
}

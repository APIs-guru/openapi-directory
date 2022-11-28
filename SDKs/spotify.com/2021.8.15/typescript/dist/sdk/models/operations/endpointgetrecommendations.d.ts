import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class EndpointGetRecommendationsQueryParams extends SpeakeasyBase {
    limit?: number;
    market?: string;
    maxAcousticness?: number;
    maxDanceability?: number;
    maxDurationMs?: number;
    maxEnergy?: number;
    maxInstrumentalness?: number;
    maxKey?: number;
    maxLiveness?: number;
    maxLoudness?: number;
    maxMode?: number;
    maxPopularity?: number;
    maxSpeechiness?: number;
    maxTempo?: number;
    maxTimeSignature?: number;
    maxValence?: number;
    minAcousticness?: number;
    minDanceability?: number;
    minDurationMs?: number;
    minEnergy?: number;
    minInstrumentalness?: number;
    minKey?: number;
    minLiveness?: number;
    minLoudness?: number;
    minMode?: number;
    minPopularity?: number;
    minSpeechiness?: number;
    minTempo?: number;
    minTimeSignature?: number;
    minValence?: number;
    seedArtists: string;
    seedGenres: string;
    seedTracks: string;
    targetAcousticness?: number;
    targetDanceability?: number;
    targetDurationMs?: number;
    targetEnergy?: number;
    targetInstrumentalness?: number;
    targetKey?: number;
    targetLiveness?: number;
    targetLoudness?: number;
    targetMode?: number;
    targetPopularity?: number;
    targetSpeechiness?: number;
    targetTempo?: number;
    targetTimeSignature?: number;
    targetValence?: number;
}
export declare class EndpointGetRecommendationsHeaders extends SpeakeasyBase {
    authorization: string;
}
export declare class EndpointGetRecommendationsSecurity extends SpeakeasyBase {
    spotifyAuth: shared.SchemeSpotifyAuth;
}
export declare class EndpointGetRecommendationsRequest extends SpeakeasyBase {
    queryParams: EndpointGetRecommendationsQueryParams;
    headers: EndpointGetRecommendationsHeaders;
    security: EndpointGetRecommendationsSecurity;
}
export declare class EndpointGetRecommendationsResponse extends SpeakeasyBase {
    contentType: string;
    errorResponseObject?: shared.ErrorResponseObject;
    recommendationsObject?: shared.RecommendationsObject;
    statusCode: number;
}

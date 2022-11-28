import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class EndpointGetRecommendationsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=market" })
  market?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=max_acousticness" })
  maxAcousticness?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=max_danceability" })
  maxDanceability?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=max_duration_ms" })
  maxDurationMs?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=max_energy" })
  maxEnergy?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=max_instrumentalness" })
  maxInstrumentalness?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=max_key" })
  maxKey?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=max_liveness" })
  maxLiveness?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=max_loudness" })
  maxLoudness?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=max_mode" })
  maxMode?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=max_popularity" })
  maxPopularity?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=max_speechiness" })
  maxSpeechiness?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=max_tempo" })
  maxTempo?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=max_time_signature" })
  maxTimeSignature?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=max_valence" })
  maxValence?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=min_acousticness" })
  minAcousticness?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=min_danceability" })
  minDanceability?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=min_duration_ms" })
  minDurationMs?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=min_energy" })
  minEnergy?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=min_instrumentalness" })
  minInstrumentalness?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=min_key" })
  minKey?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=min_liveness" })
  minLiveness?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=min_loudness" })
  minLoudness?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=min_mode" })
  minMode?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=min_popularity" })
  minPopularity?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=min_speechiness" })
  minSpeechiness?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=min_tempo" })
  minTempo?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=min_time_signature" })
  minTimeSignature?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=min_valence" })
  minValence?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=seed_artists" })
  seedArtists: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=seed_genres" })
  seedGenres: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=seed_tracks" })
  seedTracks: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=target_acousticness" })
  targetAcousticness?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=target_danceability" })
  targetDanceability?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=target_duration_ms" })
  targetDurationMs?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=target_energy" })
  targetEnergy?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=target_instrumentalness" })
  targetInstrumentalness?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=target_key" })
  targetKey?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=target_liveness" })
  targetLiveness?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=target_loudness" })
  targetLoudness?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=target_mode" })
  targetMode?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=target_popularity" })
  targetPopularity?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=target_speechiness" })
  targetSpeechiness?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=target_tempo" })
  targetTempo?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=target_time_signature" })
  targetTimeSignature?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=target_valence" })
  targetValence?: number;
}


export class EndpointGetRecommendationsHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;
}


export class EndpointGetRecommendationsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  spotifyAuth: shared.SchemeSpotifyAuth;
}


export class EndpointGetRecommendationsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: EndpointGetRecommendationsQueryParams;

  @SpeakeasyMetadata()
  headers: EndpointGetRecommendationsHeaders;

  @SpeakeasyMetadata()
  security: EndpointGetRecommendationsSecurity;
}


export class EndpointGetRecommendationsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponseObject?: shared.ErrorResponseObject;

  @SpeakeasyMetadata()
  recommendationsObject?: shared.RecommendationsObject;

  @SpeakeasyMetadata()
  statusCode: number;
}

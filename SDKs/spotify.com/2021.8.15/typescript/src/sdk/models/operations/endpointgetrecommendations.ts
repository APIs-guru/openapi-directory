import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class EndpointGetRecommendationsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=market" })
  market?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=max_acousticness" })
  maxAcousticness?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=max_danceability" })
  maxDanceability?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=max_duration_ms" })
  maxDurationMs?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=max_energy" })
  maxEnergy?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=max_instrumentalness" })
  maxInstrumentalness?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=max_key" })
  maxKey?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=max_liveness" })
  maxLiveness?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=max_loudness" })
  maxLoudness?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=max_mode" })
  maxMode?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=max_popularity" })
  maxPopularity?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=max_speechiness" })
  maxSpeechiness?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=max_tempo" })
  maxTempo?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=max_time_signature" })
  maxTimeSignature?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=max_valence" })
  maxValence?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=min_acousticness" })
  minAcousticness?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=min_danceability" })
  minDanceability?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=min_duration_ms" })
  minDurationMs?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=min_energy" })
  minEnergy?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=min_instrumentalness" })
  minInstrumentalness?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=min_key" })
  minKey?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=min_liveness" })
  minLiveness?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=min_loudness" })
  minLoudness?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=min_mode" })
  minMode?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=min_popularity" })
  minPopularity?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=min_speechiness" })
  minSpeechiness?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=min_tempo" })
  minTempo?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=min_time_signature" })
  minTimeSignature?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=min_valence" })
  minValence?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=seed_artists" })
  seedArtists: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=seed_genres" })
  seedGenres: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=seed_tracks" })
  seedTracks: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=target_acousticness" })
  targetAcousticness?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=target_danceability" })
  targetDanceability?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=target_duration_ms" })
  targetDurationMs?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=target_energy" })
  targetEnergy?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=target_instrumentalness" })
  targetInstrumentalness?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=target_key" })
  targetKey?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=target_liveness" })
  targetLiveness?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=target_loudness" })
  targetLoudness?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=target_mode" })
  targetMode?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=target_popularity" })
  targetPopularity?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=target_speechiness" })
  targetSpeechiness?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=target_tempo" })
  targetTempo?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=target_time_signature" })
  targetTimeSignature?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=target_valence" })
  targetValence?: number;
}


export class EndpointGetRecommendationsHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;
}


export class EndpointGetRecommendationsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  spotifyAuth: shared.SchemeSpotifyAuth;
}


export class EndpointGetRecommendationsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: EndpointGetRecommendationsQueryParams;

  @Metadata()
  headers: EndpointGetRecommendationsHeaders;

  @Metadata()
  security: EndpointGetRecommendationsSecurity;
}


export class EndpointGetRecommendationsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponseObject?: shared.ErrorResponseObject;

  @Metadata()
  recommendationsObject?: shared.RecommendationsObject;

  @Metadata()
  statusCode: number;
}

from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class EndpointGetRecommendationsQueryParams:
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    market: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'market', 'style': 'form', 'explode': True }})
    max_acousticness: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'max_acousticness', 'style': 'form', 'explode': True }})
    max_danceability: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'max_danceability', 'style': 'form', 'explode': True }})
    max_duration_ms: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'max_duration_ms', 'style': 'form', 'explode': True }})
    max_energy: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'max_energy', 'style': 'form', 'explode': True }})
    max_instrumentalness: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'max_instrumentalness', 'style': 'form', 'explode': True }})
    max_key: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'max_key', 'style': 'form', 'explode': True }})
    max_liveness: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'max_liveness', 'style': 'form', 'explode': True }})
    max_loudness: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'max_loudness', 'style': 'form', 'explode': True }})
    max_mode: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'max_mode', 'style': 'form', 'explode': True }})
    max_popularity: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'max_popularity', 'style': 'form', 'explode': True }})
    max_speechiness: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'max_speechiness', 'style': 'form', 'explode': True }})
    max_tempo: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'max_tempo', 'style': 'form', 'explode': True }})
    max_time_signature: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'max_time_signature', 'style': 'form', 'explode': True }})
    max_valence: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'max_valence', 'style': 'form', 'explode': True }})
    min_acousticness: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'min_acousticness', 'style': 'form', 'explode': True }})
    min_danceability: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'min_danceability', 'style': 'form', 'explode': True }})
    min_duration_ms: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'min_duration_ms', 'style': 'form', 'explode': True }})
    min_energy: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'min_energy', 'style': 'form', 'explode': True }})
    min_instrumentalness: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'min_instrumentalness', 'style': 'form', 'explode': True }})
    min_key: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'min_key', 'style': 'form', 'explode': True }})
    min_liveness: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'min_liveness', 'style': 'form', 'explode': True }})
    min_loudness: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'min_loudness', 'style': 'form', 'explode': True }})
    min_mode: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'min_mode', 'style': 'form', 'explode': True }})
    min_popularity: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'min_popularity', 'style': 'form', 'explode': True }})
    min_speechiness: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'min_speechiness', 'style': 'form', 'explode': True }})
    min_tempo: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'min_tempo', 'style': 'form', 'explode': True }})
    min_time_signature: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'min_time_signature', 'style': 'form', 'explode': True }})
    min_valence: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'min_valence', 'style': 'form', 'explode': True }})
    seed_artists: str = field(default=None, metadata={'query_param': { 'field_name': 'seed_artists', 'style': 'form', 'explode': True }})
    seed_genres: str = field(default=None, metadata={'query_param': { 'field_name': 'seed_genres', 'style': 'form', 'explode': True }})
    seed_tracks: str = field(default=None, metadata={'query_param': { 'field_name': 'seed_tracks', 'style': 'form', 'explode': True }})
    target_acousticness: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'target_acousticness', 'style': 'form', 'explode': True }})
    target_danceability: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'target_danceability', 'style': 'form', 'explode': True }})
    target_duration_ms: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'target_duration_ms', 'style': 'form', 'explode': True }})
    target_energy: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'target_energy', 'style': 'form', 'explode': True }})
    target_instrumentalness: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'target_instrumentalness', 'style': 'form', 'explode': True }})
    target_key: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'target_key', 'style': 'form', 'explode': True }})
    target_liveness: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'target_liveness', 'style': 'form', 'explode': True }})
    target_loudness: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'target_loudness', 'style': 'form', 'explode': True }})
    target_mode: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'target_mode', 'style': 'form', 'explode': True }})
    target_popularity: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'target_popularity', 'style': 'form', 'explode': True }})
    target_speechiness: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'target_speechiness', 'style': 'form', 'explode': True }})
    target_tempo: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'target_tempo', 'style': 'form', 'explode': True }})
    target_time_signature: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'target_time_signature', 'style': 'form', 'explode': True }})
    target_valence: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'target_valence', 'style': 'form', 'explode': True }})
    

@dataclass
class EndpointGetRecommendationsHeaders:
    authorization: str = field(default=None, metadata={'header': { 'field_name': 'Authorization' }})
    

@dataclass
class EndpointGetRecommendationsSecurity:
    spotify_auth: shared.SchemeSpotifyAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class EndpointGetRecommendationsRequest:
    query_params: EndpointGetRecommendationsQueryParams = field(default=None)
    headers: EndpointGetRecommendationsHeaders = field(default=None)
    security: EndpointGetRecommendationsSecurity = field(default=None)
    

@dataclass
class EndpointGetRecommendationsResponse:
    content_type: str = field(default=None)
    error_response_object: Optional[shared.ErrorResponseObject] = field(default=None)
    recommendations_object: Optional[shared.RecommendationsObject] = field(default=None)
    status_code: int = field(default=None)
    

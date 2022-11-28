from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class EndpointGetAnArtistsTopTracksPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class EndpointGetAnArtistsTopTracksQueryParams:
    market: str = field(metadata={'query_param': { 'field_name': 'market', 'style': 'form', 'explode': True }})
    

@dataclass
class EndpointGetAnArtistsTopTracksHeaders:
    authorization: str = field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclass
class EndpointGetAnArtistsTopTracksSecurity:
    spotify_auth: shared.SchemeSpotifyAuth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class EndpointGetAnArtistsTopTracksRequest:
    headers: EndpointGetAnArtistsTopTracksHeaders = field()
    path_params: EndpointGetAnArtistsTopTracksPathParams = field()
    query_params: EndpointGetAnArtistsTopTracksQueryParams = field()
    security: EndpointGetAnArtistsTopTracksSecurity = field()
    

@dataclass
class EndpointGetAnArtistsTopTracksResponse:
    content_type: str = field()
    status_code: int = field()
    error_response_object: Optional[shared.ErrorResponseObject] = field(default=None)
    tracks_object: Optional[shared.TracksObject] = field(default=None)
    

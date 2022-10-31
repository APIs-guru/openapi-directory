from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class EndpointGetAnArtistsTopTracksPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class EndpointGetAnArtistsTopTracksQueryParams:
    market: str = field(default=None, metadata={'query_param': { 'field_name': 'market', 'style': 'form', 'explode': True }})
    

@dataclass
class EndpointGetAnArtistsTopTracksHeaders:
    authorization: str = field(default=None, metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclass
class EndpointGetAnArtistsTopTracksSecurity:
    spotify_auth: shared.SchemeSpotifyAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class EndpointGetAnArtistsTopTracksRequest:
    path_params: EndpointGetAnArtistsTopTracksPathParams = field(default=None)
    query_params: EndpointGetAnArtistsTopTracksQueryParams = field(default=None)
    headers: EndpointGetAnArtistsTopTracksHeaders = field(default=None)
    security: EndpointGetAnArtistsTopTracksSecurity = field(default=None)
    

@dataclass
class EndpointGetAnArtistsTopTracksResponse:
    content_type: str = field(default=None)
    error_response_object: Optional[shared.ErrorResponseObject] = field(default=None)
    status_code: int = field(default=None)
    tracks_object: Optional[shared.TracksObject] = field(default=None)
    

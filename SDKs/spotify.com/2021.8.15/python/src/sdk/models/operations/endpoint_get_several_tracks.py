from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class EndpointGetSeveralTracksQueryParams:
    ids: str = field(metadata={'query_param': { 'field_name': 'ids', 'style': 'form', 'explode': True }})
    market: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'market', 'style': 'form', 'explode': True }})
    

@dataclass
class EndpointGetSeveralTracksHeaders:
    authorization: str = field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclass
class EndpointGetSeveralTracksSecurity:
    spotify_auth: shared.SchemeSpotifyAuth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class EndpointGetSeveralTracksRequest:
    headers: EndpointGetSeveralTracksHeaders = field()
    query_params: EndpointGetSeveralTracksQueryParams = field()
    security: EndpointGetSeveralTracksSecurity = field()
    

@dataclass
class EndpointGetSeveralTracksResponse:
    content_type: str = field()
    status_code: int = field()
    error_response_object: Optional[shared.ErrorResponseObject] = field(default=None)
    tracks_object: Optional[shared.TracksObject] = field(default=None)
    

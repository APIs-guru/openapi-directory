from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class EndpointGetSeveralTracksQueryParams:
    ids: str = field(default=None, metadata={'query_param': { 'field_name': 'ids', 'style': 'form', 'explode': True }})
    market: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'market', 'style': 'form', 'explode': True }})
    

@dataclass
class EndpointGetSeveralTracksHeaders:
    authorization: str = field(default=None, metadata={'header': { 'field_name': 'Authorization' }})
    

@dataclass
class EndpointGetSeveralTracksSecurity:
    spotify_auth: shared.SchemeSpotifyAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class EndpointGetSeveralTracksRequest:
    query_params: EndpointGetSeveralTracksQueryParams = field(default=None)
    headers: EndpointGetSeveralTracksHeaders = field(default=None)
    security: EndpointGetSeveralTracksSecurity = field(default=None)
    

@dataclass
class EndpointGetSeveralTracksResponse:
    content_type: str = field(default=None)
    error_response_object: Optional[shared.ErrorResponseObject] = field(default=None)
    status_code: int = field(default=None)
    tracks_object: Optional[shared.TracksObject] = field(default=None)
    

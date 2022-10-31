from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class EndpointGetTrackPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class EndpointGetTrackQueryParams:
    market: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'market', 'style': 'form', 'explode': True }})
    

@dataclass
class EndpointGetTrackHeaders:
    authorization: str = field(default=None, metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclass
class EndpointGetTrackSecurity:
    spotify_auth: shared.SchemeSpotifyAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class EndpointGetTrackRequest:
    path_params: EndpointGetTrackPathParams = field(default=None)
    query_params: EndpointGetTrackQueryParams = field(default=None)
    headers: EndpointGetTrackHeaders = field(default=None)
    security: EndpointGetTrackSecurity = field(default=None)
    

@dataclass
class EndpointGetTrackResponse:
    content_type: str = field(default=None)
    error_response_object: Optional[shared.ErrorResponseObject] = field(default=None)
    status_code: int = field(default=None)
    track_object: Optional[shared.TrackObject] = field(default=None)
    

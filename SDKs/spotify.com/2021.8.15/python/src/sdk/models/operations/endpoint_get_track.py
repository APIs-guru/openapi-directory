from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class EndpointGetTrackPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class EndpointGetTrackQueryParams:
    market: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'market', 'style': 'form', 'explode': True }})
    

@dataclass
class EndpointGetTrackHeaders:
    authorization: str = field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclass
class EndpointGetTrackSecurity:
    spotify_auth: shared.SchemeSpotifyAuth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class EndpointGetTrackRequest:
    headers: EndpointGetTrackHeaders = field()
    path_params: EndpointGetTrackPathParams = field()
    query_params: EndpointGetTrackQueryParams = field()
    security: EndpointGetTrackSecurity = field()
    

@dataclass
class EndpointGetTrackResponse:
    content_type: str = field()
    status_code: int = field()
    error_response_object: Optional[shared.ErrorResponseObject] = field(default=None)
    track_object: Optional[shared.TrackObject] = field(default=None)
    

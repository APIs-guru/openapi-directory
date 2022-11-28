from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class EndpointSkipUsersPlaybackToPreviousTrackQueryParams:
    device_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'device_id', 'style': 'form', 'explode': True }})
    

@dataclass
class EndpointSkipUsersPlaybackToPreviousTrackHeaders:
    authorization: str = field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclass
class EndpointSkipUsersPlaybackToPreviousTrackSecurity:
    spotify_auth: shared.SchemeSpotifyAuth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class EndpointSkipUsersPlaybackToPreviousTrackRequest:
    headers: EndpointSkipUsersPlaybackToPreviousTrackHeaders = field()
    query_params: EndpointSkipUsersPlaybackToPreviousTrackQueryParams = field()
    security: EndpointSkipUsersPlaybackToPreviousTrackSecurity = field()
    

@dataclass
class EndpointSkipUsersPlaybackToPreviousTrackResponse:
    content_type: str = field()
    status_code: int = field()
    error_response_object: Optional[shared.ErrorResponseObject] = field(default=None)
    

from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class EndpointSkipUsersPlaybackToNextTrackQueryParams:
    device_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'device_id', 'style': 'form', 'explode': True }})
    

@dataclass
class EndpointSkipUsersPlaybackToNextTrackHeaders:
    authorization: str = field(default=None, metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclass
class EndpointSkipUsersPlaybackToNextTrackSecurity:
    spotify_auth: shared.SchemeSpotifyAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class EndpointSkipUsersPlaybackToNextTrackRequest:
    query_params: EndpointSkipUsersPlaybackToNextTrackQueryParams = field(default=None)
    headers: EndpointSkipUsersPlaybackToNextTrackHeaders = field(default=None)
    security: EndpointSkipUsersPlaybackToNextTrackSecurity = field(default=None)
    

@dataclass
class EndpointSkipUsersPlaybackToNextTrackResponse:
    content_type: str = field(default=None)
    error_response_object: Optional[shared.ErrorResponseObject] = field(default=None)
    status_code: int = field(default=None)
    

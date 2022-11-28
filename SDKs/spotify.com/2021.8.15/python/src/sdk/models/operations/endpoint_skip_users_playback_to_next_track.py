from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class EndpointSkipUsersPlaybackToNextTrackQueryParams:
    device_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'device_id', 'style': 'form', 'explode': True }})
    

@dataclass
class EndpointSkipUsersPlaybackToNextTrackHeaders:
    authorization: str = field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclass
class EndpointSkipUsersPlaybackToNextTrackSecurity:
    spotify_auth: shared.SchemeSpotifyAuth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class EndpointSkipUsersPlaybackToNextTrackRequest:
    headers: EndpointSkipUsersPlaybackToNextTrackHeaders = field()
    query_params: EndpointSkipUsersPlaybackToNextTrackQueryParams = field()
    security: EndpointSkipUsersPlaybackToNextTrackSecurity = field()
    

@dataclass
class EndpointSkipUsersPlaybackToNextTrackResponse:
    content_type: str = field()
    status_code: int = field()
    error_response_object: Optional[shared.ErrorResponseObject] = field(default=None)
    

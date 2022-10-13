from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class EndpointPauseAUsersPlaybackQueryParams:
    device_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'device_id', 'style': 'form', 'explode': True }})
    

@dataclass
class EndpointPauseAUsersPlaybackHeaders:
    authorization: str = field(default=None, metadata={'header': { 'field_name': 'Authorization' }})
    

@dataclass
class EndpointPauseAUsersPlaybackSecurity:
    spotify_auth: shared.SchemeSpotifyAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class EndpointPauseAUsersPlaybackRequest:
    query_params: EndpointPauseAUsersPlaybackQueryParams = field(default=None)
    headers: EndpointPauseAUsersPlaybackHeaders = field(default=None)
    security: EndpointPauseAUsersPlaybackSecurity = field(default=None)
    

@dataclass
class EndpointPauseAUsersPlaybackResponse:
    content_type: str = field(default=None)
    error_response_object: Optional[shared.ErrorResponseObject] = field(default=None)
    status_code: int = field(default=None)
    

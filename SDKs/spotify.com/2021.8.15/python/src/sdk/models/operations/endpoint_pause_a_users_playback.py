from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class EndpointPauseAUsersPlaybackQueryParams:
    device_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'device_id', 'style': 'form', 'explode': True }})
    

@dataclass
class EndpointPauseAUsersPlaybackHeaders:
    authorization: str = field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclass
class EndpointPauseAUsersPlaybackSecurity:
    spotify_auth: shared.SchemeSpotifyAuth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class EndpointPauseAUsersPlaybackRequest:
    headers: EndpointPauseAUsersPlaybackHeaders = field()
    query_params: EndpointPauseAUsersPlaybackQueryParams = field()
    security: EndpointPauseAUsersPlaybackSecurity = field()
    

@dataclass
class EndpointPauseAUsersPlaybackResponse:
    content_type: str = field()
    status_code: int = field()
    error_response_object: Optional[shared.ErrorResponseObject] = field(default=None)
    

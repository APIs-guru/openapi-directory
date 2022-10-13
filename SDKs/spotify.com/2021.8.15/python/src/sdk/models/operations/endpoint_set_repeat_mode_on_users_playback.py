from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class EndpointSetRepeatModeOnUsersPlaybackQueryParams:
    device_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'device_id', 'style': 'form', 'explode': True }})
    state: str = field(default=None, metadata={'query_param': { 'field_name': 'state', 'style': 'form', 'explode': True }})
    

@dataclass
class EndpointSetRepeatModeOnUsersPlaybackHeaders:
    authorization: str = field(default=None, metadata={'header': { 'field_name': 'Authorization' }})
    

@dataclass
class EndpointSetRepeatModeOnUsersPlaybackSecurity:
    spotify_auth: shared.SchemeSpotifyAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class EndpointSetRepeatModeOnUsersPlaybackRequest:
    query_params: EndpointSetRepeatModeOnUsersPlaybackQueryParams = field(default=None)
    headers: EndpointSetRepeatModeOnUsersPlaybackHeaders = field(default=None)
    security: EndpointSetRepeatModeOnUsersPlaybackSecurity = field(default=None)
    

@dataclass
class EndpointSetRepeatModeOnUsersPlaybackResponse:
    content_type: str = field(default=None)
    error_response_object: Optional[shared.ErrorResponseObject] = field(default=None)
    status_code: int = field(default=None)
    

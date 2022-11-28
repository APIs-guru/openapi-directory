from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class EndpointSetRepeatModeOnUsersPlaybackQueryParams:
    state: str = field(metadata={'query_param': { 'field_name': 'state', 'style': 'form', 'explode': True }})
    device_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'device_id', 'style': 'form', 'explode': True }})
    

@dataclass
class EndpointSetRepeatModeOnUsersPlaybackHeaders:
    authorization: str = field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclass
class EndpointSetRepeatModeOnUsersPlaybackSecurity:
    spotify_auth: shared.SchemeSpotifyAuth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class EndpointSetRepeatModeOnUsersPlaybackRequest:
    headers: EndpointSetRepeatModeOnUsersPlaybackHeaders = field()
    query_params: EndpointSetRepeatModeOnUsersPlaybackQueryParams = field()
    security: EndpointSetRepeatModeOnUsersPlaybackSecurity = field()
    

@dataclass
class EndpointSetRepeatModeOnUsersPlaybackResponse:
    content_type: str = field()
    status_code: int = field()
    error_response_object: Optional[shared.ErrorResponseObject] = field(default=None)
    

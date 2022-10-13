from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class EndpointToggleShuffleForUsersPlaybackQueryParams:
    device_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'device_id', 'style': 'form', 'explode': True }})
    state: bool = field(default=None, metadata={'query_param': { 'field_name': 'state', 'style': 'form', 'explode': True }})
    

@dataclass
class EndpointToggleShuffleForUsersPlaybackHeaders:
    authorization: str = field(default=None, metadata={'header': { 'field_name': 'Authorization' }})
    

@dataclass
class EndpointToggleShuffleForUsersPlaybackSecurity:
    spotify_auth: shared.SchemeSpotifyAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class EndpointToggleShuffleForUsersPlaybackRequest:
    query_params: EndpointToggleShuffleForUsersPlaybackQueryParams = field(default=None)
    headers: EndpointToggleShuffleForUsersPlaybackHeaders = field(default=None)
    security: EndpointToggleShuffleForUsersPlaybackSecurity = field(default=None)
    

@dataclass
class EndpointToggleShuffleForUsersPlaybackResponse:
    content_type: str = field(default=None)
    error_response_object: Optional[shared.ErrorResponseObject] = field(default=None)
    status_code: int = field(default=None)
    

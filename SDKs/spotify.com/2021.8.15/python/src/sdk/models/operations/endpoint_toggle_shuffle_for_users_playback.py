from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class EndpointToggleShuffleForUsersPlaybackQueryParams:
    state: bool = field(metadata={'query_param': { 'field_name': 'state', 'style': 'form', 'explode': True }})
    device_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'device_id', 'style': 'form', 'explode': True }})
    

@dataclass
class EndpointToggleShuffleForUsersPlaybackHeaders:
    authorization: str = field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclass
class EndpointToggleShuffleForUsersPlaybackSecurity:
    spotify_auth: shared.SchemeSpotifyAuth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class EndpointToggleShuffleForUsersPlaybackRequest:
    headers: EndpointToggleShuffleForUsersPlaybackHeaders = field()
    query_params: EndpointToggleShuffleForUsersPlaybackQueryParams = field()
    security: EndpointToggleShuffleForUsersPlaybackSecurity = field()
    

@dataclass
class EndpointToggleShuffleForUsersPlaybackResponse:
    content_type: str = field()
    status_code: int = field()
    error_response_object: Optional[shared.ErrorResponseObject] = field(default=None)
    

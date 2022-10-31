from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class EndpointUnfollowPlaylistPathParams:
    playlist_id: str = field(default=None, metadata={'path_param': { 'field_name': 'playlist_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class EndpointUnfollowPlaylistHeaders:
    authorization: str = field(default=None, metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclass
class EndpointUnfollowPlaylistSecurity:
    spotify_auth: shared.SchemeSpotifyAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class EndpointUnfollowPlaylistRequest:
    path_params: EndpointUnfollowPlaylistPathParams = field(default=None)
    headers: EndpointUnfollowPlaylistHeaders = field(default=None)
    security: EndpointUnfollowPlaylistSecurity = field(default=None)
    

@dataclass
class EndpointUnfollowPlaylistResponse:
    content_type: str = field(default=None)
    error_response_object: Optional[shared.ErrorResponseObject] = field(default=None)
    status_code: int = field(default=None)
    

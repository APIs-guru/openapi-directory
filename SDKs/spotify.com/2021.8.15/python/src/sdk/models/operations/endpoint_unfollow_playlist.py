from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class EndpointUnfollowPlaylistPathParams:
    playlist_id: str = field(metadata={'path_param': { 'field_name': 'playlist_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class EndpointUnfollowPlaylistHeaders:
    authorization: str = field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclass
class EndpointUnfollowPlaylistSecurity:
    spotify_auth: shared.SchemeSpotifyAuth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class EndpointUnfollowPlaylistRequest:
    headers: EndpointUnfollowPlaylistHeaders = field()
    path_params: EndpointUnfollowPlaylistPathParams = field()
    security: EndpointUnfollowPlaylistSecurity = field()
    

@dataclass
class EndpointUnfollowPlaylistResponse:
    content_type: str = field()
    status_code: int = field()
    error_response_object: Optional[shared.ErrorResponseObject] = field(default=None)
    

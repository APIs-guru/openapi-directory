from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class EndpointFollowPlaylistPathParams:
    playlist_id: str = field(default=None, metadata={'path_param': { 'field_name': 'playlist_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class EndpointFollowPlaylistHeaders:
    authorization: str = field(default=None, metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    content_type: str = field(default=None, metadata={'header': { 'field_name': 'Content-Type', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class EndpointFollowPlaylistRequestBody:
    public: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'public' }})
    

@dataclass
class EndpointFollowPlaylistSecurity:
    spotify_auth: shared.SchemeSpotifyAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class EndpointFollowPlaylistRequest:
    path_params: EndpointFollowPlaylistPathParams = field(default=None)
    headers: EndpointFollowPlaylistHeaders = field(default=None)
    request: Optional[EndpointFollowPlaylistRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: EndpointFollowPlaylistSecurity = field(default=None)
    

@dataclass
class EndpointFollowPlaylistResponse:
    content_type: str = field(default=None)
    error_response_object: Optional[shared.ErrorResponseObject] = field(default=None)
    status_code: int = field(default=None)
    

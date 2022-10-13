from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class EndpointCreatePlaylistPathParams:
    user_id: str = field(default=None, metadata={'path_param': { 'field_name': 'user_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class EndpointCreatePlaylistHeaders:
    authorization: str = field(default=None, metadata={'header': { 'field_name': 'Authorization' }})
    content_type: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'Content-Type' }})
    

@dataclass_json
@dataclass
class EndpointCreatePlaylistRequestBody:
    collaborative: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'collaborative' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    public: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'public' }})
    

@dataclass
class EndpointCreatePlaylistSecurity:
    spotify_auth: shared.SchemeSpotifyAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class EndpointCreatePlaylistRequest:
    path_params: EndpointCreatePlaylistPathParams = field(default=None)
    headers: EndpointCreatePlaylistHeaders = field(default=None)
    request: EndpointCreatePlaylistRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: EndpointCreatePlaylistSecurity = field(default=None)
    

@dataclass
class EndpointCreatePlaylistResponse:
    content_type: str = field(default=None)
    error_response_object: Optional[shared.ErrorResponseObject] = field(default=None)
    playlist_object: Optional[shared.PlaylistObject] = field(default=None)
    status_code: int = field(default=None)
    

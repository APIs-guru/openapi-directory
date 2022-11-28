from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class EndpointCreatePlaylistPathParams:
    user_id: str = field(metadata={'path_param': { 'field_name': 'user_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class EndpointCreatePlaylistHeaders:
    authorization: str = field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    content_type: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'Content-Type', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class EndpointCreatePlaylistRequestBody:
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    collaborative: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('collaborative') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    public: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('public') }})
    

@dataclass
class EndpointCreatePlaylistSecurity:
    spotify_auth: shared.SchemeSpotifyAuth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class EndpointCreatePlaylistRequest:
    headers: EndpointCreatePlaylistHeaders = field()
    path_params: EndpointCreatePlaylistPathParams = field()
    request: EndpointCreatePlaylistRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    security: EndpointCreatePlaylistSecurity = field()
    

@dataclass
class EndpointCreatePlaylistResponse:
    content_type: str = field()
    status_code: int = field()
    error_response_object: Optional[shared.ErrorResponseObject] = field(default=None)
    playlist_object: Optional[shared.PlaylistObject] = field(default=None)
    

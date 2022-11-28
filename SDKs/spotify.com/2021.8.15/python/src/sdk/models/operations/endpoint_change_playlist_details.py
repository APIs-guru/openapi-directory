from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class EndpointChangePlaylistDetailsPathParams:
    playlist_id: str = field(metadata={'path_param': { 'field_name': 'playlist_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class EndpointChangePlaylistDetailsHeaders:
    authorization: str = field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    content_type: str = field(metadata={'header': { 'field_name': 'Content-Type', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class EndpointChangePlaylistDetailsRequestBody:
    collaborative: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('collaborative') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    public: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('public') }})
    

@dataclass
class EndpointChangePlaylistDetailsSecurity:
    spotify_auth: shared.SchemeSpotifyAuth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class EndpointChangePlaylistDetailsRequest:
    headers: EndpointChangePlaylistDetailsHeaders = field()
    path_params: EndpointChangePlaylistDetailsPathParams = field()
    security: EndpointChangePlaylistDetailsSecurity = field()
    request: Optional[EndpointChangePlaylistDetailsRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class EndpointChangePlaylistDetailsResponse:
    content_type: str = field()
    status_code: int = field()
    error_response_object: Optional[shared.ErrorResponseObject] = field(default=None)
    

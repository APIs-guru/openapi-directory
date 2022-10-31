from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class EndpointChangePlaylistDetailsPathParams:
    playlist_id: str = field(default=None, metadata={'path_param': { 'field_name': 'playlist_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class EndpointChangePlaylistDetailsHeaders:
    authorization: str = field(default=None, metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    content_type: str = field(default=None, metadata={'header': { 'field_name': 'Content-Type', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class EndpointChangePlaylistDetailsRequestBody:
    collaborative: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'collaborative' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    public: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'public' }})
    

@dataclass
class EndpointChangePlaylistDetailsSecurity:
    spotify_auth: shared.SchemeSpotifyAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class EndpointChangePlaylistDetailsRequest:
    path_params: EndpointChangePlaylistDetailsPathParams = field(default=None)
    headers: EndpointChangePlaylistDetailsHeaders = field(default=None)
    request: Optional[EndpointChangePlaylistDetailsRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: EndpointChangePlaylistDetailsSecurity = field(default=None)
    

@dataclass
class EndpointChangePlaylistDetailsResponse:
    content_type: str = field(default=None)
    error_response_object: Optional[shared.ErrorResponseObject] = field(default=None)
    status_code: int = field(default=None)
    

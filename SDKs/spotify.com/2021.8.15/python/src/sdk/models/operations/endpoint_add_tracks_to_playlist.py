from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class EndpointAddTracksToPlaylistPathParams:
    playlist_id: str = field(metadata={'path_param': { 'field_name': 'playlist_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class EndpointAddTracksToPlaylistQueryParams:
    position: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'position', 'style': 'form', 'explode': True }})
    uris: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'uris', 'style': 'form', 'explode': True }})
    

@dataclass
class EndpointAddTracksToPlaylistHeaders:
    authorization: str = field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    content_type: str = field(metadata={'header': { 'field_name': 'Content-Type', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class EndpointAddTracksToPlaylistRequestBody:
    position: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('position') }})
    uris: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uris') }})
    

@dataclass
class EndpointAddTracksToPlaylistSecurity:
    spotify_auth: shared.SchemeSpotifyAuth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class EndpointAddTracksToPlaylistRequest:
    headers: EndpointAddTracksToPlaylistHeaders = field()
    path_params: EndpointAddTracksToPlaylistPathParams = field()
    query_params: EndpointAddTracksToPlaylistQueryParams = field()
    security: EndpointAddTracksToPlaylistSecurity = field()
    request: Optional[EndpointAddTracksToPlaylistRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class EndpointAddTracksToPlaylistResponse:
    content_type: str = field()
    status_code: int = field()
    error_response_object: Optional[shared.ErrorResponseObject] = field(default=None)
    snapshot_id_object: Optional[shared.SnapshotIDObject] = field(default=None)
    

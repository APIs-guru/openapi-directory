from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class EndpointRemoveTracksPlaylistPathParams:
    playlist_id: str = field(metadata={'path_param': { 'field_name': 'playlist_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class EndpointRemoveTracksPlaylistHeaders:
    authorization: str = field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    content_type: str = field(metadata={'header': { 'field_name': 'Content-Type', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class EndpointRemoveTracksPlaylistRequestBody:
    tracks: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('tracks') }})
    snapshot_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('snapshot_id') }})
    

@dataclass
class EndpointRemoveTracksPlaylistSecurity:
    spotify_auth: shared.SchemeSpotifyAuth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class EndpointRemoveTracksPlaylistRequest:
    headers: EndpointRemoveTracksPlaylistHeaders = field()
    path_params: EndpointRemoveTracksPlaylistPathParams = field()
    request: EndpointRemoveTracksPlaylistRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    security: EndpointRemoveTracksPlaylistSecurity = field()
    

@dataclass
class EndpointRemoveTracksPlaylistResponse:
    content_type: str = field()
    status_code: int = field()
    error_response_object: Optional[shared.ErrorResponseObject] = field(default=None)
    snapshot_id_object: Optional[shared.SnapshotIDObject] = field(default=None)
    

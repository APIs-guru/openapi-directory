from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class EndpointReorderOrReplacePlaylistsTracksPathParams:
    playlist_id: str = field(metadata={'path_param': { 'field_name': 'playlist_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class EndpointReorderOrReplacePlaylistsTracksQueryParams:
    uris: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'uris', 'style': 'form', 'explode': True }})
    

@dataclass
class EndpointReorderOrReplacePlaylistsTracksHeaders:
    authorization: str = field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    content_type: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'Content-Type', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class EndpointReorderOrReplacePlaylistsTracksRequestBody:
    insert_before: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('insert_before') }})
    range_length: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('range_length') }})
    range_start: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('range_start') }})
    snapshot_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('snapshot_id') }})
    uris: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uris') }})
    

@dataclass
class EndpointReorderOrReplacePlaylistsTracksSecurity:
    spotify_auth: shared.SchemeSpotifyAuth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class EndpointReorderOrReplacePlaylistsTracksRequest:
    headers: EndpointReorderOrReplacePlaylistsTracksHeaders = field()
    path_params: EndpointReorderOrReplacePlaylistsTracksPathParams = field()
    query_params: EndpointReorderOrReplacePlaylistsTracksQueryParams = field()
    security: EndpointReorderOrReplacePlaylistsTracksSecurity = field()
    request: Optional[EndpointReorderOrReplacePlaylistsTracksRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class EndpointReorderOrReplacePlaylistsTracksResponse:
    content_type: str = field()
    status_code: int = field()
    error_response_object: Optional[shared.ErrorResponseObject] = field(default=None)
    snapshot_id_object: Optional[shared.SnapshotIDObject] = field(default=None)
    

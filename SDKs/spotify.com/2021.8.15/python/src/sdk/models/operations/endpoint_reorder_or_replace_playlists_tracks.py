from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class EndpointReorderOrReplacePlaylistsTracksPathParams:
    playlist_id: str = field(default=None, metadata={'path_param': { 'field_name': 'playlist_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class EndpointReorderOrReplacePlaylistsTracksQueryParams:
    uris: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'uris', 'style': 'form', 'explode': True }})
    

@dataclass
class EndpointReorderOrReplacePlaylistsTracksHeaders:
    authorization: str = field(default=None, metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    content_type: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'Content-Type', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class EndpointReorderOrReplacePlaylistsTracksRequestBody:
    insert_before: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'insert_before' }})
    range_length: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'range_length' }})
    range_start: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'range_start' }})
    snapshot_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'snapshot_id' }})
    uris: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uris' }})
    

@dataclass
class EndpointReorderOrReplacePlaylistsTracksSecurity:
    spotify_auth: shared.SchemeSpotifyAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class EndpointReorderOrReplacePlaylistsTracksRequest:
    path_params: EndpointReorderOrReplacePlaylistsTracksPathParams = field(default=None)
    query_params: EndpointReorderOrReplacePlaylistsTracksQueryParams = field(default=None)
    headers: EndpointReorderOrReplacePlaylistsTracksHeaders = field(default=None)
    request: Optional[EndpointReorderOrReplacePlaylistsTracksRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: EndpointReorderOrReplacePlaylistsTracksSecurity = field(default=None)
    

@dataclass
class EndpointReorderOrReplacePlaylistsTracksResponse:
    content_type: str = field(default=None)
    error_response_object: Optional[shared.ErrorResponseObject] = field(default=None)
    snapshot_id_object: Optional[shared.SnapshotIDObject] = field(default=None)
    status_code: int = field(default=None)
    

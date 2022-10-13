from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class EndpointRemoveTracksPlaylistPathParams:
    playlist_id: str = field(default=None, metadata={'path_param': { 'field_name': 'playlist_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class EndpointRemoveTracksPlaylistHeaders:
    authorization: str = field(default=None, metadata={'header': { 'field_name': 'Authorization' }})
    content_type: str = field(default=None, metadata={'header': { 'field_name': 'Content-Type' }})
    

@dataclass_json
@dataclass
class EndpointRemoveTracksPlaylistRequestBody:
    snapshot_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'snapshot_id' }})
    tracks: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tracks' }})
    

@dataclass
class EndpointRemoveTracksPlaylistSecurity:
    spotify_auth: shared.SchemeSpotifyAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class EndpointRemoveTracksPlaylistRequest:
    path_params: EndpointRemoveTracksPlaylistPathParams = field(default=None)
    headers: EndpointRemoveTracksPlaylistHeaders = field(default=None)
    request: EndpointRemoveTracksPlaylistRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: EndpointRemoveTracksPlaylistSecurity = field(default=None)
    

@dataclass
class EndpointRemoveTracksPlaylistResponse:
    content_type: str = field(default=None)
    error_response_object: Optional[shared.ErrorResponseObject] = field(default=None)
    snapshot_id_object: Optional[shared.SnapshotIDObject] = field(default=None)
    status_code: int = field(default=None)
    

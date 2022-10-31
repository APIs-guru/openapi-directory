from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class EndpointAddTracksToPlaylistPathParams:
    playlist_id: str = field(default=None, metadata={'path_param': { 'field_name': 'playlist_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class EndpointAddTracksToPlaylistQueryParams:
    position: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'position', 'style': 'form', 'explode': True }})
    uris: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'uris', 'style': 'form', 'explode': True }})
    

@dataclass
class EndpointAddTracksToPlaylistHeaders:
    authorization: str = field(default=None, metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    content_type: str = field(default=None, metadata={'header': { 'field_name': 'Content-Type', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class EndpointAddTracksToPlaylistRequestBody:
    position: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'position' }})
    uris: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uris' }})
    

@dataclass
class EndpointAddTracksToPlaylistSecurity:
    spotify_auth: shared.SchemeSpotifyAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class EndpointAddTracksToPlaylistRequest:
    path_params: EndpointAddTracksToPlaylistPathParams = field(default=None)
    query_params: EndpointAddTracksToPlaylistQueryParams = field(default=None)
    headers: EndpointAddTracksToPlaylistHeaders = field(default=None)
    request: Optional[EndpointAddTracksToPlaylistRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: EndpointAddTracksToPlaylistSecurity = field(default=None)
    

@dataclass
class EndpointAddTracksToPlaylistResponse:
    content_type: str = field(default=None)
    error_response_object: Optional[shared.ErrorResponseObject] = field(default=None)
    snapshot_id_object: Optional[shared.SnapshotIDObject] = field(default=None)
    status_code: int = field(default=None)
    

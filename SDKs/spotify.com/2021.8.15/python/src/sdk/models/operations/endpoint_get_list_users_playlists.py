from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class EndpointGetListUsersPlaylistsPathParams:
    user_id: str = field(default=None, metadata={'path_param': { 'field_name': 'user_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class EndpointGetListUsersPlaylistsQueryParams:
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    

@dataclass
class EndpointGetListUsersPlaylistsHeaders:
    authorization: str = field(default=None, metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclass
class EndpointGetListUsersPlaylistsSecurity:
    spotify_auth: shared.SchemeSpotifyAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class EndpointGetListUsersPlaylistsRequest:
    path_params: EndpointGetListUsersPlaylistsPathParams = field(default=None)
    query_params: EndpointGetListUsersPlaylistsQueryParams = field(default=None)
    headers: EndpointGetListUsersPlaylistsHeaders = field(default=None)
    security: EndpointGetListUsersPlaylistsSecurity = field(default=None)
    

@dataclass_json
@dataclass
class EndpointGetListUsersPlaylists200ApplicationJSON:
    href: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'href' }})
    items: Optional[List[shared.SimplifiedPlaylistObject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'items' }})
    limit: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'limit' }})
    next: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'next' }})
    offset: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'offset' }})
    previous: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'previous' }})
    total: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total' }})
    

@dataclass
class EndpointGetListUsersPlaylistsResponse:
    content_type: str = field(default=None)
    error_response_object: Optional[shared.ErrorResponseObject] = field(default=None)
    status_code: int = field(default=None)
    endpoint_get_list_users_playlists_200_application_json_object: Optional[EndpointGetListUsersPlaylists200ApplicationJSON] = field(default=None)
    

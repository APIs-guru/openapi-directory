from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class EndpointGetAListOfCurrentUsersPlaylistsQueryParams:
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    

@dataclass
class EndpointGetAListOfCurrentUsersPlaylistsHeaders:
    authorization: str = field(default=None, metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclass
class EndpointGetAListOfCurrentUsersPlaylistsSecurity:
    spotify_auth: shared.SchemeSpotifyAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class EndpointGetAListOfCurrentUsersPlaylistsRequest:
    query_params: EndpointGetAListOfCurrentUsersPlaylistsQueryParams = field(default=None)
    headers: EndpointGetAListOfCurrentUsersPlaylistsHeaders = field(default=None)
    security: EndpointGetAListOfCurrentUsersPlaylistsSecurity = field(default=None)
    

@dataclass_json
@dataclass
class EndpointGetAListOfCurrentUsersPlaylists200ApplicationJSON:
    href: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'href' }})
    items: Optional[List[shared.SimplifiedPlaylistObject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'items' }})
    limit: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'limit' }})
    next: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'next' }})
    offset: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'offset' }})
    previous: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'previous' }})
    total: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total' }})
    

@dataclass
class EndpointGetAListOfCurrentUsersPlaylistsResponse:
    content_type: str = field(default=None)
    error_response_object: Optional[shared.ErrorResponseObject] = field(default=None)
    status_code: int = field(default=None)
    endpoint_get_a_list_of_current_users_playlists_200_application_json_object: Optional[EndpointGetAListOfCurrentUsersPlaylists200ApplicationJSON] = field(default=None)
    

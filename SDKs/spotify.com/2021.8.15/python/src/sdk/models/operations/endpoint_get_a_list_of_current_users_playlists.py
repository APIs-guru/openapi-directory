from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class EndpointGetAListOfCurrentUsersPlaylistsQueryParams:
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    

@dataclass
class EndpointGetAListOfCurrentUsersPlaylistsHeaders:
    authorization: str = field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclass
class EndpointGetAListOfCurrentUsersPlaylistsSecurity:
    spotify_auth: shared.SchemeSpotifyAuth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass_json
@dataclass
class EndpointGetAListOfCurrentUsersPlaylists200ApplicationJSON:
    r"""EndpointGetAListOfCurrentUsersPlaylists200ApplicationJSON

    https://developer.spotify.com/documentation/web-api/reference/#object-pagingobject - Find more info on the official Spotify Web API Reference
    """
    
    href: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('href') }})
    items: Optional[List[shared.SimplifiedPlaylistObject]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('items') }})
    limit: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('limit') }})
    next: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next') }})
    offset: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('offset') }})
    previous: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous') }})
    total: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    

@dataclass
class EndpointGetAListOfCurrentUsersPlaylistsRequest:
    headers: EndpointGetAListOfCurrentUsersPlaylistsHeaders = field()
    query_params: EndpointGetAListOfCurrentUsersPlaylistsQueryParams = field()
    security: EndpointGetAListOfCurrentUsersPlaylistsSecurity = field()
    

@dataclass
class EndpointGetAListOfCurrentUsersPlaylistsResponse:
    content_type: str = field()
    status_code: int = field()
    error_response_object: Optional[shared.ErrorResponseObject] = field(default=None)
    endpoint_get_a_list_of_current_users_playlists_200_application_json_object: Optional[EndpointGetAListOfCurrentUsersPlaylists200ApplicationJSON] = field(default=None)
    

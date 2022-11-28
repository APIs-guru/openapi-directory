from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class EndpointGetUsersSavedAlbumsQueryParams:
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    market: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'market', 'style': 'form', 'explode': True }})
    offset: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    

@dataclass
class EndpointGetUsersSavedAlbumsHeaders:
    authorization: str = field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclass
class EndpointGetUsersSavedAlbumsSecurity:
    spotify_auth: shared.SchemeSpotifyAuth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass_json
@dataclass
class EndpointGetUsersSavedAlbums200ApplicationJSON:
    r"""EndpointGetUsersSavedAlbums200ApplicationJSON

    https://developer.spotify.com/documentation/web-api/reference/#object-pagingobject - Find more info on the official Spotify Web API Reference
    """
    
    href: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('href') }})
    items: Optional[List[shared.SavedAlbumObject]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('items') }})
    limit: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('limit') }})
    next: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next') }})
    offset: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('offset') }})
    previous: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous') }})
    total: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    

@dataclass
class EndpointGetUsersSavedAlbumsRequest:
    headers: EndpointGetUsersSavedAlbumsHeaders = field()
    query_params: EndpointGetUsersSavedAlbumsQueryParams = field()
    security: EndpointGetUsersSavedAlbumsSecurity = field()
    

@dataclass
class EndpointGetUsersSavedAlbumsResponse:
    content_type: str = field()
    status_code: int = field()
    error_response_object: Optional[shared.ErrorResponseObject] = field(default=None)
    endpoint_get_users_saved_albums_200_application_json_object: Optional[EndpointGetUsersSavedAlbums200ApplicationJSON] = field(default=None)
    

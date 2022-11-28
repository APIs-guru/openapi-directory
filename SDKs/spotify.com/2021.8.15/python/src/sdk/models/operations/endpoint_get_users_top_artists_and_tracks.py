from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class EndpointGetUsersTopArtistsAndTracksPathParams:
    type: str = field(metadata={'path_param': { 'field_name': 'type', 'style': 'simple', 'explode': False }})
    

@dataclass
class EndpointGetUsersTopArtistsAndTracksQueryParams:
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    time_range: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'time_range', 'style': 'form', 'explode': True }})
    

@dataclass
class EndpointGetUsersTopArtistsAndTracksHeaders:
    authorization: str = field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclass
class EndpointGetUsersTopArtistsAndTracksSecurity:
    spotify_auth: shared.SchemeSpotifyAuth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass_json
@dataclass
class EndpointGetUsersTopArtistsAndTracks200ApplicationJSON:
    r"""EndpointGetUsersTopArtistsAndTracks200ApplicationJSON

    https://developer.spotify.com/documentation/web-api/reference/#object-pagingobject - Find more info on the official Spotify Web API Reference
    """
    
    href: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('href') }})
    items: Optional[List[Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('items') }})
    limit: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('limit') }})
    next: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next') }})
    offset: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('offset') }})
    previous: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous') }})
    total: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    

@dataclass
class EndpointGetUsersTopArtistsAndTracksRequest:
    headers: EndpointGetUsersTopArtistsAndTracksHeaders = field()
    path_params: EndpointGetUsersTopArtistsAndTracksPathParams = field()
    query_params: EndpointGetUsersTopArtistsAndTracksQueryParams = field()
    security: EndpointGetUsersTopArtistsAndTracksSecurity = field()
    

@dataclass
class EndpointGetUsersTopArtistsAndTracksResponse:
    content_type: str = field()
    status_code: int = field()
    error_response_object: Optional[shared.ErrorResponseObject] = field(default=None)
    endpoint_get_users_top_artists_and_tracks_200_application_json_object: Optional[EndpointGetUsersTopArtistsAndTracks200ApplicationJSON] = field(default=None)
    

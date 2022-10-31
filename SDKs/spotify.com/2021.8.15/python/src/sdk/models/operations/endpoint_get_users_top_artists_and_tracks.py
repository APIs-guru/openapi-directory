from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class EndpointGetUsersTopArtistsAndTracksPathParams:
    type: str = field(default=None, metadata={'path_param': { 'field_name': 'type', 'style': 'simple', 'explode': False }})
    

@dataclass
class EndpointGetUsersTopArtistsAndTracksQueryParams:
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    time_range: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'time_range', 'style': 'form', 'explode': True }})
    

@dataclass
class EndpointGetUsersTopArtistsAndTracksHeaders:
    authorization: str = field(default=None, metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclass
class EndpointGetUsersTopArtistsAndTracksSecurity:
    spotify_auth: shared.SchemeSpotifyAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class EndpointGetUsersTopArtistsAndTracksRequest:
    path_params: EndpointGetUsersTopArtistsAndTracksPathParams = field(default=None)
    query_params: EndpointGetUsersTopArtistsAndTracksQueryParams = field(default=None)
    headers: EndpointGetUsersTopArtistsAndTracksHeaders = field(default=None)
    security: EndpointGetUsersTopArtistsAndTracksSecurity = field(default=None)
    

@dataclass_json
@dataclass
class EndpointGetUsersTopArtistsAndTracks200ApplicationJSON:
    href: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'href' }})
    items: Optional[List[Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'items' }})
    limit: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'limit' }})
    next: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'next' }})
    offset: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'offset' }})
    previous: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'previous' }})
    total: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total' }})
    

@dataclass
class EndpointGetUsersTopArtistsAndTracksResponse:
    content_type: str = field(default=None)
    error_response_object: Optional[shared.ErrorResponseObject] = field(default=None)
    status_code: int = field(default=None)
    endpoint_get_users_top_artists_and_tracks_200_application_json_object: Optional[EndpointGetUsersTopArtistsAndTracks200ApplicationJSON] = field(default=None)
    

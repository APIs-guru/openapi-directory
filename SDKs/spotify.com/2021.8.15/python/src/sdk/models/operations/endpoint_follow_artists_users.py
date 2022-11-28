from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class EndpointFollowArtistsUsersQueryParams:
    ids: str = field(metadata={'query_param': { 'field_name': 'ids', 'style': 'form', 'explode': True }})
    type: str = field(metadata={'query_param': { 'field_name': 'type', 'style': 'form', 'explode': True }})
    

@dataclass
class EndpointFollowArtistsUsersHeaders:
    authorization: str = field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    content_type: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'Content-Type', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class EndpointFollowArtistsUsersRequestBody:
    ids: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ids') }})
    

@dataclass
class EndpointFollowArtistsUsersSecurity:
    spotify_auth: shared.SchemeSpotifyAuth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class EndpointFollowArtistsUsersRequest:
    headers: EndpointFollowArtistsUsersHeaders = field()
    query_params: EndpointFollowArtistsUsersQueryParams = field()
    request: EndpointFollowArtistsUsersRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    security: EndpointFollowArtistsUsersSecurity = field()
    

@dataclass
class EndpointFollowArtistsUsersResponse:
    content_type: str = field()
    status_code: int = field()
    error_response_object: Optional[shared.ErrorResponseObject] = field(default=None)
    

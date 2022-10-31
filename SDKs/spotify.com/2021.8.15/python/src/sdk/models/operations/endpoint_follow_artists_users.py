from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class EndpointFollowArtistsUsersQueryParams:
    ids: str = field(default=None, metadata={'query_param': { 'field_name': 'ids', 'style': 'form', 'explode': True }})
    type: str = field(default=None, metadata={'query_param': { 'field_name': 'type', 'style': 'form', 'explode': True }})
    

@dataclass
class EndpointFollowArtistsUsersHeaders:
    authorization: str = field(default=None, metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    content_type: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'Content-Type', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class EndpointFollowArtistsUsersRequestBody:
    ids: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ids' }})
    

@dataclass
class EndpointFollowArtistsUsersSecurity:
    spotify_auth: shared.SchemeSpotifyAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class EndpointFollowArtistsUsersRequest:
    query_params: EndpointFollowArtistsUsersQueryParams = field(default=None)
    headers: EndpointFollowArtistsUsersHeaders = field(default=None)
    request: EndpointFollowArtistsUsersRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: EndpointFollowArtistsUsersSecurity = field(default=None)
    

@dataclass
class EndpointFollowArtistsUsersResponse:
    content_type: str = field(default=None)
    error_response_object: Optional[shared.ErrorResponseObject] = field(default=None)
    status_code: int = field(default=None)
    

from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class EndpointUnfollowArtistsUsersQueryParams:
    ids: str = field(default=None, metadata={'query_param': { 'field_name': 'ids', 'style': 'form', 'explode': True }})
    type: str = field(default=None, metadata={'query_param': { 'field_name': 'type', 'style': 'form', 'explode': True }})
    

@dataclass
class EndpointUnfollowArtistsUsersHeaders:
    authorization: str = field(default=None, metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    content_type: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'Content-Type', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class EndpointUnfollowArtistsUsersRequestBody:
    ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ids' }})
    

@dataclass
class EndpointUnfollowArtistsUsersSecurity:
    spotify_auth: shared.SchemeSpotifyAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class EndpointUnfollowArtistsUsersRequest:
    query_params: EndpointUnfollowArtistsUsersQueryParams = field(default=None)
    headers: EndpointUnfollowArtistsUsersHeaders = field(default=None)
    request: Optional[EndpointUnfollowArtistsUsersRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: EndpointUnfollowArtistsUsersSecurity = field(default=None)
    

@dataclass
class EndpointUnfollowArtistsUsersResponse:
    content_type: str = field(default=None)
    error_response_object: Optional[shared.ErrorResponseObject] = field(default=None)
    status_code: int = field(default=None)
    

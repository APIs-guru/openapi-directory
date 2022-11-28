from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class EndpointSaveAlbumsUserQueryParams:
    ids: str = field(metadata={'query_param': { 'field_name': 'ids', 'style': 'form', 'explode': True }})
    

@dataclass
class EndpointSaveAlbumsUserHeaders:
    authorization: str = field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    content_type: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'Content-Type', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class EndpointSaveAlbumsUserRequestBody:
    ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ids') }})
    

@dataclass
class EndpointSaveAlbumsUserSecurity:
    spotify_auth: shared.SchemeSpotifyAuth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class EndpointSaveAlbumsUserRequest:
    headers: EndpointSaveAlbumsUserHeaders = field()
    query_params: EndpointSaveAlbumsUserQueryParams = field()
    security: EndpointSaveAlbumsUserSecurity = field()
    request: Optional[EndpointSaveAlbumsUserRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class EndpointSaveAlbumsUserResponse:
    content_type: str = field()
    status_code: int = field()
    error_response_object: Optional[shared.ErrorResponseObject] = field(default=None)
    

from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class EndpointSaveAlbumsUserQueryParams:
    ids: str = field(default=None, metadata={'query_param': { 'field_name': 'ids', 'style': 'form', 'explode': True }})
    

@dataclass
class EndpointSaveAlbumsUserHeaders:
    authorization: str = field(default=None, metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    content_type: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'Content-Type', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class EndpointSaveAlbumsUserRequestBody:
    ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ids' }})
    

@dataclass
class EndpointSaveAlbumsUserSecurity:
    spotify_auth: shared.SchemeSpotifyAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class EndpointSaveAlbumsUserRequest:
    query_params: EndpointSaveAlbumsUserQueryParams = field(default=None)
    headers: EndpointSaveAlbumsUserHeaders = field(default=None)
    request: Optional[EndpointSaveAlbumsUserRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: EndpointSaveAlbumsUserSecurity = field(default=None)
    

@dataclass
class EndpointSaveAlbumsUserResponse:
    content_type: str = field(default=None)
    error_response_object: Optional[shared.ErrorResponseObject] = field(default=None)
    status_code: int = field(default=None)
    

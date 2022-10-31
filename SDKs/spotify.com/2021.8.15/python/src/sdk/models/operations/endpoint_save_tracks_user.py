from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class EndpointSaveTracksUserQueryParams:
    ids: str = field(default=None, metadata={'query_param': { 'field_name': 'ids', 'style': 'form', 'explode': True }})
    

@dataclass
class EndpointSaveTracksUserHeaders:
    authorization: str = field(default=None, metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    content_type: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'Content-Type', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class EndpointSaveTracksUserRequestBody:
    ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ids' }})
    

@dataclass
class EndpointSaveTracksUserSecurity:
    spotify_auth: shared.SchemeSpotifyAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class EndpointSaveTracksUserRequest:
    query_params: EndpointSaveTracksUserQueryParams = field(default=None)
    headers: EndpointSaveTracksUserHeaders = field(default=None)
    request: Optional[EndpointSaveTracksUserRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: EndpointSaveTracksUserSecurity = field(default=None)
    

@dataclass
class EndpointSaveTracksUserResponse:
    content_type: str = field(default=None)
    error_response_object: Optional[shared.ErrorResponseObject] = field(default=None)
    status_code: int = field(default=None)
    

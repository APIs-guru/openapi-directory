from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class EndpointRemoveEpisodesUserQueryParams:
    ids: str = field(default=None, metadata={'query_param': { 'field_name': 'ids', 'style': 'form', 'explode': True }})
    

@dataclass
class EndpointRemoveEpisodesUserHeaders:
    authorization: str = field(default=None, metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    content_type: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'Content-Type', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class EndpointRemoveEpisodesUserRequestBody:
    ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ids' }})
    

@dataclass
class EndpointRemoveEpisodesUserSecurity:
    spotify_auth: shared.SchemeSpotifyAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class EndpointRemoveEpisodesUserRequest:
    query_params: EndpointRemoveEpisodesUserQueryParams = field(default=None)
    headers: EndpointRemoveEpisodesUserHeaders = field(default=None)
    request: Optional[EndpointRemoveEpisodesUserRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: EndpointRemoveEpisodesUserSecurity = field(default=None)
    

@dataclass
class EndpointRemoveEpisodesUserResponse:
    content_type: str = field(default=None)
    error_response_object: Optional[shared.ErrorResponseObject] = field(default=None)
    status_code: int = field(default=None)
    

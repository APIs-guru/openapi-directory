from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class EndpointSaveEpisodesUserQueryParams:
    ids: str = field(default=None, metadata={'query_param': { 'field_name': 'ids', 'style': 'form', 'explode': True }})
    

@dataclass
class EndpointSaveEpisodesUserHeaders:
    authorization: str = field(default=None, metadata={'header': { 'field_name': 'Authorization' }})
    content_type: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'Content-Type' }})
    

@dataclass_json
@dataclass
class EndpointSaveEpisodesUserRequestBody:
    ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ids' }})
    

@dataclass
class EndpointSaveEpisodesUserSecurity:
    spotify_auth: shared.SchemeSpotifyAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class EndpointSaveEpisodesUserRequest:
    query_params: EndpointSaveEpisodesUserQueryParams = field(default=None)
    headers: EndpointSaveEpisodesUserHeaders = field(default=None)
    request: Optional[EndpointSaveEpisodesUserRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: EndpointSaveEpisodesUserSecurity = field(default=None)
    

@dataclass
class EndpointSaveEpisodesUserResponse:
    content_type: str = field(default=None)
    error_response_object: Optional[shared.ErrorResponseObject] = field(default=None)
    status_code: int = field(default=None)
    

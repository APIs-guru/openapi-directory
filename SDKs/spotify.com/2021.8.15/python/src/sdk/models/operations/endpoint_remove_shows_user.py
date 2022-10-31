from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class EndpointRemoveShowsUserQueryParams:
    ids: str = field(default=None, metadata={'query_param': { 'field_name': 'ids', 'style': 'form', 'explode': True }})
    market: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'market', 'style': 'form', 'explode': True }})
    

@dataclass
class EndpointRemoveShowsUserHeaders:
    authorization: str = field(default=None, metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class EndpointRemoveShowsUserRequestBody:
    ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ids' }})
    

@dataclass
class EndpointRemoveShowsUserSecurity:
    spotify_auth: shared.SchemeSpotifyAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class EndpointRemoveShowsUserRequest:
    query_params: EndpointRemoveShowsUserQueryParams = field(default=None)
    headers: EndpointRemoveShowsUserHeaders = field(default=None)
    request: Optional[EndpointRemoveShowsUserRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: EndpointRemoveShowsUserSecurity = field(default=None)
    

@dataclass
class EndpointRemoveShowsUserResponse:
    content_type: str = field(default=None)
    error_response_object: Optional[shared.ErrorResponseObject] = field(default=None)
    status_code: int = field(default=None)
    

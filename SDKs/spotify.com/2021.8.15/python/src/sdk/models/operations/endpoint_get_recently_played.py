from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class EndpointGetRecentlyPlayedQueryParams:
    after: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'after', 'style': 'form', 'explode': True }})
    before: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'before', 'style': 'form', 'explode': True }})
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    

@dataclass
class EndpointGetRecentlyPlayedHeaders:
    authorization: str = field(default=None, metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclass
class EndpointGetRecentlyPlayedSecurity:
    spotify_auth: shared.SchemeSpotifyAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class EndpointGetRecentlyPlayedRequest:
    query_params: EndpointGetRecentlyPlayedQueryParams = field(default=None)
    headers: EndpointGetRecentlyPlayedHeaders = field(default=None)
    security: EndpointGetRecentlyPlayedSecurity = field(default=None)
    

@dataclass_json
@dataclass
class EndpointGetRecentlyPlayed200ApplicationJSON:
    cursors: Optional[shared.CursorObject] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cursors' }})
    href: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'href' }})
    items: Optional[List[shared.PlayHistoryObject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'items' }})
    limit: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'limit' }})
    next: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'next' }})
    total: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total' }})
    

@dataclass
class EndpointGetRecentlyPlayedResponse:
    content_type: str = field(default=None)
    error_response_object: Optional[shared.ErrorResponseObject] = field(default=None)
    status_code: int = field(default=None)
    endpoint_get_recently_played_200_application_json_object: Optional[EndpointGetRecentlyPlayed200ApplicationJSON] = field(default=None)
    

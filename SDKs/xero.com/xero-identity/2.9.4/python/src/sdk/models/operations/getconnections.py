from dataclasses import dataclass, field
from typing import Any,List,Optional


@dataclass
class GetConnectionsQueryParams:
    auth_event_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'authEventId', 'style': 'form', 'explode': True }})
    

@dataclass
class GetConnectionsSecurity:
    o_auth2: shared.SchemeOAuth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetConnectionsRequest:
    query_params: GetConnectionsQueryParams = field(default=None)
    security: GetConnectionsSecurity = field(default=None)
    

@dataclass
class GetConnectionsResponse:
    connections: Optional[List[Any]] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    

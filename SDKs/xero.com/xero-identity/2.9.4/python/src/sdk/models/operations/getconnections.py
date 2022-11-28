from dataclasses import dataclass, field
from typing import Any,List,Optional
from sdk.models import shared


@dataclass
class GetConnectionsQueryParams:
    auth_event_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'authEventId', 'style': 'form', 'explode': True }})
    

@dataclass
class GetConnectionsSecurity:
    o_auth2: shared.SchemeOAuth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetConnectionsRequest:
    query_params: GetConnectionsQueryParams = field()
    security: GetConnectionsSecurity = field()
    

@dataclass
class GetConnectionsResponse:
    content_type: str = field()
    status_code: int = field()
    connections: Optional[List[Any]] = field(default=None)
    

from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class RoutesOneOrMoreRoutesQueryParams:
    devid: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'devid', 'style': 'form', 'explode': True }})
    route_name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'route_name', 'style': 'form', 'explode': True }})
    route_types: Optional[List[int]] = field(default=None, metadata={'query_param': { 'field_name': 'route_types', 'style': 'form', 'explode': True }})
    signature: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'signature', 'style': 'form', 'explode': True }})
    token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'token', 'style': 'form', 'explode': True }})
    

@dataclass
class RoutesOneOrMoreRoutesRequest:
    query_params: RoutesOneOrMoreRoutesQueryParams = field(default=None)
    

@dataclass
class RoutesOneOrMoreRoutesResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    v3_error_response: Optional[shared.V3ErrorResponse] = field(default=None)
    v3_route_response: Optional[shared.V3RouteResponse] = field(default=None)
    

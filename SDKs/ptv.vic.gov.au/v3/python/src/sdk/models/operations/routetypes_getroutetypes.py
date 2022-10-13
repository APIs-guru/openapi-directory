from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class RouteTypesGetRouteTypesQueryParams:
    devid: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'devid', 'style': 'form', 'explode': True }})
    signature: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'signature', 'style': 'form', 'explode': True }})
    token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'token', 'style': 'form', 'explode': True }})
    

@dataclass
class RouteTypesGetRouteTypesRequest:
    query_params: RouteTypesGetRouteTypesQueryParams = field(default=None)
    

@dataclass
class RouteTypesGetRouteTypesResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    v3_error_response: Optional[shared.V3ErrorResponse] = field(default=None)
    v3_route_types_response: Optional[shared.V3RouteTypesResponse] = field(default=None)
    

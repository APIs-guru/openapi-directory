from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DirectionsForRoutePathParams:
    route_id: int = field(metadata={'path_param': { 'field_name': 'route_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DirectionsForRouteQueryParams:
    devid: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'devid', 'style': 'form', 'explode': True }})
    signature: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'signature', 'style': 'form', 'explode': True }})
    token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'token', 'style': 'form', 'explode': True }})
    

@dataclass
class DirectionsForRouteRequest:
    path_params: DirectionsForRoutePathParams = field()
    query_params: DirectionsForRouteQueryParams = field()
    

@dataclass
class DirectionsForRouteResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    v3_directions_response: Optional[shared.V3DirectionsResponse] = field(default=None)
    v3_error_response: Optional[shared.V3ErrorResponse] = field(default=None)
    

from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class StopsStopsForRoutePathParams:
    route_id: int = field(default=None, metadata={'path_param': { 'field_name': 'route_id', 'style': 'simple', 'explode': False }})
    route_type: int = field(default=None, metadata={'path_param': { 'field_name': 'route_type', 'style': 'simple', 'explode': False }})
    

@dataclass
class StopsStopsForRouteQueryParams:
    devid: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'devid', 'style': 'form', 'explode': True }})
    direction_id: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'direction_id', 'style': 'form', 'explode': True }})
    geopath_utc: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'geopath_utc', 'style': 'form', 'explode': True }})
    include_geopath: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'include_geopath', 'style': 'form', 'explode': True }})
    signature: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'signature', 'style': 'form', 'explode': True }})
    stop_disruptions: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'stop_disruptions', 'style': 'form', 'explode': True }})
    token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'token', 'style': 'form', 'explode': True }})
    

@dataclass
class StopsStopsForRouteRequest:
    path_params: StopsStopsForRoutePathParams = field(default=None)
    query_params: StopsStopsForRouteQueryParams = field(default=None)
    

@dataclass
class StopsStopsForRouteResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    v3_error_response: Optional[shared.V3ErrorResponse] = field(default=None)
    v3_stops_on_route_response: Optional[shared.V3StopsOnRouteResponse] = field(default=None)
    

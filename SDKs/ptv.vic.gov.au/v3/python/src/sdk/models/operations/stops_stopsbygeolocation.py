from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class StopsStopsByGeolocationPathParams:
    latitude: float = field(default=None, metadata={'path_param': { 'field_name': 'latitude', 'style': 'simple', 'explode': False }})
    longitude: float = field(default=None, metadata={'path_param': { 'field_name': 'longitude', 'style': 'simple', 'explode': False }})
    

@dataclass
class StopsStopsByGeolocationQueryParams:
    devid: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'devid', 'style': 'form', 'explode': True }})
    max_distance: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'max_distance', 'style': 'form', 'explode': True }})
    max_results: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'max_results', 'style': 'form', 'explode': True }})
    route_types: Optional[List[int]] = field(default=None, metadata={'query_param': { 'field_name': 'route_types', 'style': 'form', 'explode': True }})
    signature: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'signature', 'style': 'form', 'explode': True }})
    stop_disruptions: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'stop_disruptions', 'style': 'form', 'explode': True }})
    token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'token', 'style': 'form', 'explode': True }})
    

@dataclass
class StopsStopsByGeolocationRequest:
    path_params: StopsStopsByGeolocationPathParams = field(default=None)
    query_params: StopsStopsByGeolocationQueryParams = field(default=None)
    

@dataclass
class StopsStopsByGeolocationResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    v3_error_response: Optional[shared.V3ErrorResponse] = field(default=None)
    v3_stops_by_distance_response: Optional[shared.V3StopsByDistanceResponse] = field(default=None)
    

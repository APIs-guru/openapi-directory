from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class StopPointDisruptionPathParams:
    ids: List[str] = field(metadata={'path_param': { 'field_name': 'ids', 'style': 'simple', 'explode': False }})
    

@dataclass
class StopPointDisruptionQueryParams:
    flatten_response: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'flattenResponse', 'style': 'form', 'explode': True }})
    get_family: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'getFamily', 'style': 'form', 'explode': True }})
    include_route_blocked_stops: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'includeRouteBlockedStops', 'style': 'form', 'explode': True }})
    

@dataclass
class StopPointDisruptionRequest:
    path_params: StopPointDisruptionPathParams = field()
    query_params: StopPointDisruptionQueryParams = field()
    

@dataclass
class StopPointDisruptionResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    tfl_api_presentation_entities_disrupted_points: Optional[List[shared.TflAPIPresentationEntitiesDisruptedPoint]] = field(default=None)
    

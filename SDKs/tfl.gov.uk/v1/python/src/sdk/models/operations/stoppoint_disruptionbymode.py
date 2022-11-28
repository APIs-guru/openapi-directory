from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class StopPointDisruptionByModePathParams:
    modes: List[str] = field(metadata={'path_param': { 'field_name': 'modes', 'style': 'simple', 'explode': False }})
    

@dataclass
class StopPointDisruptionByModeQueryParams:
    include_route_blocked_stops: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'includeRouteBlockedStops', 'style': 'form', 'explode': True }})
    

@dataclass
class StopPointDisruptionByModeRequest:
    path_params: StopPointDisruptionByModePathParams = field()
    query_params: StopPointDisruptionByModeQueryParams = field()
    

@dataclass
class StopPointDisruptionByModeResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    tfl_api_presentation_entities_disrupted_points: Optional[List[shared.TflAPIPresentationEntitiesDisruptedPoint]] = field(default=None)
    

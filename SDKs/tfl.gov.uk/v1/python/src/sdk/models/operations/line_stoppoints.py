from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class LineStopPointsPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class LineStopPointsQueryParams:
    tfl_operated_national_rail_stations_only: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'tflOperatedNationalRailStationsOnly', 'style': 'form', 'explode': True }})
    

@dataclass
class LineStopPointsRequest:
    path_params: LineStopPointsPathParams = field()
    query_params: LineStopPointsQueryParams = field()
    

@dataclass
class LineStopPointsResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    tfl_api_presentation_entities_stop_points: Optional[List[shared.TflAPIPresentationEntitiesStopPoint]] = field(default=None)
    

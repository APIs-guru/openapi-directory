from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class OccupancyGetBikePointsOccupanciesPathParams:
    ids: List[str] = field(metadata={'path_param': { 'field_name': 'ids', 'style': 'simple', 'explode': False }})
    

@dataclass
class OccupancyGetBikePointsOccupanciesRequest:
    path_params: OccupancyGetBikePointsOccupanciesPathParams = field()
    

@dataclass
class OccupancyGetBikePointsOccupanciesResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    tfl_api_presentation_entities_bike_point_occupancies: Optional[List[shared.TflAPIPresentationEntitiesBikePointOccupancy]] = field(default=None)
    

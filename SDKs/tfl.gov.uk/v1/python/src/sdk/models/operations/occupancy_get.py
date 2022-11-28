from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class OccupancyGetPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class OccupancyGetRequest:
    path_params: OccupancyGetPathParams = field()
    

@dataclass
class OccupancyGetResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    tfl_api_presentation_entities_car_park_occupancy: Optional[shared.TflAPIPresentationEntitiesCarParkOccupancy] = field(default=None)
    

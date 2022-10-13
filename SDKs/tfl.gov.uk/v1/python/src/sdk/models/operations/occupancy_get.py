from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class OccupancyGetPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class OccupancyGetRequest:
    path_params: OccupancyGetPathParams = field(default=None)
    

@dataclass
class OccupancyGetResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    tfl_api_presentation_entities_car_park_occupancy: Optional[shared.TflAPIPresentationEntitiesCarParkOccupancy] = field(default=None)
    

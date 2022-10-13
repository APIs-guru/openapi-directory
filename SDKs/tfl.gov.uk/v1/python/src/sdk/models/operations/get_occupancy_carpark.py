from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetOccupancyCarParkResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    tfl_api_presentation_entities_car_park_occupancies: Optional[List[shared.TflAPIPresentationEntitiesCarParkOccupancy]] = field(default=None)
    

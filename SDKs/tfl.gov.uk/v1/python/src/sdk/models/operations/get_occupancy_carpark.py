from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetOccupancyCarParkResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    tfl_api_presentation_entities_car_park_occupancies: Optional[List[shared.TflAPIPresentationEntitiesCarParkOccupancy]] = field(default=None)
    

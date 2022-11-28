from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class RoadGetResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    tfl_api_presentation_entities_road_corridors: Optional[List[shared.TflAPIPresentationEntitiesRoadCorridor]] = field(default=None)
    

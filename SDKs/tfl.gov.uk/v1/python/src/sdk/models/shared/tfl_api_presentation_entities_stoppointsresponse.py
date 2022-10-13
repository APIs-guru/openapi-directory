from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import tfl_api_presentation_entities_stoppoint


@dataclass_json
@dataclass
class TflAPIPresentationEntitiesStopPointsResponse:
    centre_point: Optional[List[float]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'centrePoint' }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page' }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pageSize' }})
    stop_points: Optional[List[tfl_api_presentation_entities_stoppoint.TflAPIPresentationEntitiesStopPoint]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stopPoints' }})
    total: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total' }})
    

from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import tfl_api_presentation_entities_timetableroute


@dataclass_json
@dataclass
class TflAPIPresentationEntitiesTimetable:
    departure_stop_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'departureStopId' }})
    routes: Optional[List[tfl_api_presentation_entities_timetableroute.TflAPIPresentationEntitiesTimetableRoute]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'routes' }})
    

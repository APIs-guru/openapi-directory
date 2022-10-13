from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import tfl_api_presentation_entities_schedule
from . import tfl_api_presentation_entities_stationinterval


@dataclass_json
@dataclass
class TflAPIPresentationEntitiesTimetableRoute:
    schedules: Optional[List[tfl_api_presentation_entities_schedule.TflAPIPresentationEntitiesSchedule]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'schedules' }})
    station_intervals: Optional[List[tfl_api_presentation_entities_stationinterval.TflAPIPresentationEntitiesStationInterval]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stationIntervals' }})
    

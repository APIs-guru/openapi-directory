from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class TflAPIPresentationEntitiesTimetableRoute:
    schedules: Optional[List[TflAPIPresentationEntitiesSchedule]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('schedules') }})
    station_intervals: Optional[List[TflAPIPresentationEntitiesStationInterval]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stationIntervals') }})
    

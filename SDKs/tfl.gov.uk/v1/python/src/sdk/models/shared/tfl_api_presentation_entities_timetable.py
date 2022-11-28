from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class TflAPIPresentationEntitiesTimetable:
    departure_stop_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('departureStopId') }})
    routes: Optional[List[TflAPIPresentationEntitiesTimetableRoute]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('routes') }})
    
